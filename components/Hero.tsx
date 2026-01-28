
import React from 'react';

interface HeroProps {
  onOpenMenu: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenMenu }) => {
  return (
    <div className="relative overflow-hidden bg-stone-950 text-white py-24 sm:py-36">
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2000&auto=format&fit=crop" 
          alt="Indonesian Food"
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-orange-950 via-stone-900/80 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-orange-50/10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-500 text-white text-xs font-bold rounded-full mb-8 shadow-xl shadow-orange-900/20">
            <i className="fas fa-star animate-pulse"></i>
            <span>RESTORAN TERFAVORIT 2024</span>
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Kelezatan <br />
            <span className="text-orange-500 drop-shadow-sm">Asli Indonesia</span>
          </h1>
          <p className="text-xl text-stone-200 mb-10 leading-relaxed max-w-lg">
            Nikmati harmoni bumbu rempah warisan leluhur dalam setiap gigitan. Lezat, bergizi, dan harga bersahabat.
          </p>
          <div className="flex flex-wrap gap-5">
            <button 
              onClick={onOpenMenu}
              className="bg-orange-600 hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg shadow-orange-900/40"
            >
              Pesan Sekarang
            </button>
            <div className="flex items-center gap-4 text-white bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <img 
                    key={i} 
                    className="w-10 h-10 rounded-full border-2 border-stone-800 object-cover" 
                    src={`https://i.pravatar.cc/150?u=${i}`} 
                    alt="User" 
                  />
                ))}
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold">4.9/5 Rating</span>
                <span className="text-[10px] text-orange-400">Dari 2,000+ Ulasan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
