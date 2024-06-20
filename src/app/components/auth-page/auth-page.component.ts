import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatTabChangeEvent, MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { authInter } from '../shared/interfaces/auth-interface';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { SweetAlertService } from '../shared/services/sweet-alert.service';
import { tap } from 'rxjs';


@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterModule, RouterOutlet, MatInputModule, CommonModule, ReactiveFormsModule, MatTabsModule, MatButtonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss',  
})
export default class AuthPageComponent {
  private readonly fb = inject(FormBuilder)
  private readonly auth = inject(AuthServiceService)
  private readonly sweetAlert = inject(SweetAlertService)


  tabIndex = 0;

  readonly signUpForm = this.fb.group({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(16),
    ]),

    lastName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(16)]],

    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),

    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(22),
    ]),
    address: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),

    age: new FormControl(10, [
      Validators.required,
      Validators.minLength(2),
      Validators.min(10),
      Validators.max(150),
    ]),
    
    zipcode: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(6),
    ]),
    gender: new FormControl('MALE', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.minLength(2)]),
  })


  register(){
    const user = this.signUpForm.value as authInter;
    user.avatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${user.firstName}`
    this.auth.register(user).pipe(tap(user => {
      if(user._id){
        this.sweetAlert.alert('success', 'success', 'success')
        this.tabIndex = 0;
      }
      this.signUpForm.reset()
      console.log(user)
    })).subscribe()

    if(!user.email || !user.password){
      this.sweetAlert.toast("Wrong", 'error', 'no');
      return
    }
  }
}
