import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ITask, TaskService } from '../services/task.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit, OnDestroy {
  tasks: ITask[] = [];
  private tasksSuscription: Subscription | undefined;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasksSuscription = this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }
  ngOnDestroy(): void {
    if (this.tasksSuscription) {
      this.tasksSuscription.unsubscribe();
    }
  }

  onDeleteTask(id: number): void {
    this.taskService.deleteTask(id);
  }

  onToogleCompleted(id: number): void {
    this.taskService.toogleCompleted(id);
  }
}
