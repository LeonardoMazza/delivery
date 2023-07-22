import { Injectable } from '@angular/core';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  options: { name: string; values: string[]; }[];
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Pizza Margherita',
      description: 'Pizza clássica com molho de tomate, mussarela e manjericão fresco.',
      price: 29.90,
      category: 'Pizzas',
      image: 'https://www.hearthandfirepizza.com/cdn/shop/products/product-beauty-the-margherita.png?v=1656423819',
      options: [
        { name: 'Tamanho', values: ['Pequena (8")', 'Média (12")', 'Grande (16")'] },
        { name: 'Borda', values: ['Tradicional', 'Recheada com Catupiry', 'Sem Borda'] }
      ]
    },
    {
      id: 2,
      name: 'Pizza Calabresa',
      description: 'Pizza com molho de tomate, mussarela, calabresa e cebola.',
      price: 32.90,
      category: 'Pizzas',
      image: 'https://www.comidaereceitas.com.br/wp-content/uploads/2007/12/pizza-calabresa-cr.jpg',
      options: [
        { name: 'Tamanho', values: ['Pequena (8")', 'Média (12")', 'Grande (16")'] },
        { name: 'Borda', values: ['Tradicional', 'Recheada com Catupiry', 'Sem Borda'] }
      ]
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}
