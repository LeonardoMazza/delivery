// dashboard.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userEmail!: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Obter o email do usuário logado
    this.authService.getCurrentUser().then(user => {
      this.userEmail = user!.email!; // Asseção de não nulo
    });
  }

  // Método para fazer logout
  signOut() {
    this.authService.signOut();
  }
}
