import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: any[] = [];
  cartItemCount = 0;
  private cartItemsChanged = new Subject<any[]>();

  constructor() {
    // Recupera os itens do carrinho do localStorage quando o serviço é inicializado
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      this.cartItems = JSON.parse(storedCartItems);
    }
    // Atualiza a contagem de itens do carrinho
    this.updateCartItemCount();
  }

  addToCart(product: any) {
    const cartItem = this.cartItems.find(item => item.id === product.id);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push({ ...product, quantity: 1 });
    }

    this.saveCartItems(); // Salva os itens do carrinho no localStorage após adicionar um novo produto
    this.updateCartItemCount(); // Atualiza a contagem de itens do carrinho
    this.emitCartItemsChanged(); // Emite um evento informando que os itens do carrinho foram alterados
  }

  removeFromCart(productId: number) {
    this.cartItems = this.cartItems.filter(item => item.id !== productId);

    this.saveCartItems(); // Salva os itens do carrinho no localStorage após remover um produto
    this.updateCartItemCount(); // Atualiza a contagem de itens do carrinho
    this.emitCartItemsChanged(); // Emite um evento informando que os itens do carrinho foram alterados
  }

  getCartTotal() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  updateCartItemCount(): void {
    this.cartItemCount = this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getCartItemsChanged() {
    return this.cartItemsChanged.asObservable();
  }

  emitCartItemsChanged() {
    this.cartItemsChanged.next(this.cartItems.slice());
  }

  private saveCartItems() {
    // Salva os itens do carrinho no localStorage como uma string JSON
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }
}