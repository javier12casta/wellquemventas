import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
})
export class CatalogoComponent {
  // Aquí puedes agregar la lógica del componente si es necesario
} 