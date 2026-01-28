
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Nasi Goreng Spesial',
    description: 'Nasi goreng dengan bumbu rahasia, telur mata sapi, ayam suwir, dan kerupuk.',
    price: 35000,
    category: 'Utama',
    image: 'https://picsum.photos/seed/nasigoreng/400/300',
    popular: true,
    spicyLevel: 1
  },
  {
    id: '2',
    name: 'Sate Ayam Madura',
    description: '10 tusuk sate ayam dengan bumbu kacang kental dan lontong.',
    price: 40000,
    category: 'Utama',
    image: 'https://picsum.photos/seed/sate/400/300',
    popular: true
  },
  {
    id: '3',
    name: 'Gado-Gado Betawi',
    description: 'Sayuran segar dengan bumbu kacang legit dan emping renyah.',
    price: 25000,
    category: 'Utama',
    image: 'https://picsum.photos/seed/gadogado/400/300'
  },
  {
    id: '4',
    name: 'Rendang Daging Sapi',
    description: 'Daging sapi pilihan yang dimasak lama dengan rempah otentik Minang.',
    price: 55000,
    category: 'Utama',
    image: 'https://picsum.photos/seed/rendang/400/300',
    popular: true,
    spicyLevel: 2
  },
  {
    id: '5',
    name: 'Es Teh Manis',
    description: 'Teh seduh segar dengan gula asli.',
    price: 5000,
    category: 'Minuman',
    image: 'https://picsum.photos/seed/esteh/400/300'
  },
  {
    id: '6',
    name: 'Es Jeruk Peras',
    description: 'Jeruk peras murni dengan es batu kristal.',
    price: 12000,
    category: 'Minuman',
    image: 'https://picsum.photos/seed/esjeruk/400/300'
  },
  {
    id: '7',
    name: 'Pisang Goreng Keju',
    description: 'Pisang raja goreng dengan topping keju parut dan cokelat.',
    price: 18000,
    category: 'Camilan',
    image: 'https://picsum.photos/seed/pisgor/400/300'
  },
  {
    id: '8',
    name: 'Mendoan Banyumas',
    description: 'Tempe lebar dengan bumbu kunyit dan sambal kecap pedas.',
    price: 15000,
    category: 'Camilan',
    image: 'https://picsum.photos/seed/mendoan/400/300',
    spicyLevel: 1
  },
  {
    id: '9',
    name: 'Paket Hemat Kenyang',
    description: 'Nasi Goreng + Es Teh Manis + Kerupuk tambahan.',
    price: 38000,
    category: 'Paket',
    image: 'https://picsum.photos/seed/paket/400/300',
    popular: true
  }
];
