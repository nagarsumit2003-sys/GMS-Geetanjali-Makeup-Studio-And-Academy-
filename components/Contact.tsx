'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Bridal Makeup',
    date: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, phone, service, date, message } = formData;
    const text = `Hi Anjali, I am ${name} (${phone}). I would like to enquire about ${service}${date ? ` for ${date}` : ''}. ${message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919205358360?text=${encodedText}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-black relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Visit Our Studio Section */}
        <div className="mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#e6c1c5] mb-12 text-center"
          >
            Visit Our Studio
          </motion.h2>

          {/* Map Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] rounded-3xl overflow-hidden mb-8 border border-zinc-800"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.646580971556!2d77.0620310755032!3d28.700194480414967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d043c7b3c2c5b%3A0x8e8b8b8b8b8b8b8b!2sD-2%2F18%2C%20Block%20T%2C%20Budh%20Vihar%20Phase%20I%2C%20Budh%20Vihar%2C%20Delhi%2C%20110085!5e0!3m2!1sen!2sin!4v1709200000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0"
            ></iframe>
            
            {/* Map Overlay Card */}
            <div className="absolute top-6 left-6 bg-[#111]/90 backdrop-blur-md border border-zinc-700 p-6 rounded-2xl max-w-xs z-10">
              <h3 className="text-xl font-serif text-white mb-4">GMS Studio</h3>
              <p className="text-zinc-300 text-sm mb-4">
                D-2/18, Block T, Budh Vihar Phase I, Delhi 110085
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=D-2%2F18%2C+Block+T%2C+Budh+Vihar+Phase+I%2C+Delhi+110085"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Operating Hours Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full border border-zinc-800 rounded-2xl overflow-hidden"
          >
            <table className="w-full text-left text-sm text-zinc-300">
              <thead className="bg-[#111] text-zinc-400 border-b border-zinc-800">
                <tr>
                  <th className="px-6 py-4 font-medium">Operating</th>
                  <th className="px-6 py-4 font-medium">Morning</th>
                  <th className="px-6 py-4 font-medium">Evening</th>
                  <th className="px-6 py-4 font-medium">Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-black">
                  <td className="px-6 py-4">Tue</td>
                  <td className="px-6 py-4 text-[#d48995]">Closed</td>
                  <td className="px-6 py-4 text-[#d48995]">Closed</td>
                  <td className="px-6 py-4"></td>
                </tr>
                <tr className="bg-[#0a0a0a]">
                  <td className="px-6 py-4">Mon, Wed-Sun</td>
                  <td className="px-6 py-4">11:00 AM</td>
                  <td className="px-6 py-4">8:00 PM</td>
                  <td className="px-6 py-4">9 Hours</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Enquiry Form Section */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-[#e6c1c5] mb-12"
          >
            Enquiry Form
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-400 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors"
                  placeholder="Your Phone Number"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-zinc-400 mb-2">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-zinc-400 mb-2">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors appearance-none"
                >
                  <option value="Bridal Makeup" className="bg-black">Bridal Makeup</option>
                  <option value="Party Makeup" className="bg-black">Party Makeup</option>
                  <option value="Hair Styling" className="bg-black">Hair Styling</option>
                  <option value="Nail Art/Extensions" className="bg-black">Nail Art/Extensions</option>
                  <option value="Photography" className="bg-black">Photography</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-zinc-400 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d48995] transition-colors resize-none"
                  placeholder="Message"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="submit"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#e6c1c5] via-[#d48995] to-[#b76e79] text-black font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Submit & Chat on WhatsApp
              </button>
            </div>
          </motion.form>
        </div>

      </div>
    </section>
  );
}
