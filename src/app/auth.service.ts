import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(
    private auth: AngularFireAuth,
    private router: Router,
  ) {
    this.auth.authState.subscribe((user) => {
      this.userLoggedIn.next(!!user); // Emit true if the user is logged in, false otherwise
    });
  }

  signIn(email: string, password: string): Promise<void> {
    return this.auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        throw error; // Lança o erro para ser tratado no componente
      });
  }

  signUp(email: string, password: string): Promise<void> {
    return this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        throw error; // Lança o erro para ser tratado no componente
      });
  }

  signOut() {
    this.auth.signOut().then(() => {
      this.router.navigate(['/login']); // Redirecionar para a página de login após logout
    }).catch(error => {
      throw error;
    });
  }

  getCurrentUser() {
    return this.auth.currentUser;
  }
}
