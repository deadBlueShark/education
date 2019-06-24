import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product;
  @Output() productSelect: EventEmitter<Product>;
  private selectedProduct: Product;

  constructor() {
    this.productSelect = new EventEmitter();
  }

  onSelectProduct(product: Product): void {
    this.selectedProduct = product;
    this.productSelect.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.selectedProduct) {
      return false;
    }
    return this.selectedProduct.sku === product.sku;
  }
}
