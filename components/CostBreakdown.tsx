
import React from 'react';
import { COSTS } from '../constants';

const CostBreakdown: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-y border-stone-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-sm font-bold uppercase tracking-widest text-emerald-600 mb-12">Cost Transparency</h2>
        
        <div className="bg-stone-50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden border border-stone-200">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="space-y-6">
                {COSTS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center group">
                    <div className="flex flex-col">
                      <span className="text-stone-900 font-bold text-lg">{item.category}</span>
                      <span className="text-stone-400 text-xs">{item.details}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-stone-900 font-mono font-bold text-xl leading-none">
                        ৳{item.price}
                      </span>
                      {item.perPerson && <span className="text-stone-400 text-[10px] uppercase block">per seat</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-between bg-emerald-950 p-10 rounded-3xl text-white">
              <div>
                <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">Total Estimate</h4>
                <div className="space-y-8">
                  <div>
                    <span className="block text-emerald-200/50 text-sm mb-1">Per Individual</span>
                    <span className="text-5xl font-mono font-bold block text-white tracking-tighter">
                      ৳7,150
                    </span>
                  </div>
                  <div className="pt-8 border-t border-white/10">
                    <span className="block text-emerald-200/50 text-sm mb-1">3-Person Group</span>
                    <span className="text-3xl font-mono font-bold block text-emerald-400 tracking-tighter">
                      ৳21,450
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 bg-emerald-900/50 p-4 rounded-xl border border-white/5">
                <p className="text-xs text-emerald-100/60 italic leading-relaxed">
                  Calculated based on shared Jeep capacity (~14 people) and official guide rates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostBreakdown;
