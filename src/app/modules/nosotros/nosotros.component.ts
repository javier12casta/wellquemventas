import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
})
export class NosotrosComponent {
  // Aquí puedes agregar la lógica del componente si es necesario
} 