
import React from 'react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenAI: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart, onOpenAI }) => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-orange-500 p-2 rounded-lg">
              <i className="fas fa-utensils text-white text-xl"></i>
            </div>
            <span className="text-xl font-bold text-stone-800 hidden sm:block">
              Warung Makan <span className="text-orange-600">Lezat</span>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenAI}
              className="hidden md:flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-700 px-4 py-2 rounded-full transition-colors font-medium"
            >
              <i className="fas fa-robot text-orange-500"></i>
              Tanya Pelayan AI
            </button>
            
            <button 
              onClick={onOpenCart}
              className="relative p-2 text-stone-600 hover:text-orange-600 transition-colors"
            >
              <i className="fas fa-shopping-basket text-2xl"></i>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
