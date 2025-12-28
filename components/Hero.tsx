
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-emerald-950 pt-32 pb-20 px-6 text-white border-b border-emerald-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 leading-none">
          Bandarban <span className="text-emerald-400">Peak</span> Trail
        </h1>
        <p className="text-xl md:text-2xl text-emerald-100/70 font-light max-w-xl leading-relaxed">
          Official 3-night, 4-day travel guide to Boga Lake and Keokradong.
        </p>
        
        <div className="mt-16 flex flex-wrap gap-8">
          <div className="flex flex-col">
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-1">Cost Range</span>
            <span className="text-2xl font-mono">৳6.2k — 7.1k</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-8">
            <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-1">Best Time</span>
            <span className="text-2xl">Nov — Feb</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
