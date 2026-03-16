'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md border-b border-[#c88d94]/20 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link href="#home" className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79]">
                GMS
              </span>
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-zinc-400 uppercase">
                Geetanjali Makeup Studio
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-zinc-300 hover:text-[#e6c1c5] transition-colors uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20enquire%20about%20your%20makeup%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-300 hover:text-[#e6c1c5] focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-lg border-b border-[#c88d94]/20"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-zinc-300 hover:text-[#e6c1c5] hover:bg-white/5 rounded-md uppercase tracking-wider text-center"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="https://wa.me/919205358360?text=Hi%20Anjali,%20I%20would%20like%20to%20enquire%20about%20your%20makeup%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm uppercase tracking-wider"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
