import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product-list.model';
import { aerosoles, desengrasantes, limpadores, limpiadores_industriales, limpieza_desinfeccion, concreto, especializados, tratamientos_calderas } from '../../shared/data/productos';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
})
export class ProductosComponent {
  products: Product[] = [
    ...limpadores,
    ...aerosoles,
    ...desengrasantes,
    ...limpiadores_industriales,
    ...limpieza_desinfeccion,
    ...concreto,
    ...especializados,
    ...tratamientos_calderas,
  ];

  // Agrupar productos por categoría
  get groupedProducts() {
    return this.products.reduce((groups, product) => {
      const category = product.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
      return groups;
    }, {} as { [key: string]: Product[] });
  }
} 