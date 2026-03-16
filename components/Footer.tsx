import Link from 'next/link';
import { Instagram, Youtube, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Brand */}
        <div className="mb-8">
          <h2 className="font-serif text-4xl md:text-5xl text-[#e6c1c5] mb-2">
            Anjali Gupta
          </h2>
          <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase">
            Makeup Studio & Academy
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mb-12">
          <Link href="#home" className="text-sm text-zinc-400 hover:text-[#e6c1c5] transition-colors uppercase tracking-wider">
            Home
          </Link>
          <Link href="#services" className="text-sm text-zinc-400 hover:text-[#e6c1c5] transition-colors uppercase tracking-wider">
            Services
          </Link>
          <Link href="#portfolio" className="text-sm text-zinc-400 hover:text-[#e6c1c5] transition-colors uppercase tracking-wider">
            Portfolio
          </Link>
          <Link href="#contact" className="text-sm text-zinc-400 hover:text-[#e6c1c5] transition-colors uppercase tracking-wider">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-6 mb-12">
          <a
            href="https://www.instagram.com/gms_geetanjali_makeup"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-all"
            aria-label="Instagram"
          >
            <Instagram size={18} />
          </a>
          <a
            href="https://www.youtube.com/@GMS_Geetanjali_Makeup_Studio"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-all"
            aria-label="YouTube"
          >
            <Youtube size={18} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-[#e6c1c5] hover:border-[#e6c1c5] transition-all"
            aria-label="Facebook"
          >
            <Facebook size={18} />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Anjali Gupta Makeup Studio. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
