export interface Badge {
  type?: 'hot' | 'discount' | 'new'; 
  value?: number;
  text?: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge: Badge; 
  category: string;
  description?: string;
  city?: string;
  presentation?: string;
} 