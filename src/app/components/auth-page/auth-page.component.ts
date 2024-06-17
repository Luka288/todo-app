import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [RouterModule, RouterOutlet],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.scss'
})
export default class AuthPageComponent {

}
