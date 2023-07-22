import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, OnDestroy {
  cartItems: any[] = [];
  total: number = 0;
  private cartSubscription: Subscription = new Subscription();

  checkoutData = {
    name: '',
    address: '',
    email: ''
  };

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
    this.cartSubscription = this.cartService.getCartItemsChanged().subscribe(
      (cartItems: any[]) => {
        this.cartItems = cartItems;
        this.total = this.cartService.getCartTotal();
      }
    );
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
  }

  submitCheckoutForm() {
    this.redirectToWhatsApp();
    console.log(this.checkoutData);
  }

  redirectToWhatsApp() {
    // Montar a mensagem com os dados do carrinho e do checkout
    let message = 'Olá, gostaria de fazer o pedido:\n\n';
    for (const item of this.cartItems) {
      const totalPrice = (item.price * item.quantity).toFixed(2);
      message += `${item.name} - Quantidade: ${item.quantity} - Preço: R$ ${totalPrice}\n`;
    }

    const totalCartPrice = this.cartService.getCartTotal().toFixed(2);
    message += `\nTotal do pedido: R$ ${totalCartPrice}\n\n`;

    // Dados do checkout
    message += `Dados de Checkout:\n`;
    message += `Nome: ${this.checkoutData.name}\n`;
    message += `Endereço: ${this.checkoutData.address}\n`;
    message += `E-mail: ${this.checkoutData.email}\n`;

    // Redirecionar para o WhatsApp com a mensagem
    const whatsappLink = `https://wa.me/351912875342/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  }
}