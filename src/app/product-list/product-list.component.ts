import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  options: { name: string; values: string[]; }[];
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  cols: number = 1;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
  }
  
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartService.updateCartItemCount();
    console.log(this.cartService.cartItems);
  }
  
}
