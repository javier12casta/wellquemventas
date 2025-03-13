import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router'; 
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product-list.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, ProductCardComponent],
})
export class ProductosComponent {
  products: Product[] = [
    // Limpiadores, desengrasantes y desincrustantes
    {
      id: '1',
      name: 'BRILLALUM - Limpiador no ácido para aluminio',
      price: 50.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '2',
      name: 'TANLESS P - Limpiador, desmanchador y desincrustante ácido',
      price: 60.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 15 },
      category: 'Limpiadores'
    },
    {
      id: '3',
      name: 'BRILLAGRES - Limpiador ácido para superficies en obras civiles',
      price: 70.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Recomendado' },
      category: 'Limpiadores'
    },
    {
      id: '4',
      name: 'LSA 2 - Limpiador ácido inhibido concentrado para aluminio y acero inoxidable',
      price: 80.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 10 },
      category: 'Limpiadores'
    },
    {
      id: '5',
      name: 'MACLEAN - Limpiador litográfico emulsionable',
      price: 90.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '6',
      name: 'LITOSOLVE - Limpiador litográfico',
      price: 95.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '7',
      name: 'CFH CREWELL - Crema limpiadora de manos',
      price: 40.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 5 },
      category: 'Limpiadores'
    },
    {
      id: '8',
      name: 'WELLGRASS - Detergente líquido industrial neutro biodegradable',
      price: 55.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '9',
      name: 'DOR CLEAN - Limpiador y desengrasante biodegradable',
      price: 65.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 10 },
      category: 'Limpiadores'
    },
    {
      id: '10',
      name: 'PROPETWELL - Detergente líquido especial para lavado de plástico',
      price: 75.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '11',
      name: 'AUTOWELL - Shampoo para lavado de vehículos',
      price: 85.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 15 },
      category: 'Limpiadores'
    },
    {
      id: '12',
      name: 'W 2719 - Desengrasante alcalino multiusos',
      price: 95.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '13',
      name: 'CLEAN S9 - Desengrasante industrial hidrosoluble',
      price: 100.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 20 },
      category: 'Limpiadores'
    },
    {
      id: '14',
      name: 'WQ 9487 - Desengrasante emulsificante hidrosoluble',
      price: 110.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '15',
      name: 'LMP 800 - Emulsificante de grasas y aceites',
      price: 120.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 25 },
      category: 'Limpiadores'
    },
    {
      id: '16',
      name: 'METAL CLEAN - Desengrasante, desoxidante y fosfatizante',
      price: 130.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '17',
      name: 'MAX T - Desengrasante y limpiador exterior de motores',
      price: 140.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 30 },
      category: 'Limpiadores'
    },
    {
      id: '18',
      name: 'BIOSOLVE - Desengrasante y disolvente orgánico',
      price: 150.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '19',
      name: 'REPWELL - Removedor y desincrustante inorgánico de concreto',
      price: 160.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 35 },
      category: 'Limpiadores'
    },
    {
      id: '20',
      name: 'REMOWELL - Removedor y desincrustante orgánico de concreto',
      price: 170.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '21',
      name: 'REMOSIL - Limpiador removedor de incrustaciones severas',
      price: 180.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 40 },
      category: 'Limpiadores'
    },
    {
      id: '22',
      name: 'REMOCARB - Descarbonizante no cresílico',
      price: 190.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    {
      id: '23',
      name: 'RELAX - Penetrante, aflojador y lubricante de tuercas y tornillos',
      price: 200.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 45 },
      category: 'Limpiadores'
    },
    {
      id: '24',
      name: 'POWERFULL - Destapador de cañerías',
      price: 210.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores'
    },
    // Tratamientos Para aguas de calderas y sistemas de enfriamiento
    {
      id: '26',
      name: 'REP WELL - Desincrustante inorgánico para calderas y equipos de enfriamiento',
      price: 220.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 50 },
      category: 'Tratamientos'
    },
    {
      id: '27',
      name: 'SODWELL - Acondicionador de pH',
      price: 230.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '28',
      name: 'TAC 24 - Tratamiento preventivo para aguas de calderas',
      price: 240.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 55 },
      category: 'Tratamientos'
    },
    {
      id: '29',
      name: 'TAC 24P - Tratamiento preventivo polimérico para aguas de calderas',
      price: 250.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '30',
      name: 'OCR 13 - Tratamiento integral de agua en torres de enfriamiento de bajo tonelaje',
      price: 260.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 60 },
      category: 'Tratamientos'
    },
    {
      id: '31',
      name: 'OCR 26 - Tratamiento integral de agua en torres de enfriamiento de alto tonelaje',
      price: 270.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '32',
      name: 'REFRI RAD - Tratamiento de aguas en sistemas cerrados de enfriamiento',
      price: 280.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 65 },
      category: 'Tratamientos'
    },
    {
      id: '33',
      name: 'TOWER FIT - Alguicida para el agua de torres de enfriamiento',
      price: 290.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    // Tratamiento de aguas residuales, industriales y potables
    {
      id: '34',
      name: 'ALW 250 - Acondicionador de lodos - coagulante y floculante',
      price: 300.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 70 },
      category: 'Tratamientos'
    },
    {
      id: '35',
      name: 'SULFATO DE ALUMINIO TIPO B - Sal inorgánica coagulante',
      price: 310.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '36',
      name: 'SULFATO FÉRRICO - Sal inorgánica coagulante',
      price: 320.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 75 },
      category: 'Tratamientos'
    },
    {
      id: '37',
      name: 'CLORURO FÉRRICO - Sal inorgánica coagulante',
      price: 330.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '38',
      name: 'SODWELL - Acondicionador de pH',
      price: 340.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 80 },
      category: 'Tratamientos'
    },
    {
      id: '39',
      name: 'HIPOCLORITO DE SODIO - Desinfectante con base en hipoclorito de sodio',
      price: 350.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    {
      id: '40',
      name: 'HIPOCLORITO DE CALCIO - Desinfectante para tratamiento de aguas',
      price: 360.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 85 },
      category: 'Tratamientos'
    },
    {
      id: '41',
      name: 'WCL ANTIESPUMANTE - Emulsión siliconada para control de espuma',
      price: 370.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Tratamientos'
    },
    // Limpiadores eléctricos y electrónicos a granel
    {
      id: '42',
      name: 'ELECTRIWELL - Limpiador solvente dieléctrico',
      price: 380.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 90 },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '43',
      name: 'ELECTRON PLUS - Limpiador para equipos electrónicos',
      price: 390.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '44',
      name: 'CLEANER KV30 - Limpiador dieléctrico no inflamable',
      price: 400.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 95 },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '45',
      name: 'VOLT 7000 - Solvente limpiador',
      price: 410.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '46',
      name: 'SOLVE GREEN - Limpiador dieléctrico cítrico',
      price: 420.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 100 },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '47',
      name: 'DRY 220 - Desalojador de humedad',
      price: 430.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '48',
      name: 'DESENGRASANTE WM - Solvente dieléctrico sin olor',
      price: 440.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 105 },
      category: 'Limpiadores eléctricos'
    },
    // Aerosoles industriales
    {
      id: '49',
      name: 'D SAT - Limpiador espumoso',
      price: 450.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Aerosoles'
    },
    {
      id: '50',
      name: 'RELAX - Penetrante, aflojador y lubricante de tuercas y tornillos',
      price: 460.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 110 },
      category: 'Aerosoles'
    },
    {
      id: '51',
      name: 'SILOFF 260 - Desmoldante a base de silicona',
      price: 470.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Aerosoles'
    },
    {
      id: '52',
      name: 'STRAIN VP - Tensor de correas planas y en V',
      price: 480.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 115 },
      category: 'Aerosoles'
    },
    {
      id: '53',
      name: 'ELECTRIWELL - Limpiador solvente dieléctrico',
      price: 490.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '54',
      name: 'ELECTRON 8A SPECIAL - Limpiador para equipos electrónicos en funcionamiento',
      price: 500.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 120 },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '55',
      name: 'ELECTRON PLUS - Limpiador para equipos electrónicos',
      price: 510.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '56',
      name: 'DRY 220 - Desalojador de humedad',
      price: 520.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 125 },
      category: 'Limpiadores eléctricos'
    },
    {
      id: '57',
      name: 'METAL PROTECT 1 - Protector de superficies metálicas a la intemperie',
      price: 530.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Protector de superficies'
    },
    {
      id: '58',
      name: 'METAL PROTECT 2 - Protector de superficies metálicas bajo cubierta',
      price: 540.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 130 },
      category: 'Protector de superficies'
    },
    {
      id: '59',
      name: 'BRAKESWELL - Limpiador de sistemas de frenos',
      price: 550.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Protector de superficies'
    },
    {
      id: '60',
      name: 'CARBUCLEAN - Limpiador de carburadores',
      price: 560.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 135 },
      category: 'Protector de superficies'
    },
    // Productos Especiales
    {
      id: '61',
      name: 'CEMENT CRYL - Sellador acrílico para pisos de concreto',
      price: 570.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Productos Especiales'
    },
    {
      id: '62',
      name: 'COWELL - Convertidor de óxido en capa protectora',
      price: 580.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 140 },
      category: 'Productos Especiales'
    },
    {
      id: '63',
      name: 'REFRI RAD E - Refrigerante e inhibidor de corrosión',
      price: 590.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Productos Especiales'
    },
    {
      id: '64',
      name: 'DESMORG 02 – Desencofrante orgánico',
      price: 600.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 145 },
      category: 'Productos Especiales'
    },
    {
      id: '65',
      name: 'X PAINT - Removedor de pinturas',
      price: 610.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Productos Especiales'
    },
    {
      id: '66',
      name: 'WELLZINC - Galvanizante en frío',
      price: 620.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 150 },
      category: 'Productos Especiales'
    },
    {
      id: '67',
      name: 'SILICONA DESMOLDANTE – Lubricante para moldes de soplado e inyección',
      price: 630.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Productos Especiales'
    },
    // Linea de limpieza y desinfección
    {
      id: '68',
      name: 'POLISH ALL - Shampoo concentrado líquido para lavado de loza y vidrio',
      price: 640.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 155 },
      category: 'Limpieza y desinfección'
    },
    {
      id: '69',
      name: 'SUPERWELL - Detergente concentrado multiusos',
      price: 650.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpieza y desinfección'
    },
    {
      id: '70',
      name: 'DETERWELL BE - Detergente concentrado para el lavado de ropa',
      price: 660.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 160 },
      category: 'Limpieza y desinfección'
    },
    {
      id: '71',
      name: 'D-SAT 1 - Limpiador de muebles, tapetes y alfombras',
      price: 670.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpieza y desinfección'
    },
    {
      id: '72',
      name: 'CLEAN GLASS NEW - Limpiador antiempañante de vidrios',
      price: 680.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 165 },
      category: 'Limpieza y desinfección'
    },
    {
      id: '73',
      name: 'CLEAN NB - Desengrasante hidrosoluble no butílico',
      price: 690.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpieza y desinfección'
    },
    {
      id: '74',
      name: 'CFH 1 - Jabón suavizante para el lavado de manos',
      price: 700.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 170 },
      category: 'Limpieza y desinfección'
    },
    {
      id: '75',
      name: 'CFH SPECIAL - Shampoo nacarado para el lavado de manos',
      price: 710.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Limpieza y desinfección'
    },
    {
      id: '76',
      name: 'CFH CHICLE - Jabón industrial neutro para el lavado de manos',
      price: 720.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 175 },
      category: 'Limpieza y desinfección'
    },
    // Desinfectantes
    {
      id: '77',
      name: 'AIRFLOWERS - Ambientador líquido bactericida',
      price: 730.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '78',
      name: 'LIMPIAWELL - Limpiador y desinfectante de superficies con aroma',
      price: 740.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 180 },
      category: 'Desinfectantes'
    },
    {
      id: '79',
      name: 'HIPOCLORITO DE SODIO - Desinfectante con base en hipoclorito de sodio',
      price: 750.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '80',
      name: 'CLORWELL - Detergente clorado alcalino',
      price: 760.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 185 },
      category: 'Desinfectantes'
    },
    {
      id: '81',
      name: 'BACTIWELL - Limpiador y desinfectante concentrado con amonio cuaternario',
      price: 770.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '82',
      name: 'BIOBACT - Desinfectante con base en amonio cuaternario de V generación',
      price: 780.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 190 },
      category: 'Desinfectantes'
    },
    {
      id: '83',
      name: 'BACTERICIDA WGT - Desinfectante con base en glutaraldehído',
      price: 790.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '84',
      name: 'BIGUANIDA AL 4% - Desinfectante con base en biguanida',
      price: 800.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 195 },
      category: 'Desinfectantes'
    },
    {
      id: '85',
      name: 'PERACID W - Desinfectante con base en ácido peracético',
      price: 810.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '86',
      name: 'CHF BACTERICIDA - Shampoo concentrado desinfectante para manos con amonio cuaternario',
      price: 820.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 200 },
      category: 'Desinfectantes'
    },
    {
      id: '87',
      name: 'GEL BACTERICIDA - Gel desinfectante para manos',
      price: 830.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    {
      id: '88',
      name: 'DMO - Desintegrador de materia orgánica',
      price: 840.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 205 },
      category: 'Desinfectantes'
    },
    {
      id: '89',
      name: 'EMOWELL - Enmascarador y eliminador de malos olores',
      price: 850.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Desinfectantes'
    },
    // Mantenimiento de pisos y superficies
    {
      id: '90',
      name: 'FIRST STAR - Cera polimérica autobrillante y antideslizante para pisos',
      price: 860.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 210 },
      category: 'Mantenimiento de pisos'
    },
    {
      id: '91',
      name: 'SELLOWELL - Sellador polimérico para pisos',
      price: 870.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Mantenimiento de pisos'
    },
    {
      id: '92',
      name: 'C-RA OFF - Removedor de ceras y selladores',
      price: 880.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 215 },
      category: 'Mantenimiento de pisos'
    },
    {
      id: '93',
      name: 'SILICOL - Protector y embellecedor siliconado',
      price: 890.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Mantenimiento de pisos'
    },
    {
      id: '94',
      name: 'METAL PROTECT 1 – Protector de superficies metálicas a la intemperie',
      price: 900.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 220 },
      category: 'Protector de superficies'
    },
    {
      id: '95',
      name: 'METAL PROTECT 2 - Protector de superficies metálicas bajo cubierta',
      price: 910.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Protector de superficies'
    },
    // Productos sintéticos y minerales lubricantes - grasas y aceites
    {
      id: '96',
      name: 'WG FGC (SLNTC) – Grasa criogénica, multipropósito, temperaturas bajas',
      price: 920.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 225 },
      category: 'Grasas y aceites'
    },
    {
      id: '97',
      name: 'WG MPG – Grasa multipropósito multigrado',
      price: 930.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    {
      id: '98',
      name: 'WG FG – Grasa blanca grado alimenticio a prueba de agua',
      price: 940.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 230 },
      category: 'Grasas y aceites'
    },
    {
      id: '99',
      name: 'WG WPG – Grasa a prueba de agua y/o condiciones salinas',
      price: 950.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    {
      id: '100',
      name: 'WG MOLY (SLM2)– Grasa multiusos, rodamientos, trabajo pesado',
      price: 960.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 235 },
      category: 'Grasas y aceites'
    },
    {
      id: '101',
      name: 'WG HRPM – Grasa para rodamientos de alta velocidad',
      price: 970.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    {
      id: '102',
      name: 'WG 400AT – Grasa para altas temperaturas',
      price: 980.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 240 },
      category: 'Grasas y aceites'
    },
    {
      id: '103',
      name: 'WG 800AT – Grasa para altas temperaturas',
      price: 990.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    {
      id: '104',
      name: 'WG OPEN GEAR – Grasa para engranajes abiertos',
      price: 1000.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 245 },
      category: 'Grasas y aceites'
    },
    {
      id: '105',
      name: 'MP GRADO 2 – Grasa de Litio',
      price: 1010.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    {
      id: '106',
      name: 'GRASA DIELÉCTRICA – Aisla y protege del agua conexiones eléctricas',
      price: 1020.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 250 },
      category: 'Grasas y aceites'
    },
    {
      id: '107',
      name: 'WG SHI – Grasa de silicona especial para griferías, válvulas, cojinete',
      price: 1030.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'hot', text: 'Nuevo' },
      category: 'Grasas y aceites'
    },
    // ACEITES
    {
      id: '108',
      name: 'LUBRICANTES GRADO ALIMENTICIO Y FARMACÉUTICO',
      price: 1040.00,
      image: 'https://wellquem.com/wp-content/uploads/2022/05/Logo-Wellquem.png',
      badge: { type: 'discount', value: 255 },
      category: 'Grasas y aceites'
    },
    // Continúa agregando más productos según sea necesario
  ];

  // Agrupar productos por categoría
  get groupedProducts() {
    return this.products.reduce((groups, product) => {
      const category = product.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(product);
      return groups;
    }, {} as { [key: string]: Product[] });
  }
} 