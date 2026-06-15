import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <Image
          src="/roofing_hero.png"
          alt="Modern residential roof"
          fill
          className="object-cover opacity-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/30 to-transparent md:w-2/3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Trusted Roofing Experts</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Local, Trusted and Reliable <span className="text-brand-500">Roofing Services</span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Serving Buckinghamshire, Oxfordshire, and Outer London with premium craftsmanship and guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="inline-flex justify-center items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/25"
            >
              Get a Free Quote
              <ArrowRight size={20} />
            </a>
            <a 
              href="#services" 
              className="inline-flex justify-center items-center gap-2 bg-slate-800/80 hover:bg-slate-700 backdrop-blur-sm border border-slate-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
