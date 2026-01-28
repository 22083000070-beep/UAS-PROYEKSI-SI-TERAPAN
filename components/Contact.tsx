
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-200/20 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-orange-600 rounded-[3rem] p-8 md:p-16 text-white shadow-2xl shadow-orange-200 overflow-hidden relative">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[140%] bg-orange-500/20 -rotate-12"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold mb-6 backdrop-blur-sm">HUBUNGI KAMI</span>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-8 leading-tight">Mampir yuk ke <br/> Warung Kami!</h2>
              <p className="text-orange-100 mb-10 text-lg leading-relaxed opacity-90">
                Temukan kami di jantung kota. Suasana nyaman, parkir luas, dan tentunya rasa yang tak akan terlupakan.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-lg">
                    <i className="fas fa-map-marker-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Alamat</h4>
                    <p className="text-xs text-orange-50 opacity-80">Jakarta Selatan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-orange-600 shadow-lg">
                    <i className="fas fa-phone-alt text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">WhatsApp</h4>
                    <p className="text-xs text-orange-50 opacity-80">0812-3456-7890</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                {['instagram', 'facebook-f', 'tiktok', 'twitter'].map(social => (
                  <a key={social} href="#" className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-white hover:bg-white hover:text-orange-600 transition-all backdrop-blur-sm">
                    <i className={`fab fa-${social} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-white/20 blur-xl rounded-[3rem] group-hover:bg-white/30 transition-all"></div>
              <div className="relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/30">
                <img 
                  src="https://picsum.photos/seed/restaurantview/800/1000" 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  alt="Restaurant Location"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-950/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-3xl shadow-2xl flex items-center justify-between transform translate-y-2">
                  <div>
                    <h4 className="font-bold text-stone-900 text-lg">Buka Hari Ini</h4>
                    <p className="text-stone-500 text-sm">Hingga 22:00 WIB</p>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-1.5 rounded-full text-xs font-black animate-pulse">
                    OPEN NOW
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
