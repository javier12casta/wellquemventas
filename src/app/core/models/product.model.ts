export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  imageUrl: string;
  price: number;
  unit: string;
  inStock: boolean;
  technicalSheet?: string;
  safetySheet?: string;
} 