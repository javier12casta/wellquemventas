import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product-list.model';
import { aerosoles, desengrasantes, limpadores, limpiadores_industriales, limpieza_desinfeccion, concreto, especializados, tratamientos_calderas } from '../../shared/data/productos';
import { CategoryCardComponent } from '../../shared/components/category-card/category-card.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent, CategoryCardComponent],
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

  topProducts = [
    {
      id: '1',
      name: 'WELLZINC',
      price: 368900,
      image: 'https://res.cloudinary.com/dozzcc1l1/image/upload/v1742218787/wellqem/Productos%20Especializados/f2zelfe8m5da2hprgon7.jpg',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Galvanizante en frío para protección de metales.',
      city: 'Bogotá',
      presentation: 'Galón'
    },
    {
      id: '2',
      name: 'ELECTRIWELL',
      price: 628320,
      image: 'https://res.cloudinary.com/dozzcc1l1/image/upload/v1742218782/wellqem/Limpiadores%20el%C3%A9ctricos%20y%20electr%C3%B3nicos%20a%20granel/og0aniwbgooryieymhyo.jpg',
      badge: { type: 'new' as const, text: '' },
      category: "Limpiadores eléctricos y electrónicos a granel",
      description: "Limpiador solvente dieléctrico.",
      city: "Bogotá",
      presentation: "Caneca 20lt"
    },
    {
      id: '3',
      name: 'REMOWELL',
      price: 83300,
      image: 'https://res.cloudinary.com/dozzcc1l1/image/upload/v1742218787/wellqem/Productos%20dise%C3%B1ados%20para%20concreto/jvvp5ogrjhbiih5fpgqu.png',
      badge: {
        type: 'new' as const,
        text: ''
      },
      category: 'LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL',
      description: 'Removedor y desincrustante orgánico de concreto.',
      city: 'Bogotá',
      presentation: 'Galón'
    },
    {
      id: '4',
      name: 'BRILLALUM',
      price: 414120,
      image: 'https://res.cloudinary.com/dozzcc1l1/image/upload/v1742218783/wellqem/Limpiadores%20Industriales/twztzlt5f1pkcioxizvi.jpg',
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

  groupedProducts: { [key: string]: Product[] } = {
    'Limpiadores Eléctricos y Electrónicos': limpadores,
    'Aerosoles Industriales': aerosoles,
    'Desengrasantes Industriales': desengrasantes,
    'Limpiadores Industriales': limpiadores_industriales,
    'Limpieza y Desinfección': limpieza_desinfeccion,
    'Productos Diseñados para Concreto': concreto,
    'Productos Especializados': especializados,
    'Tratamientos para Aguas de Calderas': tratamientos_calderas
  };
} 