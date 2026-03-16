'use client';

import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Priya Sharma',
    text: 'Anjali is truly an artist! She did my bridal makeup and I felt like a princess. The makeup lasted all night and looked flawless in photos.',
    link: 'https://share.google/369TFFWCsS9ebF6Bg',
  },
  {
    id: 2,
    name: 'Sneha Gupta',
    text: 'Best makeup studio in Delhi! The staff is so professional and the products they use are top-notch. Highly recommend for party makeup.',
    link: 'https://share.google/bpCBeoePWFPeWLTxa',
  },
  {
    id: 3,
    name: 'Riya Verma',
    text: 'I got my hair coloring and styling done here. Absolutely loved the result! The team is very skilled and listens to what you want.',
    link: 'https://share.google/lLGH2AVlexozV2WPM',
  },
  {
    id: 4,
    name: 'Kriti Singh',
    text: 'Booked them for my sister\'s wedding. The entire bridal package was worth every penny. Excellent service and very hygienic studio.',
    link: 'https://share.google/EWowsEcKp26AWDqA4',
  },
  {
    id: 5,
    name: 'Neha Arora',
    text: 'Amazing nail art and extensions! The attention to detail is incredible. Will definitely be coming back for more services.',
    link: 'https://share.google/JNJxZWdpL0zrUBsAt',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c88d94]/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c88d94]/20 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d48995] font-serif italic text-xl mb-4"
          >
            Client Love
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Real Experiences
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center items-center space-x-2 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-[#d4af37] fill-[#d4af37]" />
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-light"
          >
            Don&apos;t just take our word for it. Read what our beautiful clients have to say about their transformations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#0a0a0a] border border-zinc-800 hover:border-[#c88d94]/40 rounded-2xl p-8 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-zinc-800 group-hover:text-[#c88d94]/20 transition-colors duration-300" />
              
              <div className="flex space-x-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
                ))}
              </div>
              
              <p className="text-zinc-300 font-light leading-relaxed mb-8 relative z-10">
                &quot;{review.text}&quot;
              </p>
              
              <div className="flex items-center justify-between border-t border-zinc-800 pt-6">
                <h4 className="text-white font-serif text-lg">{review.name}</h4>
                <a
                  href={review.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#d48995] hover:text-[#e6c1c5] text-xs uppercase tracking-widest font-medium transition-colors"
                >
                  View on Google
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
