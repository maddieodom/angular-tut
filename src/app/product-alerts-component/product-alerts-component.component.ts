import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts-component',
  templateUrl: './product-alerts-component.component.html',
  styleUrls: ['./product-alerts-component.component.css'],
})
export class ProductAlertsComponentComponent {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();
}
