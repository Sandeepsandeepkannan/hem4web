"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="w-full bg-[#8B5A2B]/95 backdrop-blur-lg text-[#c9a84c] px-6 py-6 md:px-12 flex items-center justify-between border-b border-[#c9a84c]/10 sticky top-0 z-50 transition-all duration-300 min-h-[90px]">
      
      {/* Left Logo Section */}
      <Link href="/" className="flex items-center space-x-4 group cursor-pointer">
        <div className="relative w-14 h-14 rounded-full flex items-center justify-center overflow-hidden group-hover:bg-[#c9a84c] transition-all duration-500 shadow-lg">
          {/* Logo Image */}
          <Image 
            src="/HEM4.PNG" 
            alt="Hem4 Logo"
            fill
            className="object-cover p-1 transition-transform duration-500 group-hover:scale-110"
            sizes="56px" // Add this line (since your container is w-14 which is 56px)
            priority // Add this too since it's the logo and should load fast
          />
        </div>
        <div className="flex flex-col text-white">
          <h1 className="text-2xl font-serif font-bold tracking-widest leading-none">Hem4</h1>
          <p className="text-[11px] tracking-[0.3em] font-semibold text-[#c9a84c] mt-1">Unisex Family Salon</p>
        </div>
      </Link>

      {/* Center Links - Font size increased to 14px */}
      <div className="hidden lg:flex items-center space-x-10 text-[14px] font-bold tracking-[0.2em] uppercase">
        {['About', 'Services', 'Nail Art', 'Reviews', 'Contact'].map((item) => (
          <Link 
            key={item}
            href={
              item === 'Contact'
                ? '#hem4-reserve-portal'
                : item === 'Nail Art'
                ? '#nail-art'
                : `#${item.toLowerCase()}`
            }
            className="relative overflow-hidden group py-1"
          >
            <span className="text-white group-hover:text-[#c9a84c] transition-colors">{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c9a84c] translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center space-x-4">
        {/* WhatsApp Button */}
        <Link 
          href="https://wa.me/917305251310"
          target="_blank"
          className="flex items-center gap-2 border border-[#c9a84c] px-6 py-3 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#c9a84c] text-[#0a1f16] hover:bg-transparent hover:text-[#c9a84c] transition-all duration-500"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
          </svg>
          <span className="hidden sm:inline">WhatsApp</span>
        </Link>

        {/* Book Now Button */}
        <Link 
          href="#hem4-reserve-portal"
          className="hidden sm:block border border-[#D4AF37] px-8 py-3 text-[10px] font-bold tracking-[0.25em] uppercase bg-[#c9a84c] text-[#0a1f16] hover:bg-transparent hover:text-[#c9a84c] transition-all duration-500"
        >
          Book Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;