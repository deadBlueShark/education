import { Component } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  title = 'Angular 2 Inventory';
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/assets/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'], 109.99
      ),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/assets/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'], 238.99
      ),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/assets/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'], 29.99
      )
    ];
  }

  productSelect(product: Product): void {
    console.log(product);
  }
}
