import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskFormComponent } from '../task-form/task-form.component';

@Component({
  selector: 'app-task',
  imports: [CommonModule, TaskListComponent, TaskFormComponent],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

}
