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
    {
      "id": "1",
      "name": "ELECTRIWELL - Limpiador solvente dieléctrico",
      "price": 580.00,
      "image": "https://example.com/electriwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "2",
      "name": "ELECTRON PLUS - Limpiador para equipos electrónicos",
      "price": 640.00,
      "image": "https://example.com/electron_plus.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "3",
      "name": "CLEANER KV30 - Limpiador dieléctrico no inflamable",
      "price": 720.00,
      "image": "https://example.com/cleaner_kv30.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "4",
      "name": "VOLT 7000 - Solvente limpiador",
      "price": 530.00,
      "image": "https://example.com/volt_7000.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "5",
      "name": "SOLVE GREEN - Limpiador dieléctrico cítrico",
      "price": 690.00,
      "image": "https://example.com/solve_green.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "6",
      "name": "DRY 220 - Desalojador de humedad",
      "price": 600.00,
      "image": "https://example.com/dry_220.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "1",
      "name": "WELLZINC - Galvanizante en frío",
      "price": 620.00,
      "image": "https://example.com/wellzinc.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "2",
      "name": "COWELL - Convertidor de óxido en capa protectora",
      "price": 580.00,
      "image": "https://example.com/cowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "3",
      "name": "X PAINT - Removedor de pinturas",
      "price": 670.00,
      "image": "https://example.com/x_paint.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "4",
      "name": "CEMENT CRYL - Sellador acrílico para pisos de concreto",
      "price": 750.00,
      "image": "https://example.com/cement_cryl.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "5",
      "name": "SILICONA DESMOLDANTE – Lubricante para moldes de soplado e inyección",
      "price": 710.00,
      "image": "https://example.com/silicona_desmoldante.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "6",
      "name": "DMO - Desintegrador de materia orgánica",
      "price": 690.00,
      "image": "https://example.com/dmo.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "7",
      "name": "REFRI RAD E - Refrigerante e inhibidor de corrosión",
      "price": 640.00,
      "image": "https://example.com/refri_rad_e.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "8",
      "name": "DESMORG 02 - Desencofrante orgánico",
      "price": 600.00,
      "image": "https://example.com/desmorg_02.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "9",
      "name": "TFT OIL - Lubricante soluble para maquinado",
      "price": 720.00,
      "image": "https://example.com/tft_oil.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "10",
      "name": "LUBE GREEN - Lubricante y refrigerante sintético para maquinado",
      "price": 770.00,
      "image": "https://example.com/lube_green.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "1",
      "name": "REMOWELL - Removedor y desincrustante orgánico de concreto",
      "price": 680.00,
      "image": "https://example.com/remowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS DISEÑADOS PARA CONCRETO"
    },
    {
      "id": "2",
      "name": "REPWELL - Removedor y desincrustante inorgánico de concreto",
      "price": 700.00,
      "image": "https://example.com/repwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS DISEÑADOS PARA CONCRETO"
    },
    {
      "id": "3",
      "name": "BRILLA GRES - Limpiador ácido para superficies en obras civiles",
      "price": 650.00,
      "image": "https://example.com/brilla_gres.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS DISEÑADOS PARA CONCRETO"
    },
    {
      "id": "4",
      "name": "DESMORG 02 - Desencofrante orgánico",
      "price": 600.00,
      "image": "https://example.com/desmorg_02.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS DISEÑADOS PARA CONCRETO"
    },
    {
      "id": "1",
      "name": "ELECTRIWELL - Limpiador solvente dieléctrico",
      "price": 720.00,
      "image": "https://example.com/electriwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "2",
      "name": "RELAX - Penetrante, aflojador y lubricante",
      "price": 680.00,
      "image": "https://example.com/relax.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "3",
      "name": "STRAIN VP - Tensor de correas planas y en V",
      "price": 750.00,
      "image": "https://example.com/strain_vp.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "4",
      "name": "D SAT - Limpiador espumoso",
      "price": 700.00,
      "image": "https://example.com/d_sat.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "5",
      "name": "ELECTRON PLUS - Limpiador para equipos electrónicos",
      "price": 740.00,
      "image": "https://example.com/electron_plus.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "6",
      "name": "ELECTRON 8A SPECIAL - Limpiador para equipos electrónicos en funcionamiento",
      "price": 790.00,
      "image": "https://example.com/electron_8a_special.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "7",
      "name": "DRY 220 - Desalojador de humedad",
      "price": 670.00,
      "image": "https://example.com/dry_220.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "8",
      "name": "SILOFF 260 - Desmoldante a base de silicona",
      "price": 730.00,
      "image": "https://example.com/siloff_260.png",
      "badge": { "type": "new", "text": "" },
      "category": "AEROSOLES INDUSTRIALES"
    },
    {
      "id": "1",
      "name": "REPWELL - Desincrustante inorgánico para calderas y equipos de enfriamiento",
      "price": 850.00,
      "image": "https://example.com/repwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "2",
      "name": "SODWELL - Acondicionador de pH",
      "price": 780.00,
      "image": "https://example.com/sodwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "3",
      "name": "TAC 24 - Tratamiento preventivo para aguas de calderas",
      "price": 800.00,
      "image": "https://example.com/tac_24.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "4",
      "name": "TAC 24P - Tratamiento preventivo polimérico para aguas de calderas",
      "price": 820.00,
      "image": "https://example.com/tac_24p.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "5",
      "name": "OCR 13 - Tratamiento integral de agua en torres de enfriamiento de bajo tonelaje",
      "price": 900.00,
      "image": "https://example.com/ocr_13.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "6",
      "name": "OCR 26 - Tratamiento integral de agua en torres de enfriamiento de alto tonelaje",
      "price": 950.00,
      "image": "https://example.com/ocr_26.png",
      "badge": { "type": "new", "text": "" }, 
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "7",
      "name": "REFRI RAD - Tratamiento de aguas en sistemas cerrados de enfriamiento",
      "price": 890.00,
      "image": "https://example.com/refri_rad.png",
      "badge": { "type": "new", "text": "" },    
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "8",
      "name": "TOWER FIT - Alguicida para el agua de torres de enfriamiento",
      "price": 860.00,
      "image": "https://example.com/tower_fit.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO"
    },
    {
      "id": "1",
      "name": "WQ-9487 - Desengrasante emulsificante hidrosoluble",
      "price": 720.00,
      "image": "https://example.com/wq-9487.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "2",
      "name": "CLEAN S9 - Desengrasante industrial hidrosoluble",
      "price": 750.00,
      "image": "https://example.com/clean-s9.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "3",
      "name": "W 2719 - Desengrasante alcalino multiusos",
      "price": 690.00,
      "image": "https://example.com/w-2719.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "4",
      "name": "WELLGRASS - Detergente líquido industrial neutro biodegradable",
      "price": 710.00,
      "image": "https://example.com/wellgrass.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "5",
      "name": "DOR CLEAN - Limpiador y desengrasante biodegradable",
      "price": 730.00,
      "image": "https://example.com/dor-clean.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "6",
      "name": "METAL CLEAN - Desengrasante, desoxidante y fosfatizante",
      "price": 770.00,
      "image": "https://example.com/metal-clean.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "7",
      "name": "CLEAN NB - Desengrasante hidrosoluble no butílico",
      "price": 700.00,
      "image": "https://example.com/clean-nb.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "8",
      "name": "DESENGRASANTE WM - Solvente dieléctrico natural",
      "price": 740.00,
      "image": "https://example.com/desengrasante-wm.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "9",
      "name": "MAX-T - Desengrasante y limpiador exterior de motores",
      "price": 780.00,
      "image": "https://example.com/max-t.png",
      "badge": { "type": "new", "text": "" },   
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "10",
      "name": "BIOSOLVE - Desengrasante y disolvente orgánico",
      "price": 800.00,
      "image": "https://example.com/biosolve.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES"
    },
    {
      "id": "1",
      "name": "BRILLALUM - Limpiador no ácido para aluminio",
      "price": 650.00,
      "image": "https://example.com/brillalum.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "2",
      "name": "LSA 2 - Limpiador ácido inhibido concentrado para aluminio y acero inoxidable",
      "price": 680.00,
      "image": "https://example.com/lsa2.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "3",
      "name": "AUTOWELL - Shampoo para lavado de vehículos",
      "price": 620.00,
      "image": "https://example.com/autowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "4",
      "name": "CFH CREWELL - Crema limpiadora de manos",
      "price": 590.00,
      "image": "https://example.com/cfh-crewell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "5",
      "name": "TANLESS P - Limpiador, desmanchador y desincrustante ácido",
      "price": 700.00,
      "image": "https://example.com/tanless-p.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "6",
      "name": "LPM 800 – Emulsificante de grasas y aceites en todo tipo de superficies",
      "price": 720.00,
      "image": "https://example.com/lpm-800.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "7",
      "name": "LITOSOLVE - Limpiador litográfico",
      "price": 750.00,
      "image": "https://example.com/litosolve.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "8",
      "name": "MACLEAN - Limpiador litográfico emulsionable",
      "price": 730.00,
      "image": "https://example.com/maclean.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES"
    },
    {
      "id": "1",
      "name": "ELECTRIWELL - Limpiador solvente dieléctrico",
      "price": 620.00,
      "image": "https://example.com/electriwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "2",
      "name": "ELECTRON PLUS - Limpiador para equipos electrónicos",
      "price": 580.00,
      "image": "https://example.com/electronplus.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "3",
      "name": "CLEANER KV30 - Limpiador dieléctrico no inflamable",
      "price": 600.00,
      "image": "https://example.com/cleanerkv30.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "4",
      "name": "VOLT 7000 - Solvente limpiador",
      "price": 550.00,
      "image": "https://example.com/volt7000.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "5",
      "name": "SOLVE GREEN - Limpiador dieléctrico cítrico",
      "price": 640.00,
      "image": "https://example.com/solvegreen.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "6",
      "name": "DRY 220 - Desalojador de humedad",
      "price": 590.00,
      "image": "https://example.com/dry220.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL"
    },
    {
      "id": "7",
      "name": "WELLZINC - Galvanizante en frío",
      "price": 620.00,
      "image": "https://example.com/wellzinc.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "8",
      "name": "COWELL - Convertidor de óxido en capa protectora",
      "price": 590.00,
      "image": "https://example.com/cowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "9",
      "name": "X PAINT - Removedor de pinturas",
      "price": 610.00,
      "image": "https://example.com/xpaint.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "10",
      "name": "CEMENT CRYL - Sellador acrílico para pisos de concreto",
      "price": 580.00,
      "image": "https://example.com/cementcryl.png",
      "badge": { "type": "new", "text": "" },
      "category": "PRODUCTOS ESPECIALIZADOS"
    },
    {
      "id": "11",
      "name": "DOR -BACT V - Desengrasante y desinfectante con amonio cuaternario",
      "price": 630.00,
      "image": "https://example.com/dorbactv.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "12",
      "name": "BACTIWELL - Limpiador y desinfectante concentrado",
      "price": 620.00,
      "image": "https://example.com/bactiwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "13",
      "name": "CFH 1 - Jabón líquido industrial para el lavado de manos",
      "price": 570.00,
      "image": "https://example.com/cfh1.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "14",
      "name": "BIOBACT - Desinfectante con base en amonio cuaternario",
      "price": 600.00,
      "image": "https://example.com/biobact.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "15",
      "name": "POLISH ALL - Shampoo concentrado líquido",
      "price": 550.00,
      "image": "https://example.com/polishall.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "1",
      "name": "LIMPIAWELL - Limpiador y desinfectante de superficies con aroma",
      "price": 550.00,
      "image": "https://example.com/limpiawell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "2",
      "name": "AIRFLOWERS - Ambientador líquido bactericida",
      "price": 480.00,
      "image": "https://example.com/airflowers.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "3",
      "name": "EMOWELL - Enmascarador y eliminador de malos olores",
      "price": 510.00,
      "image": "https://example.com/emowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "4",
      "name": "SEPTIWELL - Degradador de materia orgánica en aguas negras. Controla olores",
      "price": 600.00,
      "image": "https://example.com/septiwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "5",
      "name": "BIOCT GT- Desinfectante de alto nivel con glutaraldehído",
      "price": 720.00,
      "image": "https://example.com/bioct_gt.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "6",
      "name": "SUPERWELL - Detergente concentrado multiusos",
      "price": 490.00,
      "image": "https://example.com/superwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "7",
      "name": "DETERWELL B.E. - Detergente concentrado para el lavado de ropa",
      "price": 650.00,
      "image": "https://example.com/deterwell_be.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "8",
      "name": "D-SAT 1 - Limpiador de muebles, tapetes y alfombras",
      "price": 590.00,
      "image": "https://example.com/d-sat_1.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "9",
      "name": "CLEAN GLASS NEW - Limpiador antiempañante de vidrios",
      "price": 460.00,
      "image": "https://example.com/clean_glass_new.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "10",
      "name": "CFH SPECIAL - Shampoo nacarado para el lavado de manos",
      "price": 530.00,
      "image": "https://example.com/cfh_special.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "11",
      "name": "CFH CHICLE - Jabón industrial neutro para el lavado de manos",
      "price": 490.00,
      "image": "https://example.com/cfh_chicle.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    },
    {
      "id": "12",
      "name": "CHF BACTERICIDA - Shampoo concentrado desinfectante para manos con amonio cuaternario",
      "price": 750.00,
      "image": "https://example.com/chf_bactericida.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN"
    }
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