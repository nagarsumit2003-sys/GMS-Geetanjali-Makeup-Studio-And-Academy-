'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-t-full overflow-hidden border border-[#c88d94]/30 p-2">
              <div className="relative w-full h-full rounded-t-full overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3221176/pexels-photo-3221176.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Anjali Gupta - Lead Makeup Artist"
                  fill
                  className="object-cover hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#d48995]/40 rounded-full"></div>
            <div className="absolute top-1/4 -left-8 w-16 h-16 border border-[#e6c1c5]/20 rounded-full"></div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[#d48995] font-serif italic text-xl mb-2">The Artist Behind the Brush</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Meet Anjali Gupta
              </h3>
            </div>
            
            <div className="space-y-6 text-zinc-300 font-light leading-relaxed text-lg">
              <p>
                Welcome to GMS Geetanjali Makeup Studio, your one-stop beauty destination offering expert makeup, hair styling, nail art, skincare, and grooming services.
              </p>
              <p>
                Our team of certified makeup artists, hairstylists, nail technicians, and beauticians are dedicated to enhancing your natural beauty with personalized care. We use premium products and the latest techniques to deliver flawless results for every occasion.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-zinc-800">
              <div>
                <h4 className="text-3xl font-serif text-[#e6c1c5] mb-2">2018</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">Established</p>
              </div>
              <div>
                <h4 className="text-3xl font-serif text-[#e6c1c5] mb-2">100%</h4>
                <p className="text-sm text-zinc-500 uppercase tracking-wider">Premium Products</p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/919205358360?text=Hi%20Anjali,%20I'd%20love%20to%20know%20more%20about%20your%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-[#d48995] hover:text-[#e6c1c5] transition-colors font-medium uppercase tracking-widest text-sm group"
              >
                <span>Chat with Anjali</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
