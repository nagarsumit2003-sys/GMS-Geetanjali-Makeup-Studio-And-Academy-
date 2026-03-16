'use client';

import { motion } from 'motion/react';
import { Sparkles, Scissors, Hand, Droplets, Star } from 'lucide-react';
import Image from 'next/image';

const serviceCategories = [
  {
    title: 'Makeup Services',
    icon: <Sparkles className="w-8 h-8 text-[#d48995]" />,
    bgImage: 'https://images.pexels.com/photos/12260115/pexels-photo-12260115.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    items: [
      'Airbrush Makeup (flawless, photo-ready finish)',
      'Bridal Makeup (traditional to modern styles)',
      'Special Occasion Makeup (weddings, parties, anniversaries)',
      'Performance Makeup (stage, dramatic & long-lasting)',
      'Photography Makeup (camera-ready, enhances features)',
      'Makeovers (customized confidence-boosting looks)',
      'Makeup Classes (group or individual techniques)',
      'Private Lessons (one-on-one personalized training)',
    ],
  },
  {
    title: 'Hair Services',
    icon: <Scissors className="w-8 h-8 text-[#d48995]" />,
    bgImage: 'https://images.pexels.com/photos/10561323/pexels-photo-10561323.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    items: [
      'Hairstyling (any occasion, tailored to hair type)',
      'Hair Treatments (hydration, repair, shine)',
      'Bridal Hair',
      'Blowdry',
      'Haircut',
      'Hair Coloring',
      'Hair Highlighting',
      'Curly Hair styling',
    ],
  },
  {
    title: 'Nail Salon',
    icon: <Hand className="w-8 h-8 text-[#d48995]" />,
    bgImage: 'https://images.pexels.com/photos/5874876/pexels-photo-5874876.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    items: [
      'Manicure',
      'Pedicure',
      'Acrylic Nails (long-lasting)',
      'Nail Art (custom designs)',
      'Nail Extensions',
    ],
  },
  {
    title: 'Beautician Services',
    icon: <Droplets className="w-8 h-8 text-[#d48995]" />,
    bgImage: 'https://images.pexels.com/photos/8558244/pexels-photo-8558244.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    items: [
      'Body Waxing (silky smooth skin)',
      'Eyebrow Threading (precise shaping)',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#c88d94 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d48995] font-serif italic text-xl mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Premium Services
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-light"
          >
            From flawless airbrush makeup to intricate nail art, discover our comprehensive range of beauty treatments.
          </motion.p>
        </div>

        {/* Featured Bridal Package */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 bg-gradient-to-br from-[#1a1a1a] to-black border border-[#c88d94]/30 rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#c88d94]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#c88d94]/20 transition-colors duration-500"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex-1">
              <div className="flex items-center space-x-3 mb-4">
                <Star className="w-6 h-6 text-[#e6c1c5] fill-[#e6c1c5]" />
                <span className="text-[#e6c1c5] font-serif italic text-lg tracking-wider">Signature Offering</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">The Complete Bridal Package</h4>
              <p className="text-zinc-300 text-lg font-light mb-6">
                Full bridal makeup + hair styling + nails. Walk down the aisle looking absolutely flawless with our all-inclusive premium bridal service.
              </p>
              <a
                href="https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20enquire%20about%20the%20Complete%20Bridal%20Package."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm uppercase tracking-widest hover:scale-105 transition-transform duration-300"
              >
                Enquire on WhatsApp
              </a>
            </div>
            <div className="w-full md:w-1/3 aspect-square relative rounded-2xl overflow-hidden border border-[#c88d94]/20">
              <Image
                src="https://images.pexels.com/photos/9419108/pexels-photo-9419108.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Bridal Package"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl border border-zinc-800 hover:border-[#c88d94]/60 transition-all duration-500 group hover:-translate-y-2 min-h-[450px] flex flex-col justify-end"
            >
              {/* Background Image */}
              <Image
                src={category.bgImage}
                alt={category.title}
                fill
                className="object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="mb-4 p-3 bg-black/50 backdrop-blur-md rounded-xl inline-block border border-[#c88d94]/20 group-hover:border-[#c88d94]/50 transition-colors">
                  {category.icon}
                </div>
                <h4 className="text-2xl font-serif text-white mb-4">{category.title}</h4>
                <ul className="space-y-3 mb-6">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-zinc-300 text-sm font-light leading-relaxed flex items-start">
                      <span className="text-[#d48995] mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-zinc-800/50">
                  <a
                    href={`https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20enquire%20about%20your%20${category.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#d48995] hover:text-[#e6c1c5] text-sm uppercase tracking-widest font-medium transition-colors"
                  >
                    Enquire Now <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
            }
