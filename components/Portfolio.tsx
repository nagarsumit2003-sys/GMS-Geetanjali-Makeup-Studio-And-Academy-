'use client';

import { motion } from 'motion/react';
import { Instagram, Youtube, Play } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, type: 'image', src: 'https://images.pexels.com/photos/3151944/pexels-photo-3151944.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Bridal Transformation' },
  { id: 2, type: 'video', src: 'https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Glam Look Tutorial' },
  { id: 3, type: 'image', src: 'https://images.pexels.com/photos/2467988/pexels-photo-2467988.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Before & After' },
  { id: 4, type: 'image', src: 'https://images.pexels.com/photos/1578871/pexels-photo-1578871.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Party Makeup' },
  { id: 5, type: 'video', src: 'https://images.pexels.com/photos/3065209/pexels-photo-3065209.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Hair Styling' },
  { id: 6, type: 'image', src: 'https://images.pexels.com/photos/887352/pexels-photo-887352.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop', alt: 'Nail Art' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#d48995] font-serif italic text-xl mb-4"
            >
              Our Work
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
            >
              Transformations
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 text-lg font-light"
            >
              Explore our gallery of stunning bridal makeovers, party glam, and intricate hair styling.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex space-x-4"
          >
            <a
              href="https://www.instagram.com/gms_geetanjali_makeup"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full border border-zinc-800 hover:border-[#c88d94]/50 text-zinc-300 hover:text-[#e6c1c5] transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm uppercase tracking-wider font-medium">Follow Us</span>
            </a>
            <a
              href="https://www.youtube.com/@GMS_Geetanjali_Makeup_Studio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 rounded-full border border-zinc-800 hover:border-[#c88d94]/50 text-zinc-300 hover:text-[#e6c1c5] transition-all duration-300 group"
            >
              <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm uppercase tracking-wider font-medium">Watch</span>
            </a>
          </motion.div>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group break-inside-avoid overflow-hidden rounded-2xl border border-zinc-800 hover:border-[#c88d94]/30 transition-colors"
            >
              <div className="relative w-full h-auto aspect-[3/4]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {item.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 group-hover:bg-[#c88d94]/80 group-hover:border-transparent transition-all duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </div>
                )}
                
                <div className="absolute bottom-0 left-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <h4 className="text-white font-serif text-xl mb-1">{item.alt}</h4>
                  <p className="text-[#d48995] text-sm uppercase tracking-widest font-medium">View on Instagram →</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.instagram.com/gms_geetanjali_makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[#c88d94]/50 text-[#e6c1c5] font-semibold text-sm uppercase tracking-widest hover:bg-[#c88d94]/10 transition-colors duration-300"
          >
            View Full Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}
