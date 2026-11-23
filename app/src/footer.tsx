"use client";
import React from 'react';
import Link from 'next/link';
import { Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const allServices = [
    "Hair Treatments",
    "Hair Color & Highlights",
    "Facials & Advance Skincare",
    "Groom's Makeup",
    "Bridal Makeup",
    "Nail Art & Extensions",
    "Pedicure & Manicure",
    "Groom's Essential Facial",
    "Executive Shave & Trim",
    "Men's Skin Therapy",
    "Relaxing Head Massage",
    "Foot & Back Massage",
    "Anti-Dandruff Cure",
    "Hair Fall Control",
    "Satin Skin Waxing Therapy"
  ];

  // Array of contact numbers for easier management
  const contactNumbers = [
    "+91 73052 51310",
    "+91 98678 51310",
    "+91 93636 09069"
  ];

  return (
    <footer className="bg-[#8B5A2B]/95 text-white py-16 px-6 md:px-12 lg:px-24 border-t border-[#c9a84c]/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-serif text-[#c9a84c] leading-none mb-2 tracking-tighter">Hem 4</h2>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a84c] font-bold">
                Madipakkam, Chennai
              </p>
            </div>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs font-light">
              Chennai’s premier destination for luxury hair care, bridal artistry, and advanced skin treatments. Experience excellence in every snip.
            </p>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-bold mb-8">Our Services</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {allServices.map((service, index) => (
                <Link 
                  key={index} 
                  href={service === "Nail Art & Extensions" ? "#nail-art" : "#services"} 
                  className="text-sm text-white/70 hover:text-[#c9a84c] transition-colors inline-block font-light"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Location & Contact Column */}
          <div className="space-y-8">
            <div>
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-bold mb-8">Location</h4>
              <div className="flex items-start space-x-3 group text-sm">
                <MapPin size={18} className="text-[#c9a84c] mt-1 flex-shrink-0" />
                <address className="not-italic leading-relaxed text-white/80 font-light">
                  <span className="font-bold block text-white mb-1">Near Ganesh Mahal</span>
                  Ground Floor No.9, 1st St,<br />
                  Raghava Nagar, Madipakkam,<br />
                  Chennai, Tamil Nadu 600091
                </address>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] font-bold mb-4">Connect</h4>
              
              {/* Phone Numbers List */}
              <div className="space-y-3">
                {contactNumbers.map((num, idx) => (
                  <Link 
                    key={idx}
                    href={`tel:${num.replace(/\s+/g, '')}`} 
                    className="flex items-center space-x-3 text-sm text-[#c9a84c] font-bold hover:opacity-80 transition-opacity"
                  >
                    <Phone size={16} />
                    <span>{num}</span>
                  </Link>
                ))}
              </div>

              {/* Social Icons */}
              <div className="flex space-x-4 pt-2">
                <Link 
                  href="https://www.instagram.com/hem4salon" 
                  target="_blank"
                  className="w-10 h-10 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#3D2B1F] transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </Link>
                <Link 
                  href="https://wa.me/917305251310" 
                  target="_blank"
                  className="w-10 h-10 border border-[#c9a84c]/30 rounded-full flex items-center justify-center text-[#c9a84c] hover:bg-[#c9a84c] hover:text-[#3D2B1F] transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-[#c9a84c]/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-white/40 tracking-wider font-light">
            © {currentYear} Hem 4 Unisex Family Salon. All rights reserved.
          </p>
          <div className="flex space-x-8 text-[11px] text-white/40 tracking-wider uppercase font-medium">
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-[#c9a84c] transition-colors">Terms</Link>
            <Link href="#hem4-reserve-portal" className="hover:text-[#c9a84c] transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;