import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { Observable } from 'rxjs';
import { TaskCardComponent } from "../task-card/task-card.component";
import { user } from '../shared';
import { FormsModule } from '@angular/forms';
import { T } from '@angular/cdk/keycodes';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [MatSnackBarModule, FormsModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule, TaskCardComponent]
})
export default class ProfileComponent {
  user$: Observable<user | null>;
  newTask = { title: '', description: '' };
  tasks: { title: string; description: string }[] = [];
  completedTasks: { title: string; description: string  }[] = [];

  constructor(private authService: AuthServiceService) {
    this.user$ = this.authService.user$;


    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }

    const storedCompletedTasks = localStorage.getItem('completedTasks');
    if (storedCompletedTasks) {
      this.completedTasks = JSON.parse(storedCompletedTasks);
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

  removeTask(index: number){
      this.tasks.splice(index, 1)
      console.log(index)
      this.saveTasks();
  }

  taskComplete(index: number){
    this.completedTasks.push(this.tasks[index]);
    this.removeTask(index)
    this.saveCompletedTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  saveCompletedTasks() {
    localStorage.setItem('completedTasks', JSON.stringify(this.completedTasks));
  }

}
