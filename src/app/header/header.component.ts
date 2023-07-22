import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Subscription } from 'rxjs';
import { SidenavService } from '../sidenav.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userLoggedIn = false;
  showMenuButton = false;
  private userSubscription: Subscription = new Subscription();

  constructor(
    private authService: AuthService,
    private sidenavService: SidenavService,
    public cartService: CartService  ) {
  }

  ngOnInit() {
    // Inscrever-se para receber atualizações do estado de autenticação
    this.userSubscription = this.authService.userLoggedIn.subscribe((loggedIn) => {
      this.userLoggedIn = loggedIn;
    });
  }

  ngOnDestroy() {
    // Cancelar a inscrição para evitar vazamentos de memória
    this.userSubscription.unsubscribe();
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  signOut() {
    this.authService.signOut();
  }
}
