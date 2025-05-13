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
import { CustomValidators } from '../../helpers/custom-validators.validator';

@Component({
  selector: 'app-products-shell',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './products-shell.component.html',
  styleUrl: './products-shell.component.css',
})
export class ProductsShellComponent implements OnInit {
  readonly fb = inject(FormBuilder);
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
    localStorage.clear();
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
    } else {
      this.form.markAllAsTouched();
      this.nameForm.set('');
    }
  }
}
