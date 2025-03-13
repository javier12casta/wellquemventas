export interface Badge {
  type: 'hot' | 'discount'; // Asegúrate de que solo acepte estos valores
  text?: string;
  value?: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: Badge; // Usa la interfaz Badge aquí
  category: string; // Agrega esta línea para incluir la categoría
} 