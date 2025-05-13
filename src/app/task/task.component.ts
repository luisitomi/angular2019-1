import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { TaskListComponent } from '../task-list/task-list.component';
import { TaskFormComponent } from '../task-form/task-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  imports: [CommonModule, TaskListComponent, TaskFormComponent],
  standalone: true,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit {
  readonly #router = inject(Router);

  ngOnInit(): void {
    if(!localStorage.getItem('acceso')){
      this.#router.navigate(['/products']).then();
    }
  }

}
