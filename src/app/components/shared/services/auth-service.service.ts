import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { authEverset } from '../consts';
import { authInter, excludeUser, user } from '../interfaces/auth-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { LocalStorageKeys } from '../enums';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService implements OnInit {
  private readonly http = inject(HttpClient);
  // private readonly JwtHelperService = inject(JwtHelperService)

  readonly authUrl = authEverset;


  ngOnInit(): void {
    // if(this.accessToken && this.refreshToken){
    //   this.user = this.JwtHelperService.decodeToken(this.accessToken)
    // }
  }

  register(user: authInter){
    return this.http.post<authInter>("https://api.everrest.educata.dev/auth/sign_up", user);
  }

  readonly #user$ = new BehaviorSubject<user | null>(null)
  readonly user$ = this.#user$.asObservable();

  get user(){
    return this.#user$.value;
  }
  
  set user(user: user | null){
    this.#user$.next(user)
  }

  get accessToken(){
    return localStorage.getItem(LocalStorageKeys.AccessToken)
  }

  set accessToken(token: string | null){
    localStorage.setItem(LocalStorageKeys.AccessToken, token || '')
  }

  get refreshToken(){
    return localStorage.getItem(LocalStorageKeys.RefreshToken) || '';
  }

  set refreshToken(token: string){
    localStorage.setItem(LocalStorageKeys.RefreshToken, token)
  }

}
