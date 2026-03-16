'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const serviceCategories = [
  {
    title: 'Makeup Services',
    image: 'https://images.unsplash.com/photo-1512496015851-a1c8d4f05118?auto=format&fit=crop&w=800&q=80',
    items: [
      'Airbrush Makeup',
      'Bridal Makeup',
      'Special Occasion Makeup',
      'Bridal Hair',
    ],
  },
  {
    title: 'Hair Services',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    items: [
      'Styling requirements, product requirements, client serves and more specific, and to the contract to be detailed document.',
      'Hair Treatments',
      'Bridal Hair',
    ],
  },
  {
    title: 'Nail Salon',
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&w=800&q=80',
    items: [
      'Manicure',
      'Pedicure',
      'Acrylic Nails',
      'Nail Art',
      'Nail Extensions',
    ],
  },
  {
    title: 'Beautician Services',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80',
    items: [
      'Product requirements, formal documents normally found to document to prove for services.',
      'Nail Art',
    ],
  },
  {
    title: 'Grooming Services',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80',
    items: [
      'Body Waxing',
      'Eyebrow Threading',
      'Eyelash Extensions',
    ],
  },
  {
    title: 'Bridal Package',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?auto=format&fit=crop&w=800&q=80',
    items: [
      'Comprehensive bridal beauty is Beauty Routine occasion service beauty service.',
      'Eyelash Extensions',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#e6c1c5] mb-6"
          >
            Our Premium Services
          </motion.h2>
        </div>

        {/* Service Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden flex flex-col h-full border border-zinc-800 hover:border-[#c88d94]/50 transition-colors group"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/95"></div>
              
              <div className="relative z-10 p-8 flex flex-col h-full">
                <h3 className="text-3xl font-serif text-[#e6c1c5] mb-6">{category.title}</h3>
                <ul className="space-y-4 mb-8 flex-grow">
                  {category.items.map((item, i) => (
                    <li key={i} className="text-white text-sm font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <a
                    href={`https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20enquire%20about%20your%20${category.title}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
                  >
                    Enquire on WhatsApp
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
