import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-5/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-6">
              <span className="text-sm font-medium text-slate-300 tracking-wide uppercase">Contact Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">Get Your Free <span className="text-brand-500">Quote</span></h2>
            <p className="text-slate-400 text-lg mb-12 leading-relaxed">
              Ready to start your roofing project? Contact us today for a free, no-obligation consultation and quote from our experts.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <Phone className="text-brand-500" size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Phone</p>
                  <a href="tel:+447840793493" className="text-2xl font-semibold text-white hover:text-brand-500 transition-colors duration-300">
                    +44 7840 793493
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <Mail className="text-brand-500" size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Email</p>
                  <a href="mailto:info@rroofing.co.uk" className="text-2xl font-semibold text-white hover:text-brand-500 transition-colors duration-300">
                    info@rroofing.co.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0 border border-slate-800 group-hover:border-brand-500/50 transition-colors">
                  <MapPin className="text-brand-500" size={24} />
                </div>
                <div className="pt-1">
                  <p className="text-sm text-slate-400 font-medium mb-1 uppercase tracking-wider">Service Areas</p>
                  <p className="text-xl font-semibold text-white">
                    Buckinghamshire, Oxfordshire, <br/>Outer London
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-7/12">
            <div className="bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Full Name</label>
                    <input type="text" id="name" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-300">Phone Number</label>
                    <input type="tel" id="phone" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all" placeholder="07123 456789" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                  <input type="email" id="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-300">Service Needed</label>
                  <select id="service" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all appearance-none">
                    <option value="">Select a service</option>
                    <option value="repairs">Roof Repairs</option>
                    <option value="installation">New Roof Installation</option>
                    <option value="flat">Flat Roofing</option>
                    <option value="slate">Slate & Tiling</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-300">Project Details</label>
                  <textarea id="message" rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500 transition-all resize-none" placeholder="Tell us about your roofing needs..."></textarea>
                </div>
                <button type="submit" className="w-full flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  <span>Send Request</span>
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
