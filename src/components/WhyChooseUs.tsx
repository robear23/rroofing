import React from 'react';
import { ShieldCheck, Clock, Award, Hammer } from 'lucide-react';
import Image from 'next/image';

const features = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete peace of mind for every project." },
  { icon: Clock, title: "Reliable & Punctual", desc: "We respect your time and complete work on schedule." },
  { icon: Award, title: "Quality Materials", desc: "Only the best materials for long-lasting durability." },
  { icon: Hammer, title: "Expert Craftsmanship", desc: "Years of experience in all types of roofing." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-800 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 rounded-full bg-brand-500/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-6">
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Why Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Built on <span className="text-brand-500">Trust</span> & Excellence</h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              We pride ourselves on delivering top-tier roofing services that stand the test of time. Our dedication to local communities ensures every job is personal, trusted, and reliable.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-400/40 flex items-center justify-center text-brand-400">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl shadow-black/50">
              <Image
                src="/roofing_craftsmanship.png"
                alt="Roofing craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
