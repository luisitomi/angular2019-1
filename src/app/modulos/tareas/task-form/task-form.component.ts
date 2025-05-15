import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  readonly #taskService = inject(TaskService);
  newTaskName = signal<string>('');

  // newTaskName: string = '';

  // constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.newTaskName().trim()) {
      this.#taskService.addTask(this.newTaskName());
      this.newTaskName.set('');
    }
  }
}
