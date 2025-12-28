
import React from 'react';
import { ITINERARY } from '../constants';

const Itinerary: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-stone-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-16">The Trail Path</h2>
        
        <div className="relative">
          {/* Vertical Path Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-stone-200"></div>
          
          <div className="space-y-16">
            {ITINERARY.map((day, idx) => (
              <div key={idx} className="relative pl-16 group">
                {/* Node Point */}
                <div className="absolute left-4 top-2 w-4 h-4 rounded-full bg-white border-4 border-emerald-600 z-10 group-hover:scale-125 transition-transform"></div>
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                  <span className="text-emerald-600 font-mono font-bold tracking-tighter text-sm uppercase">{day.day}</span>
                  <h3 className="text-2xl font-bold text-stone-900">{day.title}</h3>
                </div>
                
                <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all">
                  <ul className="space-y-4">
                    {day.activities.map((act, i) => (
                      <li key={i} className="flex gap-3 text-stone-600 text-base md:text-lg">
                        <span className="text-stone-300 font-mono text-sm mt-1">•</span>
                        {act}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
