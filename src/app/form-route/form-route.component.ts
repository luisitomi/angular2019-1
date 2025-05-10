import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-route',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './form-route.component.html',
  styleUrl: './form-route.component.css'
})
export class FormRouteComponent {
  readonly #router = inject(Router);

  regresarPaginaAnterior(): void {
    this.#router.navigate(['/new-form']).then()
  }
}
