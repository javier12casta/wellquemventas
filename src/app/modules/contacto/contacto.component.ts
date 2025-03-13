import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
})
export class ContactoComponent {
  // Aquí puedes agregar la lógica del componente si es necesario
} 