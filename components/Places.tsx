
import React from 'react';
import { PLACES } from '../constants';

const Places: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-12">Trail Milestones</h2>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {PLACES.map((place, idx) => (
            <div key={idx} className="group border-b border-stone-100 pb-6 last:border-0">
              <div className="flex items-start gap-4">
                <span className="text-stone-300 font-mono text-lg mt-0.5 group-hover:text-emerald-600 transition-colors">0{idx + 1}</span>
                <div>
                  <h3 className="text-xl font-bold text-stone-900 mb-1">{place.name}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{place.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
