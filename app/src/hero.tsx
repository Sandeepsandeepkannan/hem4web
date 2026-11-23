"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] bg-[#F5F5F5] text-[#0a1f16] overflow-hidden flex flex-col md:flex-row">
      
      {/* 1. Background Radial Glow */}
      <div 
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background: 'radial-gradient(circle at 10% 90%, rgba(201, 168, 76, 0.06) 0%, rgba(255, 255, 255, 0) 50%)'
        }}
      />

      {/* 2. Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none -z-0"
        style={{
          backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }}
      />

      {/* Left Content Column */}
      <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-start px-6 py-10 md:px-20 lg:px-28">
        <div className="flex items-center space-x-3 mb-12">
          <div className="w-12 h-[1px] bg-[#c9a84c]"></div>
          <span className="text-[#c9a84c] text-[10px] md:text-xs tracking-[0.3em] uppercase font-bold">
            Premium Family Salon · Madipakkam, Chennai
          </span>
        </div>

        <h1 className="text-[#0a1f16] leading-[1.1] mb-12 relative font-serif">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light">Where Beauty</span>
          <span className="flex items-baseline space-x-3 mt-2">
            <span className="block text-5xl md:text-6xl lg:text-7xl font-bold">Meets</span>
            <span className="block text-4xl md:text-5xl lg:text-6xl text-[#c9a84c] italic transform lg:-translate-y-1 tracking-tight">
              Elegance
            </span>
          </span>
        </h1>

        <p className="text-gray-500 text-base md:text-lg max-w-lg mb-12 leading-relaxed font-light">
          Hem4 Unisex Family Salon — your destination in Madipakkam for 
          world-class hair treatments, advanced facials, and transformative 
          beauty experiences for the whole family.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#hem4-reserve-portal" 
            className="inline-block bg-[#0a1f16] text-white px-10 py-4 text-center text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a84c] transition-all duration-300 shadow-sm border border-[#0a1f16]"
          >
            Book Appointment
          </a>
          <a 
            href="#services" 
            className="inline-block border border-[#c9a84c] text-[#c9a84c] px-10 py-4 text-center text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase hover:bg-[#c9a84c] hover:text-white transition-all duration-300"
          >
            Explore Services
          </a>
        </div>
      </div>

      {/* --- RIGHT IMAGE COLUMN (UPDATED WITH BOX FRAME) --- */}
      <div className="relative w-full md:w-1/2 h-[600px] md:h-auto  ml-10 bg-[#F5F5F5] p-12 md:20">
        
        {/* The "Box Frame" - A solid offset background and a thick border */}
        <div className="relative w-full h-full max-w-[550px] max-h-[500px]">
          
          {/* 1. Solid Gold Background Box (Shifted Bottom-Right) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="absolute -bottom-6 -right-6 w-full h-full bg-[#c9a84c]/20 z-0"
          />

          {/* 2. Thick Outer Frame Border (Shifted Top-Left) */}
          <div className="absolute -top-6 -left-6 w-full h-full border-[12px] border-[#c9a84c]/10 z-0" />

          {/* 3. The Main Image Container */}
          <motion.div 
            className="relative z-10 w-full h-full overflow-hidden shadow-2xl bg-[#0a1f16]"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <motion.img 
              src="/lat3.jpeg" 
              alt="Premium Salon Experience" 
              className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-700"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.2 }}
            />

            {/* Location Tag */}
            <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 bg-[#0a1f16]/90 backdrop-blur-md text-white px-4 py-2 text-[10px] tracking-widest uppercase font-bold">
              <MapPinIcon />
              Madipakkam, Chennai
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-28 z-10 hidden lg:flex items-center space-x-3 text-[#c9a84c] opacity-60">
        <span className="text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c9a84c] to-transparent"></div>
      </div>
    </section>
  );
};

const MapPinIcon = () => (
  <svg className="w-3 h-3 text-[#c9a84c]" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3" fill="black"/>
  </svg>
);

export default Hero;