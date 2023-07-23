import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';
import { UserDataService } from '../userData/user-data.service';
import { User } from '../userData/user.model';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  total: number = 0;
  private cartSubscription: Subscription = new Subscription();
  user: User | undefined;

  checkoutData = {
    name: '',
    address: '',
    phone: ''
  };

  constructor(private cartService: CartService, private userDataService: UserDataService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
    this.cartSubscription = this.cartService.getCartItemsChanged().subscribe(
      (cartItems: any[]) => {
        this.cartItems = cartItems;
        this.total = this.cartService.getCartTotal();
      }
    );

    this.userDataService.getAllUsers().subscribe((users) => {
      this.user = users[0];
      if (this.user) {
        this.checkoutData.name = this.user.name;
        this.checkoutData.address = this.user.address;
        this.checkoutData.phone = this.user.phoneNumbers;
      }
    });
    
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  submitCheckoutForm() {
    this.redirectToWhatsApp();
  }

  redirectToWhatsApp() {
    let message = 'Olá, gostaria de fazer o pedido:\n\n';
    for (const item of this.cartItems) {
      const totalPrice = (item.price * item.quantity).toFixed(2);
      message += `${item.name} - Quantidade: ${item.quantity} - Preço: R$ ${totalPrice}\n`;
    }

    const totalCartPrice = this.cartService.getCartTotal().toFixed(2);
    message += `\nTotal do pedido: R$ ${totalCartPrice}\n\n`;

    message += `Dados de Checkout:\n`;
    message += `Nome: ${this.checkoutData.name}\n`;
    message += `Endereço: ${this.checkoutData.address}\n`;
    message += `Telefone: ${this.checkoutData.phone}\n`;

    const whatsappLink = `https://wa.me/351912875342/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }
}