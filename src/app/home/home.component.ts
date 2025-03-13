import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { CategoryCardComponent } from '../shared/components/category-card/category-card.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, CategoryCardComponent,RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  topProducts = [
    {
      id: '1',
      name: 'WELLZINC - Galvanizante en frío',
      price: 620.00,
      image: 'https://example.com/wellzinc.png',
      badge: {
        type: 'new' as const,
        text: ''
      }
    },
    {
      id: '2',
      name: 'ELECTRIWELL - Limpiador solvente dieléctrico',
      price: 720.00,
      image: 'https://example.com/electriwell.png',
      badge: {
        type: 'new' as const,
        text: ''
      }
    },
    {
      id: '3',
      name: 'REMOWELL - Removedor y desincrustante orgánico de concreto',
      price: 680.00,
      image: 'https://example.com/remowell.png',
      badge: {
        type: 'new' as const,
        text: ''
      }
    },
    {
      id: '4',
      name: 'BRILLALUM - Limpiador no ácido para aluminio',
      price: 650.00,
      image: 'https://example.com/brillalum.png',
      badge: {
        type: 'new' as const,
        text: ''
      }
    }
  ];
} 