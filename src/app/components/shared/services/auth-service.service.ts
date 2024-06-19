import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { authEverset } from '../consts';
import { authInter } from '../interfaces/auth-interface';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly http = inject(HttpClient);

  readonly authUrl = authEverset;


  register(user: authInter){
   return this.http.post<authInter>(`${this.authUrl}/auth/sign_up`, user)
  }

  login(){
    
  }

}
