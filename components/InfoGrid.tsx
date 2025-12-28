
import React from 'react';
import { TRAVEL_NOTES } from '../constants';

const InfoGrid: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="bg-emerald-100 p-2 rounded-lg text-emerald-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </span>
            Travel Essentials
          </h2>
          <ul className="space-y-4">
            {TRAVEL_NOTES.map((note, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2.5 flex-shrink-0"></div>
                <p className="text-stone-600 leading-relaxed">{note}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="space-y-10">
          <div className="bg-stone-50 p-8 rounded-3xl border border-stone-100">
            <h3 className="text-xl font-bold mb-4 text-stone-800">Guide & Permission Rules</h3>
            <div className="space-y-3 text-stone-600">
              <p>• Registered guide is <strong>mandatory</strong> by law.</p>
              <p>• Army permission required at Ruma and Boga Lake.</p>
              <p>• Guide handles all coordination and permissions.</p>
              <p>• <strong>Must carry original NID + 4 photocopies.</strong></p>
            </div>
          </div>
          
          <div className="bg-emerald-900 p-8 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-4">Why This Tour Works</h3>
            <div className="grid grid-cols-2 gap-4 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13zM7 13a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h.01a1 1 0 100-2H10zm3 0a1 1 0 000 2h.01a1 1 0 100-2H13z" clipRule="evenodd" /></svg>
                Transparent Pricing
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Official Rates
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                Balanced Itinerary
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" /></svg>
                Small Group Friendly
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoGrid;
