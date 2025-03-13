import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-whatsapp-button',
  templateUrl: './whatsapp-button.component.html',
  styleUrls: ['./whatsapp-button.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class WhatsappButtonComponent {
  whatsappNumber: string = '573183308650'; // Número de WhatsApp con el código de país

  get whatsappLink(): string {
    return `https://wa.me/${this.whatsappNumber}?text=Hola,%20me%20gustaría%20solicitar%20información.`;
  }
} 