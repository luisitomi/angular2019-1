import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { ITask, TaskService } from '../../../services/task.service';
import { Subject, Subscription, takeUntil } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit, OnDestroy {
  readonly #taskService = inject(TaskService);
  readonly #router = inject(Router);
  private destroy$ = new Subject<void>();

  tasks = signal<ITask[]>([]);

  // tasks: ITask[] = [];
  // private tasksSuscription: Subscription | undefined;

  // constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {
    // this.tasksSuscription = this.taskService.tasks$.subscribe((tasks) => {
    //   this.tasks = tasks;
    // });
    this.#taskService.tasks$.pipe(takeUntil(this.destroy$)).subscribe({
      next: (tasks) => {
        this.tasks.set(tasks);
      },
      error: (error) => {
        console.log(error);
        alert(error);
      },
    });
  }
  ngOnDestroy(): void {
    // if (this.tasksSuscription) {
    //   this.tasksSuscription.unsubscribe();
    // }
    this.finalizarDestroy();
  }

  finalizarDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDeleteTask(id: number): void {
    this.#taskService.deleteTask(id);
  }

  onToogleCompleted(id: number): void {
    this.#taskService.toogleCompleted(id);
  }

  redireccionarPagina(): void {
    // this.router.navigate(['/form-route']);
    // this.#router.navigate(['/form-route']).then();
    this.#router.navigateByUrl('/form-route').then();
  }
}
