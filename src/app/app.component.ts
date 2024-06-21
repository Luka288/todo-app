import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SweetAlertService } from './components/shared/services/sweet-alert.service';
import { AuthServiceService } from './components/shared/services/auth-service.service';
import { NavigationLeft, NavigationLeftAfter, NavigationRight, NavigationRightAfter } from './components/shared/consts/navigation';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  private readonly sweetAlert = inject(SweetAlertService);
  private readonly auth = inject(AuthServiceService);

  readonly user$ = this.auth.user$;

  readonly navigationLeft = NavigationLeft;
  readonly navigationRight = NavigationRight

  readonly navigationLeftAfter = NavigationLeftAfter;
  readonly navigationRightAfter = NavigationRightAfter;

  logOut(){
    this.auth.logOut()
  }
}
