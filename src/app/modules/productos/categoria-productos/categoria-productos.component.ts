import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductCardComponent } from '../../../shared/components/product-card/product-card.component';
import { Product } from '../../../core/models/product-list.model';
import { limpadores, aerosoles, desengrasantes, limpiadores_industriales, limpieza_desinfeccion, concreto, especializados, tratamientos_calderas } from '../../../shared/data/productos';

@Component({
  selector: 'app-categoria-productos',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './categoria-productos.component.html',
  styleUrls: ['./categoria-productos.component.scss']
})
export class CategoriaProductosComponent implements OnInit {
  categoria: string = '';
  productos: Product[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const categoria = params['categoria'];
      this.categoria = this.getCategoriaNombre(categoria);
      this.productos = this.getProductosPorCategoria(categoria);
    });
  }

  private getCategoriaNombre(categoria: string): string {
    const categorias: { [key: string]: string } = {
      'productos-especializados': 'Productos Especializados',
      'productos-concreto': 'Productos Diseñados para Concreto',
      'aerosoles': 'Aerosoles Industriales',
      'tratamientos': 'Tratamientos para Aguas de Calderas y Sistemas de Enfriamiento',
      'desengrasantes': 'Desengrasantes Industriales',
      'limpieza-desinfeccion': 'Limpieza y Desinfección'
    };
    return categorias[categoria] || categoria;
  }

  private getProductosPorCategoria(categoria: string): Product[] {
    switch (categoria) {
      case 'productos-especializados':
        return especializados;
      case 'productos-concreto':
        return concreto;
      case 'aerosoles':
        return aerosoles;
      case 'tratamientos':
        return tratamientos_calderas;
      case 'desengrasantes':
        return desengrasantes;
      case 'limpieza-desinfeccion':
        return limpieza_desinfeccion;
      default:
        return [];
    }
  }

  goBack() {
    this.router.navigate(['/productos']);
  }
} 