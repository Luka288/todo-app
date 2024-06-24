import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../shared/services/auth-service.service';
import { Observable } from 'rxjs';
import { user } from '../shared';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule, CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export default class ProfileComponent {
  user$: Observable<user | null>;

  constructor(private authService: AuthServiceService) {
    this.user$ = this.authService.user$;
  }
}
