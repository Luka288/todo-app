import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SweetAlertService } from './components/shared/services/sweet-alert.service';
import { AuthServiceService } from './components/shared/services/auth-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private readonly http = inject(HttpClient);
  private readonly sweetAlert = inject(SweetAlertService);
  private readonly auth = inject(AuthServiceService);

  logOut(){
    this.auth.logOut()
  }
}
