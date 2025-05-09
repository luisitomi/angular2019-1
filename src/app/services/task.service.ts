import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITask {
  id: number;
  name: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: ITask[] = [];
  private tasksSubject = new BehaviorSubject<ITask[]>(this.tasks);
  tasks$ = this.tasksSubject.asObservable();

  private nextId: number = 1;

  constructor() {
    this.loadTasks();
  }

  private loadTasks(): void {
    this.tasks = [
      { id: this.nextId++, name: 'Polo', completed: false },
      { id: this.nextId++, name: 'Camisa', completed: true },
      { id: this.nextId++, name: 'Zapatillas', completed: false },
    ];
    this.tasksSubject.next(this.tasks);
  }

  addTask(name: string): void {
    const newTask: ITask = { id: this.nextId++, name, completed: false };
    this.tasks = [...this.tasks, newTask];
    this.tasksSubject.next(this.tasks);
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id != id);
    this.tasksSubject.next(this.tasks);
  }

  toogleCompleted(id: number): void {
    this.tasks = this.tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    this.tasksSubject.next(this.tasks);
  }
}
