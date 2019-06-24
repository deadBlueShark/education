import { Component, Input, HostBinding } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent {
  @Input() url: string;
  @HostBinding('attr.class') cssClass = 'ui small image';
}
