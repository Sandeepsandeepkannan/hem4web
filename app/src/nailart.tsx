"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { Sparkles, Crown, Heart, Gem } from 'lucide-react';

interface NailDesign {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  icon: React.ReactNode;
}

const nailDesigns: NailDesign[] = [
  {
    id: "01",
    title: "French Ombré Elegance",
    subtitle: "Classic soft-fade ombre on almond tips",
    image: "/nail-art-1.jpg",
    icon: <Sparkles className="w-5 h-5" />
  },
  {
    id: "02",
    title: "3D Chrome & Metallic Glam",
    subtitle: "High-shine molten gold & chrome glaze",
    image: "/nail-art-2.jpg",
    icon: <Gem className="w-5 h-5" />
  },
  {
    id: "03",
    title: "Bridal Luxury Nail Couture",
    subtitle: "Intricate crimson, crystals & gold filigree",
    image: "/nail-art-3.jpg",
    icon: <Crown className="w-5 h-5" />
  },
  {
    id: "04",
    title: "Minimalist Aesthetic Art",
    subtitle: "Clean negative-space lines & rose gold touch",
    image: "/nail-art-4.jpg",
    icon: <Heart className="w-5 h-5" />
  }
];

const NailArt = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleBookDesign = (designTitle: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hem4-select-service', { detail: designTitle }));
      const el = document.getElementById('hem4-reserve-portal');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="nail-art" className="relative bg-[#F5F5F5] py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-0 scroll-mt-28 border-t border-gray-100">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none -z-10"
        style={{
          backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-bold">Artisan Studio</span>
            <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a1f16] tracking-tight">
            Exclusive <span className="italic text-[#c9a84c]">Nail Art</span> Designs
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto mt-4 font-light">
            Elevate your fingertips with handcrafted nail couture, from modern chrome glazes to bespoke bridal masterpieces.
          </p>
        </div>

        {/* Designs Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {nailDesigns.map((design) => (
            <motion.div 
              key={design.id} 
              variants={itemVariants}
              onClick={() => handleBookDesign(design.title)}
              className="group relative p-8 shadow-xl transition-all duration-700 overflow-hidden cursor-pointer aspect-[4/5] hover:-translate-y-1 rounded-sm"
            >
              {/* Image & Gradient Overlay */}
              <div className="absolute inset-0 w-full h-full -z-10">
                <Image 
                  src={design.image} 
                  alt={design.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              </div>

              {/* Number Badge */}
              <span className="absolute left-5 top-5 text-4xl font-serif text-white/30 group-hover:text-[#c9a84c]/50 transition-all duration-700">
                {design.id}
              </span>

              {/* Content Box */}
              <div className="relative z-10 h-full flex flex-col justify-end">
                <div className="w-11 h-11 border border-[#c9a84c]/50 rounded-full flex items-center justify-center text-[#c9a84c] mb-3 bg-black/30 backdrop-blur-md group-hover:bg-[#c9a84c] group-hover:text-[#0a1f16] transition-all duration-500">
                  {design.icon}
                </div>

                <h3 className="text-xl font-serif text-white mb-1.5 leading-tight group-hover:text-[#c9a84c] transition-colors">
                  {design.title}
                </h3>

                <p className="text-[12px] text-white/70 mb-5 font-light line-clamp-2">
                  {design.subtitle}
                </p>

                <Link 
                  href="#hem4-reserve-portal" 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookDesign(design.title);
                  }}
                  className="text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-white/10 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-[#c9a84c] hover:text-[#0a1f16] hover:border-[#c9a84c] transition-all duration-500 inline-flex items-center gap-2 self-start"
                >
                  Book Now <span>→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NailArt;
