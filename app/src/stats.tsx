"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const Stats = () => {
  const services = [
    "Hair Treatments",
    "Global Highlights",
    "Hair Keratin",
    "Bridal Makeup",
    "Skin Care",
    "Advanced Facials"
  ];

  const stats = [
    { value: "5+", label: "OFFERS" },
    { value: "6K+", label: "HAPPY CLIENTS" },
    { value: "20+", label: "PREMIUM SERVICES", hasIcon: true },
    { value: "5", label: "GOOGLE RATING", isRating: true },
  ];

  return (
    <section className="w-full overflow-hidden">
      {/* 1. Sliding Gold Marquee using Framer Motion */}
      <div className="bg-[#C9A84C] py-6 border-y border-black/5 flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 20, // Adjust speed here
            repeat: Infinity 
          }}
        >
          {/* We duplicate the array to ensure there's no empty space during the loop */}
          {[...services, ...services, ...services].map((service, index) => (
            <div key={index} className="flex items-center">
              <span className="text-[#0a1f16] font-bold tracking-[0.3em] uppercase text-sm md:text-base px-12">
                {service}
              </span>
              {/* The Dot Separator */}
              <div className="w-1.5 h-1.5 bg-[#0a1f16]/30 rounded-full flex-shrink-0" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* 2. Static Stats Section */}
      <div className="bg-[#F5F5F5] py-20 px-4 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center text-center px-4 ${
                index !== stats.length - 1 ? 'md:border-r border-[#c9a84c]/30' : ''
              }`}
            >
              <div className="relative flex items-center mb-2">
                <h2 className="text-[#0a1f16] text-4xl md:text-5xl font-serif tracking-tight">
                  {stat.value}
                </h2>
                
                {stat.hasIcon && (
                  <div className="ml-3 w-8 h-8 border border-[#c9a84c] rounded-full flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-[#c9a84c] rounded-full" />
                  </div>
                )}

                {stat.isRating && (
                  <Star className="ml-2 fill-[#c9a84c] text-[#c9a84c]" size={28} />
                )}
              </div>

              <p className="text-[#c9a84c] text-[10px] md:text-xs tracking-[0.3em] font-bold uppercase mt-2">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;