import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Bebas_Neue, Poppins } from 'next/font/google'; // Import Poppins
import Bebas from 'next/font/local'; // Corrected import for local Bebas font
import RobotoMono from 'next/font/local'; // Corrected import for local Roboto Mono font
import localFont from 'next/font/local';

import './globals.css';
import Header from '@/components/Header/Header';
import { FeaturedProductSection } from '@/components/home/FeaturedProductSection/FeaturedProductSection';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: ['400'],
});

const bebas = localFont({
  // src: "../public/fonts/bebas/Bebas-Regular.otf",
  src: [
    {
      path: '../public/fonts/bebas/Bebas-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-bebas',
  style: 'normal',
});

const robotoMono = localFont({
  variable: '--font-roboto-mono',
  src: [
    {
      path: '../public/fonts/Poppins,Roboto_Mono/Roboto_Mono/RobotoMono-VariableFont_wght.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins,Roboto_Mono/Roboto_Mono/RobotoMono-Italic-VariableFont_wght.ttf',
      weight: '400',
      style: 'italic',
    },
  ], // Path to the Roboto Mono font file
  style: 'normal',
});

const poppins = Poppins({
  // ✅ Add Poppins
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Include different weights if needed
});

export const metadata: Metadata = {
  title: 'Bizzy Buddies',
  description: 'Bizzy Buddies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${poppins.variable} ${bebas.variable} 
      ${robotoMono.variable}
       antialiased`}
      >
        <Header />
        {children}
        {/* Featured Product Section */}
        <FeaturedProductSection />
      </body>
    </html>
  );
}
