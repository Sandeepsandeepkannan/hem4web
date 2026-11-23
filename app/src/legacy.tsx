import React from 'react';

const Legacy = () => {
  return (
    <section className="relative w-full min-h-screen bg-[#F5F5F5] flex flex-col lg:flex-row overflow-hidden">
      
      {/* --- BACKGROUND OVERLAY --- */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
        style={{
          backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)',
          backgroundSize: '100px 100px'
        }}
      />

      {/* --- CONTENT --- */}

      {/* Left: Image Column */}
      {/* Added bg-white here to cover any background grid/grey tones */}
      <div className="relative rounded  z-10 w-full lg:w-1/2 h-[450px] lg:h-auto bg-[#F5F5F5] flex items-center justify-center overflow-hidden">
        <img 
          src="/lat1.jpeg" 
          alt="HEM4 Salon Exterior" 
          // Adjusted height to be 100% of the container to prevent gaps, 
          // and removed the large top margin that was pushing it down.
          className="w-full h-[600px] object-cover  rounded-2xl transition-transform duration-700"
        />
        {/* If you want the image slightly smaller without showing the background, 
            keep the container bg-white and adjust the image padding instead. */}
        <div className="absolute inset-0  pointer-events-none"></div>
      </div>

      {/* Right: Content Column */}
      <div className="relative z-10 w-full lg:w-1/2 flex flex-col justify-center px-8 py-16 md:px-16 lg:px-24">
        
        {/* Eyebrow */}
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
          <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-bold">
            The Legacy
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a1f16] leading-tight mb-8">
          Crafting <span className="italic text-[#c9a84c]">Beauty</span> <br />
          with Passion
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-12 max-w-xl font-light">
          At Hem4 Unisex Family Salon, beauty is more than a service—it's an art form. 
          We provide a sanctuary where luxury meets expertise, ensuring every guest 
          leaves feeling transformed and confident.
        </p>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-100 mb-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="relative">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#0a1f16] mb-4">
              Our Standards
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-xs flex items-center">
                <span className="mr-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span> Premium Global Products
              </li>
              <li className="text-gray-500 text-xs flex items-center">
                <span className="mr-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span> Certified Senior Stylists
              </li>
            </ul>
          </div>

          <div className="relative">
            <h4 className="text-[10px] tracking-[0.2em] font-bold uppercase text-[#0a1f16] mb-4">
              The Experience
            </h4>
            <ul className="space-y-3">
              <li className="text-gray-500 text-xs flex items-center">
                <span className="mr-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span> Personalized Consultation
              </li>
              <li className="text-gray-500 text-xs flex items-center">
                <span className="mr-3 w-1.5 h-1.5 rounded-full bg-[#c9a84c]"></span> Luxury Private Suites
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex pt-4">
          <button className="bg-[#0a1f16] text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-[#c9a84c] transition-all duration-300 shadow-lg shadow-black/5">
            Explore All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Legacy;