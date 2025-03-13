import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  myAccountLinks = [
    { label: 'Mi cuenta', route: '/account' },
    { label: 'Checkout', route: '/checkout' },
    { label: 'Contacto', route: '/contact' },
    { label: 'Carrito', route: '/cart' },
    { label: 'Lista de deseos', route: '/wishlist' }
  ];

  quickLinks = [
    { label: 'Ubicación de tienda', route: '/store-location' },
    { label: 'Seguimiento de pedidos', route: '/order-tracking' },
    { label: 'Guía de tallas', route: '/size-guide' },
    { label: 'Mi cuenta', route: '/account' },
    { label: 'FAQs', route: '/faqs' }
  ];

  information = [
    { label: 'Política de privacidad', route: '/privacy' },
    { label: 'Sobre nosotros', route: '/about' },
    { label: 'Carreras', route: '/careers' },
    { label: 'Información de entrega', route: '/delivery' },
    { label: 'Términos y condiciones', route: '/terms' }
  ];

  customerService = [
    { label: 'Política de envíos', route: '/shipping' },
    { label: 'Ayuda y contacto', route: '/help' },
    { label: 'Devoluciones y reembolsos', route: '/returns' },
    { label: 'Tiendas online', route: '/stores' },
    { label: 'Términos y condiciones', route: '/terms' }
  ];
}
