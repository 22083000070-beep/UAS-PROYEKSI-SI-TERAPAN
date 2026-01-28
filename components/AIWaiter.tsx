
import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { getAIRecommendation } from '../services/geminiService';

interface AIWaiterProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIWaiter: React.FC<AIWaiterProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo kak! Selamat datang di Warung Makan Lezat. Saya Budi, pelayan AI Anda. Lagi pengen makan apa hari ini? Ada yang pedas atau yang manis?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIRecommendation([...messages, userMsg]);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/50 z-[70] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      <div className={`fixed bottom-0 right-0 h-[80vh] w-full max-w-md bg-white z-[80] rounded-t-3xl md:rounded-l-3xl md:h-[600px] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 bg-orange-600 text-white flex justify-between items-center rounded-t-3xl md:rounded-tl-3xl">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <i className="fas fa-robot"></i>
              </div>
              <div>
                <h3 className="font-bold">Budi Pelayan AI</h3>
                <span className="text-[10px] opacity-80 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                  Siap Melayani
                </span>
              </div>
            </div>
            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 bg-stone-50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl ${
                  msg.role === 'user' 
                  ? 'bg-orange-500 text-white rounded-tr-none shadow-md' 
                  : 'bg-white text-stone-800 rounded-tl-none border border-stone-200 shadow-sm'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-stone-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-75"></span>
                  <span className="w-1.5 h-1.5 bg-stone-300 rounded-full animate-bounce delay-150"></span>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 bg-white border-t">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya rekomendasi menu..."
                className="flex-grow bg-stone-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-orange-500 outline-none"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-orange-600 text-white w-12 h-12 rounded-xl flex items-center justify-center hover:bg-orange-700 transition-colors disabled:opacity-50"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </div>
            <p className="text-[10px] text-stone-400 mt-2 text-center italic">
              Didukung oleh AI untuk pengalaman kuliner terbaik
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIWaiter;
