import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = this.password = '';
  }
}
