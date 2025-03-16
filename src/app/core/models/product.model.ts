export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  image: string;
  price: number;
  unit: string;
  inStock: boolean;
  technicalSheet?: string;
  safetySheet?: string;
  presentation?: string;
  city?: string;
} 