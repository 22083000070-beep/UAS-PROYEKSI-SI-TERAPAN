
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <i className="fas fa-utensils text-white text-xl"></i>
              </div>
              <span className="text-xl font-bold">Lezat</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Kami menyajikan kelezatan nusantara dengan standar kebersihan tertinggi dan pelayanan yang hangat sejak tahun 2010.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Menu Utama</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Nasi Goreng</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Sate Madura</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Rendang Minang</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Gado-Gado</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Bantuan</h4>
            <ul className="space-y-3 text-stone-400 text-sm">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Cara Pesan</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Pengiriman</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Kontak Kami</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Dapatkan info promo spesial setiap minggunya.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email anda" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 w-full"
              />
              <button className="bg-orange-600 p-2 rounded-lg hover:bg-orange-700 transition-colors">
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-stone-500 text-xs">
          <p>© 2024 Warung Makan Lezat. Seluruh hak cipta dilindungi undang-undang.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-stone-300">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-stone-300">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
