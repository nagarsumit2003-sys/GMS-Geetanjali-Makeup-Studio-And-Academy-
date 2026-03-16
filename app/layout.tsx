import type {Metadata} from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import { Analytics } from '@vercel/analytics/next';
const playfair = Playfair_Display({
subsets: ['latin'],
variable: '--font-serif',
});
const inter = Inter({
subsets: ['latin'],
variable: '--font-sans',
});
export const metadata: Metadata = {
title: 'GMS Geetanjali Makeup Studio | Delhi',
description: 'Welcome to GMS Geetanjali Makeup Studio, your one-stop beauty destination offering expert makeup, hair styling, nail art, skincare, and grooming services in Delhi.',
};
export default function RootLayout({children}: {children: React.ReactNode}) {
return (
<html lang="en" className={${playfair.variable} ${inter.variable} scroll-smooth}>



{children}






);
}
