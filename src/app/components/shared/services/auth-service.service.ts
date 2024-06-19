import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { authEverset } from '../consts';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private readonly http = inject(HttpClient);

  readonly authUrl = authEverset;


  register(){

  }

  login(){
    
  }

}
