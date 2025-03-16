import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Badge } from '../../../core/models/product-list.model';
interface Product {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  badge?: Badge;
  category: string;
  description?: string;
  city?: string;
  presentation?: string;
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