import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../../../helpers/custom-validators.validator';
import { TokenService } from '../../../helpers/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-shell',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './products-shell.component.html',
  styleUrl: './products-shell.component.css',
})
export class ProductsShellComponent implements OnInit {
  readonly fb = inject(FormBuilder);
  readonly #tokenService = inject(TokenService);
  readonly #router = inject(Router);

  nameForm = signal<string>('');
  form!: FormGroup;

  constructor() {
    this.form = this.fb.group(
      {
        name: [
          '',
          [Validators.required, Validators.minLength(8), Validators.email],
        ],
        nameConfirm: [
          '',
          [Validators.required, Validators.minLength(8), Validators.email],
        ],
      },
      {
        validators: CustomValidators.mustBeEqual('name', 'nameConfirm'),
      }
    );
  }

  ngOnInit(): void {
    if(typeof sessionStorage !== 'undefined'){
      this.#tokenService.removeToken();
    }
  }

  get name(): FormControl {
    return this.form.get('name')! as FormControl;
  }

  get nameConfirm(): FormControl {
    return this.form.get('nameConfirm')! as FormControl;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.nameForm.set(this.name.value);
      this.#tokenService.setToken(this.name.value);
      this.#router.navigate(['/form-route']).then();
    } else {
      this.form.markAllAsTouched();
      this.nameForm.set('');
    }
  }
}
