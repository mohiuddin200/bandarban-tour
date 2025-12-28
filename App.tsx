
import React from 'react';
import Hero from './components/Hero';
import Places from './components/Places';
import Itinerary from './components/Itinerary';
import CostBreakdown from './components/CostBreakdown';
import InfoGrid from './components/InfoGrid';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
    // Main
      <main>
        <Hero />
        <Places />
        <Itinerary />
        <CostBreakdown />
        <InfoGrid />
      </main>

      <footer className="bg-stone-100 py-12 px-4 border-t border-stone-200">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-bold text-xl text-stone-900 mb-4">HillVoyage</div>
          <p className="text-stone-500 text-sm mb-6 max-w-md mx-auto">
            A practical information template for Bangladesh adventure tourism. All costs are estimated based on non-AC transport and community cottages.
          </p>
          <p className="text-stone-400 text-xs">© 2024 Bandarban Hill Tour Information. For reference purposes only.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
