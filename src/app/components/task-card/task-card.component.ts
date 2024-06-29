import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import ProfileComponent from '../profile/profile.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {
  @Input() task!: { title: string, description: string };
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();
  @Output() complete = new EventEmitter<number>();


  complatedTasks: string[] = []
 
  taskRemove(){
    this.remove.emit(this.index)
  }

  complateTask(){
    this.complete.emit(this.index);
  }
}
