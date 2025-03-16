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
      price: 368900,
      image: 'https://example.com/wellzinc.png',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Galvanizante en frío para protección de metales.',
      city: 'Bogotá',
      presentation: 'Caneca 20lt'
    },
    {
      id: '2',
      name: 'ELECTRIWELL - Limpiador solvente dieléctrico',
      price: 36890,
      image: 'https://example.com/electriwell.png',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Limpiador solvente dieléctrico.',
      city: 'Bogotá',
      presentation: 'Aerosol'
    },
    {
      id: '3',
      name: 'REMOWELL - Removedor y desincrustante orgánico de concreto',
      price: 83300,
      image: 'https://example.com/remowell.png',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Removedor y desincrustante orgánico de concreto.',
      city: 'Bogotá',
      presentation: 'Galon'
    },
    {
      id: '4',
      name: 'BRILLALUM - Limpiador no ácido para aluminio',
      price: 414120,
      image: 'https://example.com/brillalum.png',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Limpiador no ácido para aluminio.',
      city: 'Bogotá',
      presentation: 'Garrafa 20lt'
    }
  ];
} 