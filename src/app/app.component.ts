import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'delivery';

  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  signIn() {
    this.authService.signIn(this.email, this.password);
    this.email = this.password = '';
  }

  signUp() {
    this.authService.signUp(this.email, this.password);
    this.email = this.password = '';
  }

  signOut() {
    this.authService.signOut();
  }

}