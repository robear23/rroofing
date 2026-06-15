import React from 'react';
import { MapPin } from 'lucide-react';

const AREAS = [
  "High Wycombe", "Beaconsfield", "Aylesbury", "Amersham", "Buckinghamshire", "Oxfordshire", "Outer London"
];

export default function ServiceAreaTicker() {
  return (
    <div className="bg-slate-900 border-y border-slate-800 py-6 overflow-hidden relative" id="areas">
      {/* Edge Gradients for smooth fade out */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-900 to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-900 to-transparent z-10"></div>
      
      <div className="flex w-[200%] animate-[marquee_20s_linear_infinite]">
        <div className="flex w-1/2 justify-around items-center">
          {AREAS.map((area, index) => (
            <div key={`a-${index}`} className="flex items-center gap-2 text-slate-300 font-medium text-lg whitespace-nowrap px-8">
              <MapPin size={20} className="text-brand-500" />
              <span>{area}</span>
            </div>
          ))}
        </div>
        <div className="flex w-1/2 justify-around items-center">
          {AREAS.map((area, index) => (
            <div key={`b-${index}`} className="flex items-center gap-2 text-slate-300 font-medium text-lg whitespace-nowrap px-8">
              <MapPin size={20} className="text-brand-500" />
              <span>{area}</span>
            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}} />
    </div>
  );
}
