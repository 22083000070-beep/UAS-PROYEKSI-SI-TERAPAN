
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Category, MenuItem } from '../types';

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

const Menu: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category | 'Semua'>('Semua');
  const categories: (Category | 'Semua')[] = ['Semua', 'Utama', 'Paket', 'Camilan', 'Minuman'];

  const filteredItems = activeCategory === 'Semua' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-bold tracking-widest text-sm uppercase mb-3 block">Daftar Rasa</span>
        <h2 className="text-4xl font-extrabold text-stone-900 mb-8">Pilih Menu Favoritmu</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-8 py-3 rounded-2xl font-bold transition-all transform hover:scale-105 ${
                activeCategory === cat 
                ? 'bg-orange-600 text-white shadow-xl shadow-orange-200 ring-4 ring-orange-100' 
                : 'bg-white text-stone-600 hover:bg-orange-50 border border-orange-100 shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredItems.map(item => (
          <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-50 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              {item.popular && (
                <div className="absolute top-6 left-6 bg-yellow-400 text-stone-900 text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <i className="fas fa-crown"></i> FAVORIT
                </div>
              )}
              
              {item.spicyLevel && item.spicyLevel > 0 && (
                <div className="absolute top-6 right-6 bg-red-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex gap-1 shadow-lg">
                  {[...Array(item.spicyLevel)].map((_, i) => (
                    <i key={i} className="fas fa-pepper-hot"></i>
                  ))}
                </div>
              )}
            </div>
            
            <div className="p-8 flex-grow flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-1 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                  <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">{item.category}</span>
                </div>
                <span className="text-xl font-black text-orange-600 whitespace-nowrap">{formatPrice(item.price)}</span>
              </div>
              <p className="text-stone-500 text-sm mb-8 leading-relaxed line-clamp-2">
                {item.description}
              </p>
              <button 
                onClick={() => onAddToCart(item)}
                className="mt-auto w-full bg-stone-950 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-3 shadow-lg shadow-stone-200 group-hover:shadow-orange-200"
              >
                <i className="fas fa-cart-plus"></i>
                Tambah Pesanan
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
