import React from 'react';
import { VelocityProvider } from './context/VelocityContext';
import VelocitySlider from './components/VelocitySlider';
import GammaReadout from './components/GammaReadout';
import MinkowskiDiagram from './components/MinkowskiDiagram';
import GammaGraph from './components/GammaGraph';
import ClockAnimation from './components/ClockAnimation';

const App: React.FC = () => {
  return (
    <VelocityProvider>
      <div className="min-h-screen p-4">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Lorentzian Geometry Simulator</h1>
          <p className="text-lg">Explore relativistic effects interactively.</p>
        </header>
        <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section>
            <VelocitySlider />
            <GammaReadout />
            <GammaGraph />
          </section>
          <section>
            <MinkowskiDiagram />
            <ClockAnimation />
          </section>
        </main>
      </div>
    </VelocityProvider>
  );
};

export default App;
