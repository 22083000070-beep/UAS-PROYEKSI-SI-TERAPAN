
export type Category = 'Utama' | 'Minuman' | 'Camilan' | 'Paket';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  spicyLevel?: 0 | 1 | 2 | 3;
  popular?: boolean;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
