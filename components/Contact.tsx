'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Bridal Makeup',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, service, date, message } = formData;
    const text = `Hi Anjali, I am ${name}. I would like to enquire about ${service}${date ? ` for ${date}` : ''}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919205358360?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#d48995] font-serif italic text-xl mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white mb-6"
          >
            Book Your Appointment
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 max-w-2xl mx-auto text-lg font-light"
          >
            Ready for your transformation? Fill out the form below or reach out directly on WhatsApp.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#c88d94]/20">
                  <MapPin className="w-6 h-6 text-[#d48995]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">Studio Location</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=D-2%2F18%2C+Block+T%2C+Budh+Vihar+Phase+I%2C+Delhi+110085"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#e6c1c5] transition-colors leading-relaxed block"
                  >
                    D-2/18, Block T, Budh Vihar Phase I,<br />
                    Budh Vihar, Delhi 110085
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#c88d94]/20">
                  <Phone className="w-6 h-6 text-[#d48995]" />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-white mb-2">WhatsApp / Phone</h4>
                  <a
                    href="https://wa.me/919205358360"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-400 hover:text-[#e6c1c5] transition-colors block"
                  >
                    +91 9205358360
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center shrink-0 border border-[#c88d94]/20">
                  <Clock className="w-6 h-6 text-[#d48995]" />
                </div>
                <div className="w-full">
                  <h4 className="text-xl font-serif text-white mb-4">Operating Hours</h4>
                  <ul className="space-y-2 text-zinc-400 text-sm w-full max-w-xs">
                    <li className="flex justify-between border-b border-zinc-800 pb-2">
                      <span>Mon, Wed-Sun</span>
                      <span>11:00 AM – 8:00 PM</span>
                    </li>
                    <li className="flex justify-between pt-2 text-[#d48995]">
                      <span>Tuesday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 rounded-2xl overflow-hidden border border-[#c88d94]/20 relative group">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.646580971556!2d77.0620310755032!3d28.700194480414967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d043c7b3c2c5b%3A0x8e8b8b8b8b8b8b8b!2sD-2%2F18%2C%20Block%20T%2C%20Budh%20Vihar%20Phase%20I%2C%20Budh%20Vihar%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1709200000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </motion.div>

          {/* Enquiry Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-[#0a0a0a] border border-zinc-800 rounded-3xl p-8 md:p-12"
          >
            <h4 className="text-2xl font-serif text-white mb-8">Send an Enquiry</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] focus:ring-1 focus:ring-[#d48995] transition-colors"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Service Required</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] focus:ring-1 focus:ring-[#d48995] transition-colors appearance-none"
                  >
                    <option value="Bridal Package">Bridal Package</option>
                    <option value="Bridal Makeup">Bridal Makeup</option>
                    <option value="Party Makeup">Party Makeup</option>
                    <option value="Hair Styling">Hair Styling</option>
                    <option value="Nail Art/Extensions">Nail Art/Extensions</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-zinc-400 mb-2">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] focus:ring-1 focus:ring-[#d48995] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Additional Details</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] focus:ring-1 focus:ring-[#d48995] transition-colors resize-none"
                  placeholder="Tell us more about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
              >
                <span>Enquire on WhatsApp</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
