import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { authEverset, everest, loginEverest } from '../consts';
import { authInter, excludeUser, user } from '../interfaces/auth-interface';
import { BehaviorSubject, Observable, pipe, tap } from 'rxjs';
import { LocalStorageKeys } from '../enums';
import { JwtHelperService } from '@auth0/angular-jwt';
import { JwtTokens } from '../interfaces';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { SweetAlertService } from './sweet-alert.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService  {
  private readonly http = inject(HttpClient);
  private readonly jwtHelperService = inject(JwtHelperService)
  private readonly route = inject(Router)
  private readonly sweetAlert = inject(SweetAlertService);


  readonly authUrl = authEverset;
  readonly loginUrl = loginEverest;
  readonly mainAPI = everest

  constructor(){
    this.init();
  }

  readonly #user$ = new BehaviorSubject<user | null>(null)
  readonly user$ = this.#user$.asObservable();

  init(){
    if(this.accessToken && this.refreshToken) {
      this.user = this.jwtHelperService.decodeToken(this.accessToken)
    }
  }

  ngOnInit(): void {
    if(this.accessToken && this.refreshToken){
      this.user = this.jwtHelperService.decodeToken(this.accessToken)
    }
  }

  register(user: authInter){
    return this.http.post<authInter>("https://api.everrest.educata.dev/auth/sign_up", user);
  }

  login(email: string, password: string){
   return this.http.post<JwtTokens>(`${this.loginUrl}`, {email, password}).pipe(
      tap((token) => {
        this.accessToken = token.access_token;
        this.refreshToken = token.refresh_token;
        this.user = this.jwtHelperService.decodeToken(token.access_token)
      })
    )
  }
  logOut(){
    localStorage.removeItem(LocalStorageKeys.AccessToken);
    localStorage.removeItem(LocalStorageKeys.RefreshToken);
    this.route.navigateByUrl('');
    this.sweetAlert.toast("Signed out", 'success', 'See you next time !')
    this.user = null;
  }

  verifyEmail(email: string){
    const headers = new HttpHeaders({
      accept: '*/*',
      'Content-Type': 'application/json',
    })

    const body = {email}
    return this.http.post(`${this.mainAPI}/auth/verify_email`, body, {headers})
  }


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

  isUserLoged(){
    if(this.jwtHelperService.isTokenExpired(this.accessToken)){
      this.route.navigateByUrl('auth')
      return false;
    }

    return true
  }

  canUserAuth(){
    if(this.accessToken || this.refreshToken){
      this.route.navigateByUrl('')
      return false;
    }
    return true
  }
}

export const CanActivate: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthServiceService).isUserLoged()
}


export const CanUserAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  return inject(AuthServiceService).canUserAuth()
}