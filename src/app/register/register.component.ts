import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { UserDataService } from '../userData/user-data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  constructor(
    private auth: AngularFireAuth,
    private userDataService: UserDataService,
    private router: Router
  ) { }
  
  onRegister(form: NgForm) {
    if (form.valid) {
      const { email, password, name, address, phoneNumbers } = form.value;
      
      // Verifique se o usuário preencheu todos os campos
      if (!email || !password || !name || !address || !phoneNumbers) {
        alert('Preencha todos os campos!');
        return;
      }
      
      this.auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Se o usuário foi criado com sucesso, salve as informações adicionais no Realtime Database
          const user = userCredential.user;
          const userData = {
            id: user!.uid,
            email,
            name,
            address,
            phoneNumbers
          };
          this.userDataService.addUser(userData)
            .then(() => {
              alert('Usuário registrado com sucesso!');
              console.log('Usuário registrado com sucesso!');
              this.router.navigate(['/login']);
            })
            .catch((error) => {
              alert('Erro ao cadastrar usuário!');
              console.log(error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }
}
