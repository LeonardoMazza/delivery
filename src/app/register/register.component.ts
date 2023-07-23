
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(private auth: AngularFireAuth, private router: Router) { }
  
  onRegister(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    const { email, password } = form.value;
    
    this.auth.createUserWithEmailAndPassword(email, password).then(result => {
      this.router.navigate(['/']);
    }).catch(error => {
      alert('Falha no registro. Verifique suas credenciais.');

    });
  }
}
