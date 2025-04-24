import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartTotal: number = 0;
  cartItemCount: number = 0;
  isMenuOpen: boolean = false;

  navigationItems = [
    // { label: 'Inicio', route: '/home', icon: 'fa-solid fa-house' },
    { label: 'Productos', route: '/productos', icon: 'fa-solid fa-cart-shopping' },
    { label: 'Contacto', route: '/contacto', icon: 'fa-solid fa-phone' },
    //{ label: 'Nosotros', route: '/nosotros', icon: 'fa-solid fa-user' },
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
