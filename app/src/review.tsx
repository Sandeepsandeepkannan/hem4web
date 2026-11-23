"use client";
import React from 'react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "Ananya Krishnan",
    text: "Best bridal makeup experience! They understood exactly what I wanted for my big day. Highly recommended!",
    initial: "A",
    time: "2 months ago"
  },
  {
    name: "Meera Nair",
    text: "Very professional and hygienic. The advanced facial left my skin glowing for weeks. My new go-to salon.",
    initial: "M",
    time: "1 month ago"
  },
  {
    name: "Rahul Verma",
    text: "The staff at HEM4 are true artists. I got global highlights and the result was exactly like the reference photo!",
    initial: "R",
    time: "3 weeks ago"
  },
  {
    name: "Sanjana R.",
    text: "Top-notch service in Chennai. Friendly atmosphere and expert advice on hair care post-treatment.",
    initial: "S",
    time: "4 days ago"
  },
  {
    name: "Priya Dharshini",
    text: "The Keratin treatment here is life-changing. My hair has never felt this smooth and manageable. Simply the best!",
    initial: "P",
    time: "5 months ago"
  },
  {
    name: "Vikram Seth",
    text: "Great experience for men too. Precise haircut and a very relaxing head massage. High attention to detail.",
    initial: "V",
    time: "2 weeks ago"
  }
];

const GOOGLE_REVIEW_URL = "https://www.google.com/search?q=HEM4+Unisex+Family+Salon+Madipakkam+reviews";

const Reviews = () => {
  return (
    <section 
      id="reviews" 
      className="bg-[#F5F5F5] py-24 overflow-hidden relative scroll-mt-28 border-t border-gray-100"
    >
      {/* Header */}
      <div className="text-center mb-16 px-6 relative z-10">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="text-gray-500 font-medium tracking-tight">Google Rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-3xl font-bold text-gray-800">4.9</span>
            <div className="flex text-[#F4B400]">
              {[...Array(5)].map((_, i) => <span key={i} className="text-xl">★</span>)}
            </div>
            <span className="text-gray-400 text-sm">(120+ Reviews)</span>
          </div>
        </div>
      </div>

      {/* Sliding Track */}
      <div className="flex relative z-10">
        <motion.div 
          className="flex space-x-6 px-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            ease: "linear", 
            duration: 35, 
            repeat: Infinity 
          }}
          // Pause on hover for accessibility
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...reviews, ...reviews].map((review, index) => (
            <div 
              key={index} 
              className="w-[320px] md:w-[380px] flex-shrink-0 bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Profile Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-500 text-sm">
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm flex items-center gap-1">
                      {review.name}
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium">Local Guide • {review.time}</p>
                  </div>
                </div>
                {/* Google G Logo in corner */}
                <svg className="w-4 h-4" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>

              {/* Real Stars */}
              <div className="flex space-x-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#F4B400] text-sm">★</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-[13px] leading-relaxed line-clamp-4">
                {review.text}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Button */}
      <div className="mt-12 text-center relative z-10">
        <a 
          href={GOOGLE_REVIEW_URL} 
          target="_blank" 
          className="inline-flex items-center px-6 py-2.5 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-50 hover:shadow-sm transition-all shadow-sm"
        >
          View all reviews on Google Maps
        </a>
      </div>
    </section>
  );
};

export default Reviews;