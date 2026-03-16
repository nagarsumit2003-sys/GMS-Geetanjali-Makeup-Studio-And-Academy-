'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Play } from 'lucide-react';
import Image from 'next/image';

const portfolioItems = [
  { id: 1, category: 'Bridal', type: 'image', src: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Transformation' },
  { id: 2, category: 'Glam', type: 'video', src: 'https://images.unsplash.com/photo-1512496015851-a1c8d4f05118?auto=format&fit=crop&w=800&q=80', alt: 'Glam Look Tutorial' },
  { id: 3, category: 'Bridal', type: 'video', src: 'https://images.unsplash.com/photo-1522337360788-8b13fee7a34b?auto=format&fit=crop&w=800&q=80', alt: 'Before & After' },
  { id: 4, category: 'Glam', type: 'image', src: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80', alt: 'Party Makeup' },
  { id: 5, category: 'Hair', type: 'video', src: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80', alt: 'Hair Styling' },
  { id: 6, category: 'Nails', type: 'image', src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=800&q=80', alt: 'Nail Art' },
  { id: 7, category: 'Bridal', type: 'image', src: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?auto=format&fit=crop&w=800&q=80', alt: 'Bridal Look' },
  { id: 8, category: 'Hair', type: 'video', src: 'https://images.unsplash.com/photo-1595476108010-b4d1f10d5e43?auto=format&fit=crop&w=800&q=80', alt: 'Hair Styling' },
];

const categories = ['All', 'Bridal', 'Hair', 'Nails', 'Glam'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#e6c1c5] text-black border-[#e6c1c5]'
                  : 'bg-transparent text-zinc-300 border-zinc-700 hover:border-[#e6c1c5] hover:text-[#e6c1c5]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-[#c88d94]/20 group"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              {item.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors">
                  <div className="w-12 h-12 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Shorts */}
          <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-serif text-white mb-6">YouTube Shorts</h3>
            <div className="aspect-[9/16] bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800">
              <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>

          {/* Instagram Reels */}
          <div className="bg-[#111] border border-zinc-800 rounded-3xl p-8">
            <h3 className="text-2xl font-serif text-white mb-6">Instagram Reels</h3>
            <div className="aspect-[9/16] bg-zinc-900 rounded-2xl flex items-center justify-center relative overflow-hidden border border-zinc-800">
              <div className="w-16 h-16 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 rounded-2xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
