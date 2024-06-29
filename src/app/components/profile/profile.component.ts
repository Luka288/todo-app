import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule, JsonPipe } from '@angular/common';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { Observable } from 'rxjs';
import { TaskCardComponent } from "../task-card/task-card.component";
import { user } from '../shared';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SweetAlertService } from '../shared/services/sweet-alert.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MatSnackBarModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule, TaskCardComponent]
})
export default class ProfileComponent {
  private readonly sweetAlert = inject(SweetAlertService)
  user$: Observable<user | null>;
  newTask = { title: '', description: '' };
  tasks: { title: string; description: string }[] = [];
  completedTasks: { title: string; description: string  }[] = [];
  prevLength = this.completedTasks.length

  score = 0;

  constructor(private authService: AuthServiceService, private cdr: ChangeDetectorRef) {
    this.user$ = this.authService.user$;


    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    const storedCompletedTasks = localStorage.getItem('completedTasks');
    if (storedCompletedTasks) {
      this.completedTasks = JSON.parse(storedCompletedTasks);
    }

    let finalScore = localStorage.getItem('score')

    if(finalScore){
      this.score = JSON.parse(finalScore)
    }


    if(this.completedTasks.length === 0 ){
      this.score = 0;
      this.prevLength = 0;
      finalScore = null;
      this.saveScore()
    }
  }


  addTask(){
    if(this.newTask.title && this.newTask.description){
      this.tasks.push({...this.newTask});
      this.newTask.title = ''
      this.newTask.description = ''
    }
    this.saveTasks();
  }

  
  taskComplete(index: number){
    this.completedTasks.push(this.tasks[index]);
    this.removeOnAdd(index)
    this.saveCompletedTasks();
    
    if(this.completedTasks.length > this.prevLength){
      this.score += 10;
      this.prevLength = this.completedTasks.length;
      this.saveScore()
      this.sweetAlert.toast('You gained 10 score ! ', 'success', 'complate more tasks to gain more score !')
    }
  }
  
  removeOnAdd(index: number){
    this.tasks.splice(index, 1)
    this.saveTasks()
  }
  
  removeTask(index: number){
      this.tasks.splice(index, 1)
      this.sweetAlert.toast('You lost 10 score !', 'warning', 'In every removed task you will lost 10 score !')
      this.saveTasks(); 
      localStorage.setItem('score', JSON.stringify(this.score -= 10))
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  saveCompletedTasks() {
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
  }

  removeComplatedTasks(){
    this.completedTasks = []
    localStorage.setItem('score', JSON.stringify(this.score = 0))
    localStorage.removeItem('completedTasks')
  }

  saveScore(){
    localStorage.setItem('score', JSON.stringify(this.score));
  }


  ranks = {
    silver : 'serjanti',
    bronze : 'master serjanti',
  }
}
