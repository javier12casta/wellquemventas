import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';
import { Product } from '../../core/models/product-list.model';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
})
export class ProductosComponent {
  products: Product[] = [
    {
      "id": "1",
      "name": "ELECTRIWELL - Limpiador solvente dieléctrico",
      "price": 36890,
      "image": "https://example.com/electriwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Limpiador solvente dieléctrico.",
      "city": "Bogotá",
      "presentation": "Aerosol"
    },
    {
      "id": "2",
      "name": "ELECTRON PLUS - Limpiador para equipos electrónicos",
      "price": 547400,
      "image": "https://example.com/electron_plus.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Limpiador para equipos electrónicos.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "3",
      "name": "CLEANER KV30 - Limpiador dieléctrico no inflamable",
      "price": 706860,
      "image": "https://example.com/cleaner_kv30.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Limpiador dieléctrico no inflamable.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "4",
      "name": "VOLT 7000 - Solvente limpiador",
      "price": 452200,
      "image": "https://example.com/volt_7000.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Solvente limpiador.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "5",
      "name": "SOLVE GREEN - Limpiador dieléctrico cítrico",
      "price": 932960,
      "image": "https://example.com/solve_green.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Limpiador dieléctrico cítrico.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "6",
      "name": "DRY 220 - Desalojador de humedad",
      "price": 6637840,
      "image": "https://example.com/dry_220.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES ELÉCTRICOS Y ELECTRÓNICOS A GRANEL",
      "description": "Desalojador de humedad.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "7",
      "name": "REPWELL - Desincrustante inorgánico para calderas y equipos de enfriamiento",
      "price": 328440,
      "image": "https://example.com/repwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Desincrustante inorgánico para calderas y equipos de enfriamiento.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "8",
      "name": "SODWELL - Acondicionador de pH",
      "price": 261800,
      "image": "https://example.com/sodwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Acondicionador de pH.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "9",
      "name": "TAC 24 - Tratamiento preventivo para aguas de calderas",
      "price": 337960,
      "image": "https://example.com/tac_24.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Tratamiento preventivo para aguas de calderas.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "10",
      "name": "TAC 24P - Tratamiento preventivo polimérico para aguas de calderas",
      "price": 333200,
      "image": "https://example.com/tac_24p.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Tratamiento preventivo polimérico para aguas de calderas.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "11",
      "name": "OCR 13 - Tratamiento integral de agua en torres de enfriamiento de bajo tonelaje",
      "price": 352240,
      "image": "https://example.com/ocr_13.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Tratamiento integral de agua en torres de enfriamiento de bajo tonelaje.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "12",
      "name": "OCR 26 - Tratamiento integral de agua en torres de enfriamiento de alto tonelaje",
      "price": 361760,
      "image": "https://example.com/ocr_26.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Tratamiento integral de agua en torres de enfriamiento de alto tonelaje.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "13",
      "name": "REFRI RAD - Tratamiento de aguas en sistemas cerrados de enfriamiento",
      "price": 33200,
      "image": "https://example.com/refri_rad.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Tratamiento de aguas en sistemas cerrados de enfriamiento.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "14",
      "name": "TOWER FIT - Alguicida para el agua de torres de enfriamiento",
      "price": 392700,
      "image": "https://example.com/tower_fit.png",
      "badge": { "type": "new", "text": "" },
      "category": "TRATAMIENTOS PARA AGUAS DE CALDERAS Y SISTEMAS DE ENFRIAMIENTO",
      "description": "Alguicida para el agua de torres de enfriamiento.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "15",
      "name": "WQ-9487 - Desengrasante emulsificante hidrosoluble",
      "price": 340340,
      "image": "https://example.com/wq-9487.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante emulsificante hidrosoluble.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "16",
      "name": "CLEAN S9 - Desengrasante industrial hidrosoluble",
      "price": 321300,
      "image": "https://example.com/clean-s9.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante industrial hidrosoluble.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "17",
      "name": "W 2719 - Desengrasante alcalino multiusos",
      "price": 44744,
      "image": "https://example.com/w-2719.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante alcalino multiusos.",
      "city": "Bogotá",
      "presentation": "Galón"
    },
    {
      "id": "18",
      "name": "WELLGRASS - Detergente líquido industrial neutro biodegradable",
      "price": 299880,
      "image": "https://example.com/wellgrass.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Detergente líquido industrial neutro biodegradable.",
      "city": "Bogotá",
      "presentation": "Galón"
    },
    {
      "id": "19",
      "name": "DOR CLEAN - Limpiador y desengrasante biodegradable",
      "price": 321300,
      "image": "https://example.com/dor-clean.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Limpiador y desengrasante biodegradable.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "20",
      "name": "METAL CLEAN - Desengrasante, desoxidante y fosfatizante",
      "price": 397460,
      "image": "https://example.com/metal-clean.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante, desoxidante y fosfatizante.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "21",
      "name": "CLEAN NB - Desengrasante hidrosoluble no butílico",
      "price": 283220,
      "image": "https://example.com/clean-nb.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante hidrosoluble no butílico.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "22",
      "name": "DESENGRASANTE WM - Solvente dieléctrico natural",
      "price": 1761200,
      "image": "https://example.com/desengrasante-wm.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Solvente dieléctrico natural.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "23",
      "name": "MAX-T - Desengrasante y limpiador exterior de motores",
      "price": 530740,
      "image": "https://example.com/max-t.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante y limpiador exterior de motores.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "24",
      "name": "BIOSOLVE - Desengrasante y disolvente orgánico",
      "price": 585480,
      "image": "https://example.com/biosolve.png",
      "badge": { "type": "new", "text": "" },
      "category": "DESENGRASANTES INDUSTRIALES",
      "description": "Desengrasante y disolvente orgánico.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "25",
      "name": "BRILLALUM - Limpiador no ácido para aluminio",
      "price": 414120,
      "image": "https://example.com/brillalum.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Limpiador no ácido para aluminio.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "26",
      "name": "LSA 2 - Limpiador ácido inhibido concentrado para aluminio y acero inoxidable",
      "price": 547400,
      "image": "https://example.com/lsa2.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Limpiador ácido inhibido concentrado para aluminio y acero inoxidable.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "27",
      "name": "AUTOWELL - Shampoo para lavado de vehículos",
      "price": 292740,
      "image": "https://example.com/autowell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Shampoo para lavado de vehículos.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "28",
      "name": "CFH CREWELL - Crema limpiadora de manos",
      "price": 24300,
      "image": "https://example.com/cfh-crewell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Crema limpiadora de manos.",
      "city": "Bogotá",
      "presentation": "Kilo"
    },
    {
      "id": "29",
      "name": "TANLESS P - Limpiador, desmanchador y desincrustante ácido",
      "price": 330820,
      "image": "https://example.com/tanless-p.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Limpiador, desmanchador y desincrustante ácido.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "30",
      "name": "LPM 800 – Emulsificante de grasas y aceites en todo tipo de superficies",
      "price": 616420,
      "image": "https://example.com/lpm-800.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Emulsificante de grasas y aceites en todo tipo de superficies.",
      "city": "Bogotá",
      "presentation": "Caneca 20lt"
    },
    {
      "id": "31",
      "name": "LITOSOLVE - Limpiador litográfico",
      "price": 476000,
      "image": "https://example.com/litosolve.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Limpiador litográfico.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "32",
      "name": "MACLEAN - Limpiador litográfico emulsionable",
      "price": 495040,
      "image": "https://example.com/maclean.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIADORES INDUSTRIALES",
      "description": "Limpiador litográfico emulsionable.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "33",
      "name": "DOR -BACT V - Desengrasante y desinfectante con amonio cuaternario",
      "price": 390320,
      "image": "https://example.com/dorbactv.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desengrasante y desinfectante con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "34",
      "name": "BACTIWELL - Limpiador y desinfectante concentrado",
      "price": 414120,
      "image": "https://example.com/bactiwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Limpiador y desinfectante concentrado.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "35",
      "name": "CFH 1 - Jabón líquido industrial para el lavado de manos",
      "price": 261800,
      "image": "https://example.com/cfh1.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Jabón líquido industrial para el lavado de manos.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "36",
      "name": "BIOBACT - Desinfectante con base en amonio cuaternario",
      "price": 497420,
      "image": "https://example.com/biobact.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante con base en amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "37",
      "name": "BACTERICIDA WGT - Desinfectante con amonio cuaternario",
      "price": 399840,
      "image": "https://example.com/bactericida_wgt.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "38",
      "name": "CLORWELL - Desinfectante con amonio cuaternario",
      "price": 342720,
      "image": "https://example.com/clorwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "39",
      "name": "PERACID W - Desinfectante con amonio cuaternario",
      "price": 399840,
      "image": "https://example.com/peracid_w.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "40",
      "name": "HIPOCLORITO DE SODIO 5% - Desinfectante con amonio cuaternario",
      "price": 190400,
      "image": "https://example.com/hipoclorito.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "41",
      "name": "POLISH ALL - Shampoo concentrado líquido",
      "price": 283220,
      "image": "https://example.com/polishall.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Shampoo concentrado líquido.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "42",
      "name": "LIMPIAWELL - Limpiador y desinfectante de superficies con aroma",
      "price": 290360,
      "image": "https://example.com/limpiawell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Limpiador y desinfectante de superficies con aroma.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "43",
      "name": "AIRFLOWERS - Ambientador líquido bactericida",
      "price": 209440,
      "image": "https://example.com/airflowers.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Ambientador líquido bactericida.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "44",
      "name": "SEPTIWELL - Degradador de materia orgánica en aguas negras. Controla olores",
      "price": 236572,
      "image": "https://example.com/septiwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Degradador de materia orgánica en aguas negras. Controla olores.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "45",
      "name": "BIOCT GT - Desinfectante de alto nivel con glutaraldehído",
      "price": 399840,
      "image": "https://example.com/bioct_gt.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Desinfectante de alto nivel con glutaraldehído.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "46",
      "name": "SUPERWELL - Detergente concentrado multiusos",
      "price": 309400,
      "image": "https://example.com/superwell.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Detergente concentrado multiusos.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "47",
      "name": "DETERWELL B.E. - Detergente concentrado para el lavado de ropa",
      "price": 342720,
      "image": "https://example.com/deterwell_be.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Detergente concentrado para el lavado de ropa.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "48",
      "name": "D-SAT 1 - Limpiador de muebles, tapetes y alfombras",
      "price": 297500,
      "image": "https://example.com/d-sat_1.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Limpiador de muebles, tapetes y alfombras.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "49",
      "name": "CLEAN GLASS NEW - Limpiador antiempañante de vidrios",
      "price": 223720,
      "image": "https://example.com/clean_glass_new.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Limpiador antiempañante de vidrios.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "50",
      "name": "CFH SPECIAL - Shampoo nacarado para el lavado de manos",
      "price": 290360,
      "image": "https://example.com/cfh_special.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Shampoo nacarado para el lavado de manos.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "51",
      "name": "CFH CHICLE - Jabón industrial neutro para el lavado de manos",
      "price": 261800,
      "image": "https://example.com/cfh_chicle.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Jabón industrial neutro para el lavado de manos.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
    },
    {
      "id": "52",
      "name": "CHF BACTERICIDA - Shampoo concentrado desinfectante para manos con amonio cuaternario",
      "price": 345100,
      "image": "https://example.com/chf_bactericida.png",
      "badge": { "type": "new", "text": "" },
      "category": "LIMPIEZA Y DESINFECCIÓN",
      "description": "Shampoo concentrado desinfectante para manos con amonio cuaternario.",
      "city": "Bogotá",
      "presentation": "Garrafa 20lt"
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