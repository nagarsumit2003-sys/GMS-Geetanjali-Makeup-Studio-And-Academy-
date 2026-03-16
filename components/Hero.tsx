'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MapPin, Instagram, Youtube, Pin, Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen bg-black flex flex-col justify-center overflow-hidden pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-grow flex flex-col justify-center">
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="w-full lg:w-1/2 text-left"
          >
            <h2 className="text-[#e6c1c5] font-serif text-3xl md:text-4xl mb-2">
              Anjali Gupta
            </h2>
            <h3 className="text-zinc-400 text-sm tracking-[0.2em] uppercase mb-8">
              Makeup Studio & Academy
            </h3>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight uppercase">
              Elevating Beauty <br />
              With Expertise
            </h1>
            
            <p className="text-zinc-400 text-lg md:text-xl mb-10 font-light max-w-lg">
              We specialize in creating flawless looks for your special day.
            </p>
            
            <div className="space-y-4 mb-10 text-zinc-300 font-light">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#d48995]" />
                <span>+91 9205358360</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#d48995]" />
                <span>info@anjaligupta.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#d48995]" />
                <span>Delhi 110085</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              <a
                href="https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20book%20an%20appointment."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            className="w-full lg:w-1/2 relative h-[500px] lg:h-[700px] rounded-bl-[100px] rounded-tr-[100px] overflow-hidden border border-[#c88d94]/30"
          >
            <Image
              src="https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=1000&q=80"
              alt="Indian Bridal Makeup Transformation"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>
        </div>

        {/* 4 Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {[
            { title: 'Bridal Makeup', desc: 'Bridal party Makeup for the whole event', icon: '👰' },
            { title: 'Party Makeup', desc: 'Bridal Makeup tailored to your needs', icon: '✨' },
            { title: 'Photography', desc: 'Capture the memories in and around', icon: '📸' },
            { title: 'Makeup Lessons', desc: 'Makeup lessons tailored to your setup', icon: '🎨' },
          ].map((card, i) => (
            <div key={i} className="bg-[#111] border border-zinc-800 rounded-2xl p-6 text-center hover:border-[#c88d94]/50 transition-colors">
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-[#e6c1c5] font-serif text-xl mb-2">{card.title}</h3>
              <p className="text-zinc-400 text-sm font-light">{card.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* Footer-like row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-zinc-800/50"
        >
          <div className="flex items-center text-zinc-300 mb-4 sm:mb-0">
            <MapPin className="w-5 h-5 text-[#d48995] mr-2" />
            <span className="text-sm">Google Maps Geetanjali Makeup Studio</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-colors">
              <Pin className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
