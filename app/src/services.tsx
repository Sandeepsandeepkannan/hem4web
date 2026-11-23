"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';
import { 
  Sparkles, Scissors, Wind, Droplets, Star, 
  UserCheck, Palmtree, User, Zap, Brush, 
  Fingerprint, Flower, ShieldAlert, Activity, Bath
} from 'lucide-react';

const Services = () => {
  const categories = [
    {
      name: "Men's Grooming",
      services: [
        { id: "01", title: "Groom's Makeup", image: "/groom.jpg", icon: <UserCheck className="w-5 h-5" /> },
        { id: "02", title: "Groom's Essential Facial", image: "/menfacial.jpg", icon: <Zap className="w-5 h-5" /> },
        { id: "04", title: "Men's Skin Therapy", image: "/mendetan.jpg", icon: <User className="w-5 h-5" /> },
        { id: "05", title: "Relaxing Head Massage", image: "/headmassagemen.jpg", icon: <Fingerprint className="w-5 h-5" /> },
        { id: "06", title: "Foot & Back Massage", image: "/footandbackmen.jpg", icon: <Flower className="w-5 h-5" /> },
        { id: "07", title: "Anti-Dandruff Cure", image: "/antidandruffmen.jpg", icon: <ShieldAlert className="w-5 h-5" /> },
        { id: "08", title: "Hair Fall Control", image: "/hairfallmen.jpg", icon: <Activity className="w-5 h-5" /> },
      ]
    },
    {
      name: "Women's & Bridal",
      services: [
        { id: "09", title: "Hair Treatments", image: "/hairtreatment.jpg", icon: <Droplets className="w-5 h-5" /> },
        { id: "10", title: "Hair Color & Highlights", image: "/haircolor.jpg", icon: <Wind className="w-5 h-5" /> },
        { id: "11", title: "Facials & Advance Skincare", image: "/laser.jpeg", icon: <Sparkles className="w-5 h-5" /> },
        { id: "12", title: "Bridal Makeup", image: "/women.jpeg", icon: <Star className="w-5 h-5" /> },
        { id: "13", title: "Pedicure & Manicure", image: "/pedicure.jpeg", icon: <Palmtree className="w-5 h-5" /> },
        { id: "15", title: "Deep Relief Head Massage", image: "/headmassagewomen.jpg", icon: <Fingerprint className="w-5 h-5" /> },
        { id: "16", title: "Foot & Back Massage", image: "/backmassagewomen.jpg", icon: <Flower className="w-5 h-5" /> },
        { id: "17", title: "Scalp Dandruff Therapy", image: "/dandruffwomen.jpg", icon: <ShieldAlert className="w-5 h-5" /> },
        { id: "18", title: "Advanced Hair Fall Control", image: "/hairfallwomen.jpg", icon: <Activity className="w-5 h-5" /> },
        { id: "19", title: "Premium Skin Waxing Therapy", image: "/skinwax.jpg", icon: <Bath className="w-5 h-5" /> },
      ]
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleSelectService = (title: string) => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('hem4-select-service', { detail: title }));
    }
  };

  return (
    <section id="services" className="relative bg-[#F5F5F5] py-24 px-6 md:px-12 lg:px-24 overflow-hidden z-0 scroll-mt-28">
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
        <div className="text-center mb-20 relative z-10">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-bold">Our Expertise</span>
            <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a1f16] tracking-tight">
            Our <span className="italic text-[#c9a84c]">Signature</span> Services
          </h2>
        </div>

        {categories.map((cat, catIdx) => (
          <div key={cat.name} className={catIdx > 0 ? "mt-24" : ""}>
            <div className="flex items-baseline space-x-4 mb-10">
              <h3 className="text-xl font-serif text-[#0a1f16] tracking-widest uppercase italic">{cat.name}</h3>
              <div className="flex-grow h-[1px] bg-gradient-to-r from-[#c9a84c]/30 to-transparent"></div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            >
              {cat.services.map((service) => (
                <motion.div 
                  key={service.id} 
                  variants={itemVariants}
                  className="group relative p-8 shadow-xl transition-all duration-700 overflow-hidden cursor-default aspect-[4/5] hover:-translate-y-1 rounded-sm"
                >
                  <div className="absolute inset-0 w-full h-full -z-10">
                    <Image 
                      src={service.image} 
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  <span className="absolute left-5 top-5 text-4xl font-serif text-white/30 group-hover:text-[#c9a84c]/50 transition-all duration-700">
                    {service.id}
                  </span>

                  <div className="relative z-10 h-full flex flex-col justify-end">
                    <div className="w-11 h-11 border border-[#c9a84c]/50 rounded-full flex items-center justify-center text-[#c9a84c] mb-4 bg-black/20 backdrop-blur-md group-hover:bg-[#c9a84c] group-hover:text-[#0a1f16] transition-all duration-500">
                      {service.icon}
                    </div>

                    <h3 className="text-xl font-serif text-white mb-5 leading-tight group-hover:text-[#c9a84c] transition-colors">
                      {service.title}
                    </h3>

                    <Link 
                      href="#hem4-reserve-portal" 
                      onClick={() => handleSelectService(service.title)}
                      className="text-[9px] font-bold tracking-[0.2em] uppercase text-white bg-white/10 backdrop-blur-md px-5 py-3 border border-white/20 hover:bg-[#c9a84c] hover:text-[#0a1f16] hover:border-[#c9a84c] transition-all duration-500 inline-flex items-center gap-2 self-start"
                    >
                      Book Now <span>→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;