'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 15, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="https://images.pexels.com/photos/2498430/pexels-photo-2498430.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Indian Bridal Makeup Transformation"
          fill
          className="object-cover opacity-60"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-zinc-950"></div>
      </motion.div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative"
        >
          {/* Decorative Element */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-16 w-32 h-32 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c88d94]/30 via-transparent to-transparent blur-xl rounded-full"></div>
          
          <h2 className="text-[#e6c1c5] font-serif italic text-xl md:text-3xl mb-4 tracking-widest uppercase">
            The Art of Indian Bridal Beauty
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79]">Anjali Gupta</span>
          </h1>
          <p className="text-zinc-200 text-lg md:text-2xl max-w-3xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md">
            Premium bridal, glam, and special-occasion looks by Delhi&apos;s certified makeup artist.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20book%20a%20bridal%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-bold text-sm uppercase tracking-[0.2em] hover:scale-105 transition-transform duration-300 shadow-[0_0_40px_rgba(212,137,149,0.4)]"
            >
              Book Bridal Package
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto px-10 py-4 rounded-full border border-[#c88d94]/50 text-[#e6c1c5] font-bold text-sm uppercase tracking-[0.2em] hover:bg-[#c88d94]/10 transition-colors duration-300 backdrop-blur-sm"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c88d94] to-transparent"></div>
      </motion.div>
    </section>
  );
}
