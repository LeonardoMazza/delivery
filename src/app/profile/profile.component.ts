import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../userData/user-data.service';
import { User } from '../userData/user.model';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  activeTab: string = 'my-data';
  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    // Chame o método do serviço para obter os dados do usuário e atribua ao atributo 'user'
    this.userDataService.getAllUsers().subscribe((users) => {
      this.user = users[0];
    });
  }
}
