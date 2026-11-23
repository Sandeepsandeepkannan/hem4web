"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { MapPin } from 'lucide-react';

const Booking = () => {
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const [selectedDay, setSelectedDay] = useState<number>(1);
  const [mounted, setMounted] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    location: '', 
    phone: '',
    service: 'Hair Treatments'
  });

  // Solve hydration mismatch by waiting for mount
  useEffect(() => {
    setMounted(true);
    setSelectedDay(new Date().getDate());

    const handleServiceSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData(prev => ({ ...prev, service: customEvent.detail }));
      }
    };

    window.addEventListener('hem4-select-service', handleServiceSelect);
    return () => window.removeEventListener('hem4-select-service', handleServiceSelect);
  }, []);

  const allServices = [
    "Hair Treatments",
    "Hair Color & Highlights",
    "Facials & Advance Skincare",
    "Groom's Signature",
    "Bridal Makeup",
    "Pedicure & Manicure",
    "French Ombré Elegance",
    "3D Chrome & Metallic Glam",
    "Bridal Luxury Nail Couture",
    "Minimalist Aesthetic Art",
    "Groom's Essential Facial",
    "Executive Shave & Trim",
    "Men's Detan Therapy",
    "Bridal Hair Styling",
    "Pre-Bridal Luxury Glow"
  ];

  const timeSlots = ['10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '06:30 PM', '07:30 PM'];
  
  const today = new Date();
  const currentMonthName = today.toLocaleString('default', { month: 'long' });
  const currentYear = today.getFullYear();
  
  // Dynamic Calendar Logic
  const daysInMonthCount = new Date(currentYear, today.getMonth() + 1, 0).getDate();
  const daysInMonth = Array.from({ length: daysInMonthCount }, (_, i) => i + 1);
  
  // Calculate which day of the week the 1st falls on (0=Sun, 1=Mon, etc.)
  const firstDayOfMonth = new Date(currentYear, today.getMonth(), 1).getDay();
  const leadingEmptyDays = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = `*New Appointment Request*%0A` +
                    `*Name:* ${formData.firstName}%0A` +
                    `*Location:* ${formData.location}%0A` +
                    `*Phone:* ${formData.phone}%0A` +
                    `*Service:* ${formData.service}%0A` +
                    `*Date:* ${currentMonthName} ${selectedDay}, ${currentYear}%0A` + 
                    `*Time Slot:* ${selectedTime}%0A` +
                    `Please confirm my booking.`;

    const whatsappNumber = "917305251310";
    if (typeof window !== 'undefined') {
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  };

  // Avoid rendering until mounted to prevent hydration errors
  if (!mounted) return null;

  return (
    <section 
      id="hem4-reserve-portal"
      className="relative bg-[#F5F5F5] py-20 px-6 md:px-12 lg:px-24 overflow-hidden z-0 scroll-mt-32"
    >
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(#0a1f16 0.5px, transparent 0.5px), linear-gradient(90deg, #0a1f16 0.5px, transparent 0.5px)', backgroundSize: '100px 100px' }} />
      
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/3 pt-4">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-[1px] bg-[#c9a84c]"></div>
            <span className="text-[#c9a84c] text-[10px] tracking-[0.4em] uppercase font-bold">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-[#0a1f16] leading-tight mb-10">
            Book Your <br /> <span className="italic text-[#c9a84c]">Appointment</span>
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 border border-[#0a1f16]/10 rounded-full flex items-center justify-center bg-white shadow-sm">
                <MapPin className="text-[#c9a84c] w-4 h-4" />
              </div>
              <div>
                <h4 className="text-[9px] tracking-widest text-[#c9a84c] font-bold uppercase mb-1">Find Us</h4>
                <p className="text-[#0a1f16] text-sm"><span  className='font-bold'> Near Ganesh Mahal / Kalaimagal Vidyalaya School </span>
                  Ground Floor No.9, 1st St,<br />
                  Raghava Nagar, Madipakkam,<br />
                  Chennai, Tamil Nadu 600091<br /></p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/3 bg-white border border-gray-100 p-6 md:p-10 shadow-xl relative rounded-2xl">
          <form onSubmit={handleBooking} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="firstName" required onChange={handleInputChange} type="text" placeholder="Full Name" className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#c9a84c]" />
              <input name="location" required onChange={handleInputChange} type="text" placeholder="Your Location" className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#c9a84c]" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="phone" required onChange={handleInputChange} type="tel" placeholder="Phone Number" className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#c9a84c]" />
              <select name="service" value={formData.service} onChange={handleInputChange} className="w-full border border-gray-200 px-4 py-3 text-sm rounded-lg focus:outline-none focus:border-[#c9a84c] bg-white">
                {allServices.map((service, i) => (
                  <option key={i} value={service}>{service}</option>
                ))}
                {!allServices.includes(formData.service) && (
                  <option value={formData.service}>{formData.service}</option>
                )}
              </select>
            </div>

            <div className="bg-[#f8faf9] p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-8 rounded-xl border border-gray-50">
              <div>
                <p className="text-xs font-bold mb-4 uppercase tracking-widest text-[#0a1f16]">1. Select Date ({currentMonthName})</p>
                <div className="grid grid-cols-7 gap-1 text-[11px] text-center bg-white p-3 rounded-lg shadow-inner">
                  {/* Days of week headers */}
                  {/* Days of week headers */}
{['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, index) => (
  <span key={`day-header-${index}`} className="font-bold text-[#c9a84c] opacity-50 mb-1">
    {d}
  </span>
))}
               
                  {/* Empty slots for start of month */}
                  {leadingEmptyDays.map((_, d) => <span key={`empty-${d}`} />)}
                  {/* Actual days */}
                  {daysInMonth.map(day => (
                    <button 
                      key={day} 
                      type="button" 
                      onClick={() => setSelectedDay(day)} 
                      className={`w-8 h-8 flex items-center justify-center rounded-full transition-all ${selectedDay === day ? 'bg-[#0a1f16] text-white shadow-md' : 'hover:bg-gray-100 text-gray-600'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-bold mb-4 uppercase tracking-widest text-[#0a1f16]">2. Select Time</p>
                <div className="grid grid-cols-2 gap-2">
                  {timeSlots.map(time => (
                    <button 
                      key={time} 
                      type="button" 
                      onClick={() => setSelectedTime(time)} 
                      className={`py-2 text-[10px] font-bold rounded-lg border transition-all ${selectedTime === time ? 'bg-[#0a1f16] text-white border-[#0a1f16]' : 'bg-white text-gray-600 border-gray-100 hover:border-[#c9a84c]'}`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <button type="submit" className="w-full bg-[#0a1f16] text-white py-5 text-[11px] font-bold tracking-[0.4em] uppercase hover:bg-[#c9a84c] transition-all rounded-lg shadow-lg">
              Confirm via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;