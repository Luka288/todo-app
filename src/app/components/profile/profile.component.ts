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

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss',
    imports: [FormsModule, MatButtonModule, MatDividerModule, MatIconModule, CommonModule, TaskCardComponent]
})
export default class ProfileComponent {
  user$: Observable<user | null>;
  newTask = { title: '', description: '' };
  tasks: { title: string; description: string }[] = [];
  completedTasks: { title: string; description: string  }[] = [];

  constructor(private authService: AuthServiceService) {
    this.user$ = this.authService.user$;
  }

  addTask(){
    if(this.newTask.title && this.newTask.description){
      this.tasks.push({...this.newTask});
      this.newTask.title = ''
      this.newTask.description = ''
    }
  }

  removeTask(index: number){
    this.tasks.splice(index, 1)
  }

  taskComplete(index: number){
    this.completedTasks.push(this.tasks[index]);
    this.removeTask(index)
  }
}
