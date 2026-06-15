import React from 'react';
import { Phone, Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-500/95 backdrop-blur-md border-b border-brand-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="RRoofing Logo" width={56} height={56} className="w-14 h-14 object-contain rounded-md" />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="#services" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Services</Link>
            <Link href="#why-us" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Why Us</Link>
            <Link href="#areas" className="text-slate-300 hover:text-white transition-colors duration-300 font-medium">Areas</Link>
          </nav>

          <div className="hidden md:flex items-center">
            <a 
              href="tel:+447840793493"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-brand-600 px-6 py-2.5 rounded-full font-medium transition-colors duration-300 shadow-lg shadow-black/10"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-slate-300 hover:text-white p-2">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
