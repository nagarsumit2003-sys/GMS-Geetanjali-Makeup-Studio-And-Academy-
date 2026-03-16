import Link from 'next/link';
import { Instagram, Youtube, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[#c88d94]/20 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div>
              <span className="font-serif text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79]">
                GMS
              </span>
              <p className="text-xs tracking-[0.2em] text-zinc-400 uppercase mt-1">
                Geetanjali Makeup Studio
              </p>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Welcome to GMS Geetanjali Makeup Studio, your one-stop beauty destination offering expert makeup, hair styling, nail art, skincare, and grooming services. Our team of certified makeup artists, hairstylists, nail technicians, and beauticians are dedicated to enhancing your natural beauty with personalized care. We use premium products and the latest techniques to deliver flawless results for every occasion.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/gms_geetanjali_makeup"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#e6c1c5] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.youtube.com/@GMS_Geetanjali_Makeup_Studio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#e6c1c5] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
              <a
                href="https://pin.it/47fnOExPp"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-[#e6c1c5] transition-colors flex items-center justify-center w-6 h-6"
                aria-label="Pinterest"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.279 1.148c-.038.154-.127.189-.288.113-1.076-.503-1.748-2.083-1.748-3.351 0-2.727 1.982-5.232 5.719-5.232 2.997 0 5.326 2.134 5.326 4.986 0 2.979-1.877 5.378-4.484 5.378-1.026 0-1.992-.533-2.322-1.163l-.634 2.414c-.229.873-.85 1.964-1.267 2.631 1.006.309 2.071.476 3.172.476 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-[#e6c1c5] uppercase tracking-widest">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-zinc-400">
                <MapPin className="w-5 h-5 text-[#d48995] shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps/search/?api=1&query=D-2%2F18%2C+Block+T%2C+Budh+Vihar+Phase+I%2C+Delhi+110085"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c1c5] transition-colors text-sm leading-relaxed"
                >
                  D-2/18, Block T, Budh Vihar Phase I,<br />
                  Budh Vihar, Delhi 110085
                </a>
              </li>
              <li className="flex items-center space-x-3 text-zinc-400">
                <Phone className="w-5 h-5 text-[#d48995] shrink-0" />
                <a
                  href="https://wa.me/919205358360"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e6c1c5] transition-colors text-sm"
                >
                  +91 9205358360
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-[#e6c1c5] uppercase tracking-widest">Operating Hours</h3>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between">
                <span>Monday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between text-[#d48995]">
                <span>Tuesday</span>
                <span>Closed</span>
              </li>
              <li className="flex justify-between">
                <span>Wednesday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Thursday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>11:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-[#e6c1c5] uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#home" className="text-zinc-400 hover:text-[#e6c1c5] transition-colors">Home</Link>
              </li>
              <li>
                <Link href="#about" className="text-zinc-400 hover:text-[#e6c1c5] transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="#services" className="text-zinc-400 hover:text-[#e6c1c5] transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-zinc-400 hover:text-[#e6c1c5] transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link href="#contact" className="text-zinc-400 hover:text-[#e6c1c5] transition-colors">Contact & Booking</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 text-center flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
          <p>&copy; {new Date().getFullYear()} GMS Geetanjali Makeup Studio. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for elegance.</p>
        </div>
      </div>
    </footer>
  );
}
