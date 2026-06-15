import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-500 pt-20 pb-10 border-t border-brand-400/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.png" alt="RRoofing Logo" width={56} height={56} className="w-14 h-14 object-contain rounded-md bg-white p-1" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted local roofing experts providing top-quality repairs, installations, and maintenance across Buckinghamshire, Oxfordshire, and Outer London.
            </p>

          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="/" className="hover:text-brand-500 transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-brand-500 transition-colors">Our Services</Link></li>
              <li><Link href="#why-us" className="hover:text-brand-500 transition-colors">Why Choose Us</Link></li>
              <li><Link href="#contact" className="hover:text-brand-500 transition-colors">Get a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Our Services</h3>
            <ul className="space-y-4 text-slate-400">
              <li><Link href="#services" className="hover:text-brand-500 transition-colors">Roof Repairs</Link></li>
              <li><Link href="#services" className="hover:text-brand-500 transition-colors">New Installations</Link></li>
              <li><Link href="#services" className="hover:text-brand-500 transition-colors">Flat Roofing</Link></li>
              <li><Link href="#services" className="hover:text-brand-500 transition-colors">Slate & Tiling</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h3>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-500 mt-1 flex-shrink-0" />
                <span>Buckinghamshire, Oxfordshire, <br/>Outer London</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-500 flex-shrink-0" />
                <a href="tel:+447840793493" className="hover:text-brand-500 transition-colors">+44 7840 793493</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-500 flex-shrink-0" />
                <a href="mailto:info@rroofing.co.uk" className="hover:text-brand-500 transition-colors">info@rroofing.co.uk</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-400/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} RRoofing. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
