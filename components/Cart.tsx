
import React from 'react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  total: number;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQuantity, total }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(price);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-6 border-b flex justify-between items-center">
            <h2 className="text-2xl font-bold text-stone-800">Pesanan Anda</h2>
            <button onClick={onClose} className="p-2 text-stone-400 hover:text-stone-600">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div className="flex-grow overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-stone-400">
                <i className="fas fa-shopping-basket text-6xl mb-4 opacity-20"></i>
                <p>Belum ada menu yang dipilih</p>
                <button onClick={onClose} className="mt-4 text-orange-600 font-semibold underline">Mulai Belanja</button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
                    <div className="flex-grow">
                      <div className="flex justify-between font-bold text-stone-800">
                        <span>{item.name}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border border-stone-200 rounded-lg">
                          <button 
                            onClick={() => onUpdateQuantity(item.id, -1)}
                            className="px-3 py-1 hover:bg-stone-100"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-medium">{item.quantity}</span>
                          <button 
                            onClick={() => onUpdateQuantity(item.id, 1)}
                            className="px-3 py-1 hover:bg-stone-100"
                          >
                            +
                          </button>
                        </div>
                        <button 
                          onClick={() => onRemove(item.id)}
                          className="text-red-500 text-sm font-medium hover:underline"
                        >
                          Hapus
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="p-6 border-t bg-stone-50">
              <div className="flex justify-between text-lg font-bold text-stone-800 mb-6">
                <span>Total Pembayaran</span>
                <span className="text-orange-600">{formatPrice(total)}</span>
              </div>
              <button 
                className="w-full bg-orange-600 hover:bg-orange-700 text-white py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-200"
                onClick={() => alert('Pesanan diterima! Terima kasih telah berbelanja di Warung Makan Lezat.')}
              >
                Checkout Sekarang
              </button>
              <p className="text-center text-xs text-stone-400 mt-4">
                Pajak & biaya pelayanan sudah termasuk
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
