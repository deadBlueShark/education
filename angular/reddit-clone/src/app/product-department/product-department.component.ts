import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';

@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() departments: string[];
}
