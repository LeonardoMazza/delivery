import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private usersPath = '/users';
  private usersRef: AngularFireList<User>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = this.db.list<User>(this.usersPath);
  }

  addUser(user: User): Promise<void> {
    return this.usersRef.push(user).then(() => {
      console.log('Usuário adicionado com sucesso!');
    }).catch((error) => {
      console.log(error);
    });
  }

  getAllUsers(): Observable<User[]> {
    return this.usersRef.valueChanges();
  }
}
