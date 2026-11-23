"use client";
import React from 'react';
import { Scissors, Sparkles } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const About = () => {
  // Animation variants defined to satisfy TypeScript strict mode
  const fadeInUp: Variants = {
    initial: { opacity: 0, y: 20 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section 
      id="about" //  Added ID to match the Navbar link
      className="relative min-h-screen bg-[#F5F5F5] text-[#0a1f16] overflow-hidden flex flex-col lg:flex-row items-center px-6 py-16 md:px-20 lg:px-28 gap-12 z-0 scroll-mt-28" // ✅ scroll-mt-28 prevents sticky Navbar overlap
    >
      
      {/* Background Overlays */}
      <div 
        className="absolute inset-0 pointer-events-none -z-10"
        style={{ background: 'radial-gradient(circle at 90% 10%, rgba(201, 168, 76, 0.06) 0%, rgba(255, 255, 255, 0) 50%)' }}
      />
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }}
      />

      {/* Left Content Column */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col">
        <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp} className="flex items-center mb-8">
          <div className="bg-[#f0f4f2] text-[#0a1f16] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm border border-gray-200">
            <motion.span animate={{ rotate: [0, 15, -15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="text-[#c9a84c] text-xs">✨</motion.span>
            <span className="text-[10px] md:text-xs tracking-widest uppercase font-bold">Premium Family Salon • Madipakkam</span>
          </div>
        </motion.div>

        <motion.h1 initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp} className="font-serif text-[#0a1f16] leading-[1.1] mb-8">
          <span className="block text-5xl md:text-6xl lg:text-7xl font-light">About <span className="italic text-[#c9a84c] font-serif ml-4">this</span></span>
          <span className="block text-5xl md:text-6xl lg:text-7xl font-semibold mt-2">Hem4 Luxury</span>
        </motion.h1>

        <motion.p initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={fadeInUp} className="text-gray-500 text-lg max-w-md mb-12 leading-relaxed font-light">
          Redefining beauty standards in Madipakkam through expert craftsmanship and personalized styling care.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6">
          {/* Expert Card */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={scaleIn} whileHover={{ y: -10, backgroundColor: "#0a1f16" }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full sm:w-48 transition-colors duration-300 group cursor-default">
            <Scissors className="text-[#c9a84c] mb-4 group-hover:text-white transition-colors" size={24} />
            <h3 className="text-[#0a1f16] group-hover:text-white font-bold text-sm uppercase tracking-tight transition-colors">Expert</h3>
            <p className="text-[10px] text-gray-400 group-hover:text-[#c9a84c] uppercase tracking-widest mt-1 transition-colors">Hair Couture</p>
          </motion.div>

          {/* Luxury Card */}
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={scaleIn} whileHover={{ y: -10, backgroundColor: "#0a1f16" }} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full sm:w-48 transition-colors duration-300 group cursor-default">
            <Sparkles className="text-[#c9a84c] mb-4 group-hover:text-white transition-colors" size={24} />
            <h3 className="text-[#0a1f16] group-hover:text-white font-bold text-sm uppercase tracking-tight transition-colors">Luxury</h3>
            <p className="text-[10px] text-gray-400 group-hover:text-[#c9a84c] uppercase tracking-widest mt-1 transition-colors">Skin Rituals</p>
          </motion.div>
        </div>
      </div>

      {/* Right Content Column (The Card) */}
      <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }} variants={scaleIn} whileHover={{ scale: 1.02 }} className="relative z-10 w-full lg:w-1/2 cursor-default">
        <div className="bg-white rounded-[40px] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50 relative overflow-hidden group hover:border-[#c9a84c]/30 transition-colors duration-500">
          <motion.div initial={{ width: 0 }} whileInView={{ width: "100%" }} transition={{ duration: 1, delay: 0.8 }} className="absolute top-0 left-0 h-1 bg-gradient-to-r from-transparent via-[#c9a84c] to-transparent" />
          <div className="flex flex-col gap-6">
            <p className="text-gray-600 leading-relaxed text-lg italic"><span className="text-4xl font-serif text-[#0a1f16] float-left mr-3 mt-1 leading-none">H</span>em4 Unisex Family Salon is the premier destination for transformative grooming in <span className="font-bold text-[#0a1f16]">Madipakkam, Chennai</span>.</p>
            <p className="text-gray-500 leading-relaxed text-base font-light">Our salon specializes in a wide range of services including bridal makeovers, precision hair-coloring, and advanced facials.</p>
            <motion.div initial={{ width: 0 }} whileInView={{ width: 48 }} transition={{ duration: 0.8, delay: 1 }} className="h-[1px] bg-[#c9a84c] mt-4" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;