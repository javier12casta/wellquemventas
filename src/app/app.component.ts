import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { WhatsappButtonComponent } from './shared/components/whatsapp-button/whatsapp-button.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterOutlet, SharedModule, HeaderComponent, FooterComponent, WhatsappButtonComponent],
})
export class AppComponent {
  title = 'Wellquem - Productos Químicos Industriales';
}
