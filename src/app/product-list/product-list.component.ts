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
  filteredProducts: Product[] = [];
  searchTerm: string = '';

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.products = this.productService.getAllProducts();
    this.filteredProducts = [...this.products];
  }
  
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    this.cartService.updateCartItemCount();
  }

   // Função para filtrar os produtos com base na pesquisa
   searchProducts() {
    if (this.searchTerm.trim()) {
      const lowerCaseSearch = this.searchTerm.toLowerCase();
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(lowerCaseSearch)
      );
    } else {
      this.filteredProducts = [...this.products]
    }
  }

  // Função para limpar a pesquisa e exibir todos os produtos novamente
  clearSearch() {
    this.searchTerm = '';
    this.filteredProducts = [...this.products];
  }
  
}
