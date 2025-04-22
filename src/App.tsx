import { VelocityProvider } from "./context/VelocityContext";

import IntuitiveIntro from "./components/IntuitiveIntro";
import HeroHeader from "./components/HeroHeader";
import MainDiagram from "./components/MainDiagram";

const App = () => {
  return (
    <VelocityProvider>
      <div className="flex flex-col items-center p-7 rounded-2xl min-h-screen">
        
        <main className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <HeroHeader /> 
          <IntuitiveIntro />
          <MainDiagram />
        </main>
      </div>
    </VelocityProvider>
  );
};

export default App;
