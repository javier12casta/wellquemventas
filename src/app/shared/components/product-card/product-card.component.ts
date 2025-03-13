import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: {
    text?: string;
    type: 'hot' | 'discount';
    value?: number;
  };
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
} 