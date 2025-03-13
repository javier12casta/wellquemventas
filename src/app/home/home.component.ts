import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  topProducts = [
    {
      id: '1',
      name: 'Desengrasante Industrial',
      price: 18.00,
      oldPrice: 21.00,
      image: 'https://wellquem.com/wp-content/uploads/2024/01/HIPOCLORITO-SODIO-WEB-300x300.png',
      badge: {
        type: 'discount' as const,
        value: 10
      }
    },
    {
      id: '2',
      name: 'Limpiador Multiusos',
      price: 18.00,
      image: 'https://wellquem.com/wp-content/uploads/2024/01/HIPOCLORITO-SODIO-WEB-300x300.png',
      badge: {
        type: 'hot' as const,
        text: 'HOT'
      }
    },
    {
      id: '3',
      name: 'Detergente Industrial',
      price: 16.00,
      oldPrice: 19.00,
      image: 'https://wellquem.com/wp-content/uploads/2024/01/HIPOCLORITO-SODIO-WEB-300x300.png',
      badge: {
        type: 'discount' as const,
        value: 12
      }
    },
    {
      id: '4',
      name: 'Sanitizante',
      price: 20.00,
      image: 'https://wellquem.com/wp-content/uploads/2024/01/HIPOCLORITO-SODIO-WEB-300x300.png',
      badge: {
        type: 'hot' as const,
        text: 'HOT'
      }
    }
  ];
} 