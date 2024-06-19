import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatInputModule, CommonModule, ReactiveFormsModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',  
})
export default class AuthPageComponent {
  private readonly fb = inject(FormBuilder)


  readonly signUpForm = this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(2),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.minLength(2)
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ])
  })
}
