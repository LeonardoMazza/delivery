import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  signIn() {
    this.authService.signIn(this.email, this.password)
      .catch((error) => {
        alert('Falha no login. Verifique suas credenciais.');
      });
  }
}
