import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, UserService } from '../../../services/user.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-form-route',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './form-route.component.html',
  styleUrl: './form-route.component.css',
})
export class FormRouteComponent implements OnInit {
  readonly #router = inject(Router);
  readonly #userService = inject(UserService);
  private $destroy = new Subject<void>();

  users = signal<IUser[]>([]);

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  regresarPaginaAnterior(): void {
    this.#router.navigate(['/new-form']).then();
  }

  cargarUsuarios(): void {
    this.#userService
      .getUser()
      .pipe(takeUntil(this.$destroy))
      .subscribe({
        next: (response: IUser[]) => {
          this.users.set(response);
        },
      });
  }
}
