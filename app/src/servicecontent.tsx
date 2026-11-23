"use client"

import React, { useState, useEffect, MouseEvent as ReactMouseEvent } from 'react';
import { Clock, Award, CheckCircle } from 'lucide-react';

// ✅ Fix: Added MouseEvent type to the hook
const useMousePosition = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return position;
};

// Component for the 3D-effect Card on the right
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const [style, setStyle] = useState({});

  // ✅ Fix: Properly typed React MouseEvent
  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = (e.clientX - box.left) / box.width;
    const y = (e.clientY - box.top) / box.height;
    const tiltX = (y - 0.5) * 10;
    const tiltY = (x - 0.5) * -10;

    setStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'none',
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s ease',
    });
  };

  return (
    <div
      className="relative group overflow-visible"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
    </div>
  );
};

const Servicecontent = () => {
  const mouse = useMousePosition();
  // State for interactive service switching
  const [selectedService] = useState<'hair' | 'skin'>('hair'); 

  const services = {
    hair: {
      eyebrow: 'Precision Cutting & Styling',
      titlePrimary: 'Expert Hair Couture',
      titleItalic: '& Transformative Styling.',
      desc: 'Our Master Stylists utilize precision cutting, advanced color techniques, and premium treatments to redefine your look with flawless, natural elegance.',
      features: ['Signature Cut & Blowdry', 'Deep Conditioning Steam Treatment', 'Hair Health Diagnostics' , 'Scalp Rejuvenation Therapy'],
      image: '/lat4.jpeg', 
    },
    skin: {
      eyebrow: 'Skin Rituals & Dermaplaning',
      titlePrimary: 'Advanced Skin Rejuvenation',
      titleItalic: '& Radiant Glow Solutions.',
      desc: 'Dermatalogically-guided facials and restorative treatments focused on skin vitality, cellular renewal, and unmatched radiant aesthetics.',
      features: ['Hydra-Facial Infusion', 'LED Light Therapy', 'Anti-Aging Medispa'],
      image: '/salon-skin-treatment.jpg',
    },
  };

  const currentData = services[selectedService];

  return (
    <section className="relative min-h-screen bg-[#F5F5F5] text-[#0a1f16] overflow-hidden font-sans">
      
      {/* 1. Interactive Parallax Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)',
            backgroundSize: '100px 100px',
            transform: `translate(${mouse.x / 70}px, ${mouse.y / 70}px)`,
          }}
        />
        <div 
          className="absolute bottom-1/4 left-20 w-32 h-32 bg-[#c9a84c]/10 rounded-full blur-3xl"
          style={{ transform: `translate(${mouse.x / 50}px, ${mouse.y / 50}px)` }}
        />
      </div>

      <div className="relative z-10 px-6 py-20 md:px-20 lg:px-28">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* --- Left Column: Content --- */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
              <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-bold">{currentData.eyebrow}</span>
            </div>

            <h1 className="font-serif text-[#0a1f16] leading-[1.1] mb-8 relative">
              <span className="block text-5xl md:text-6xl lg:text-7xl font-light">
                {currentData.titlePrimary}
              </span>
              <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold italic text-[#c9a84c] mt-2 font-serif relative">
                {currentData.titleItalic}
                <span className="absolute bottom-0 left-0 w-24 h-0.5 bg-[#c9a84c] -translate-x-2"></span>
              </span>
            </h1>

            <p className="text-gray-500 text-lg md:text-xl max-w-lg mb-16 leading-relaxed font-light">
              {currentData.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
              {currentData.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 group transition-all hover:border-[#c9a84c]/20 hover:shadow-md">
                    <CheckCircle className="text-[#c9a84c] group-hover:scale-110 transition-transform" size={20} />
                    <p className="text-[#0a1f16] font-semibold text-sm tracking-tight">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* --- Right Column: Interactive Image --- */}
          <div className="w-full lg:w-1/2 relative">
            <TiltCard>
              <div className="bg-white rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-[#c9a84c]/30 to-transparent"></div>
                <img 
                  src={currentData.image}
                  alt="Premium Salon Experience" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
              </div>
            </TiltCard>
            
            {/* Floating Badges */}
            

            <div className="absolute -right-8 bottom-12 z-20 group">
                <div className="bg-white rounded-xl px-5 py-4 flex items-center gap-3 shadow-xl border border-gray-50">
                    <div className="p-2.5 bg-[#f0f4f2] text-[#0a1f16] rounded-lg">
                        <Award className="text-[#c9a84c]" size={20} />
                    </div>
                    <div>
                        <p className="text-[10px] text-gray-400 uppercase font-bold">Expertise</p>
                        <p className="text-[#0a1f16] text-sm font-bold">Certified Stylists</p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicecontent;