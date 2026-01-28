
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Cart from './components/Cart';
import AIWaiter from './components/AIWaiter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { MenuItem, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAIWaiterOpen, setIsAIWaiterOpen] = useState(false);

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(i => i.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.quantity + delta);
        return { ...i, quantity: newQty };
      }
      return i;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="blob top-[-10%] left-[-10%]"></div>
        <div className="blob bottom-[20%] right-[-10%] bg-teal-500/10"></div>
        <div className="blob top-[40%] left-[30%] bg-amber-400/10"></div>

        <Navbar 
          cartCount={cartCount} 
          onOpenCart={() => setIsCartOpen(true)} 
          onOpenAI={() => setIsAIWaiterOpen(true)}
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <Hero onOpenMenu={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })} />
                <section id="menu" className="py-20 relative">
                  <div className="absolute inset-0 bg-pattern pointer-events-none"></div>
                  <Menu onAddToCart={addToCart} />
                </section>
                <Contact />
              </>
            } />
          </Routes>
        </main>

        <Footer />

        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart}
          onRemove={removeFromCart}
          onUpdateQuantity={updateQuantity}
          total={cartTotal}
        />

        <AIWaiter 
          isOpen={isAIWaiterOpen} 
          onClose={() => setIsAIWaiterOpen(false)} 
        />

        <button 
          onClick={() => setIsAIWaiterOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-orange-500 text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all transform hover:scale-110 md:hidden"
        >
          <i className="fas fa-robot text-xl"></i>
        </button>
      </div>
    </Router>
  );
};

export default App;
