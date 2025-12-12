export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface StoreInfo {
  name: string;
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  openHours: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
}
