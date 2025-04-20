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
      <div className="flex flex-col items-center p-7 rounded-2xl min-h-screen">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Lorentzian Geometry Simulator</h1>
          <p className="text-lg">Explore relativistic effects interactively.</p>
        </header>
        <main className="grid grid-cols-2 md:grid-cols-2 gap-8">
          <section>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Velocity Slider</h2>
                <p className="text-gray-600 mb-4">Lets you set a speed as a fraction of light-speed (β = v/c). Dragging it instantly updates every other graphic.</p>
                <VelocitySlider />
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Gamma Readout</h2>
                <p className="text-gray-600 mb-4">Shows the Lorentz factor γ, computed from the slider's speed. Think of γ as the "stretch factor" for time and space.</p>
                <GammaReadout />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Gamma Graph</h2>
                <p className="text-gray-600 mb-4">Charts γ versus β as a curve. A moving marker tracks the slider's position.</p>
                <GammaGraph />
              </div>
            </div>
          </section>
          <section>
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Minkowski Diagram</h2>
                <p className="text-gray-600 mb-4">Plots spacetime (vertical = ct, horizontal = x). The orange world-line tilts with speed, while the 45° light-cone stays fixed.</p>
                <MinkowskiDiagram />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Clock Animation</h2>
                <p className="text-gray-600 mb-4">Two clocks tick side-by-side. The left clock measures coordinate time ("stationary observer"), the right clock measures proper time aboard the moving spaceship.</p>
                <ClockAnimation />
              </div>
            </div>
          </section>
        </main>
      </div>
    </VelocityProvider>
  );
};

export default App;
