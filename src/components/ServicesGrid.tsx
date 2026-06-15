import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Roof Repairs",
    description: "Fast, reliable fixes for leaks, missing tiles, and storm damage. We secure your home against the elements.",
    image: "/roof_repair.png"
  },
  {
    title: "New Roof Installations",
    description: "Complete roof replacements and new builds using premium materials tailored to your property's aesthetics.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Flat Roofing",
    description: "Durable, waterproof flat roof systems ideal for extensions, garages, and modern architecture.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Slate & Tiling",
    description: "Expert slate and tile craftsmanship to restore or upgrade the classic look of your roof.",
    image: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?q=80&w=800&auto=format&fit=crop"
  }
];

export default function ServicesGrid() {
  return (
    <section id="services" className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">Our Core Services</h2>
          <div className="w-20 h-1 bg-brand-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Comprehensive roofing solutions delivered with precision and care to protect your home.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-brand-500/10 hover:-translate-y-1">
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.description}</p>
                <div className="flex items-center text-brand-500 font-medium text-sm gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
