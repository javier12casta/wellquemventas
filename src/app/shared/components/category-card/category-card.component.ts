import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <a [routerLink]="['/categoria', getCategoriaRoute()]" class="category-card">
      <div class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300 h-full">
        <i [class]="iconClass + ' text-4xl text-blue-500 mb-4'"></i>
        <h3 class="text-lg font-semibold text-gray-800">{{ categoryName }}</h3>
      </div>
    </a>
  `,
  styles: [`
    .category-card {
      text-decoration: none;
      color: inherit;
    }
  `]
})
export class CategoryCardComponent {
  @Input() categoryName: string = '';
  @Input() iconClass: string = '';

  getCategoriaRoute(): string {
    const categorias: { [key: string]: string } = {
      'Productos Especializados': 'productos-especializados',
      'Productos Diseñados para Concreto': 'productos-concreto',
      'Aerosoles Industriales': 'aerosoles',
      'Tratamientos para Aguas de Calderas y Sistemas de Enfriamiento': 'tratamientos',
      'Desengrasantes Industriales': 'desengrasantes',
      'Limpieza y Desinfección': 'limpieza-desinfeccion'
    };
    return categorias[this.categoryName] || this.categoryName.toLowerCase().replace(/\s+/g, '-');
  }
} 