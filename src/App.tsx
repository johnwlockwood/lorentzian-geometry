import { Routes, Route, Link } from 'react-router-dom';
import LorentzianGeometry from "./components/LorentzianGeometry";
import About from "./components/About";

const App = () => {
  return (
      <div className="flex flex-col items-center p-7 rounded-2xl min-h-screen">
        <main className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <nav className="bg-gray-800 rounded-md">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <ul className="flex space-x-4">
                  <li>
                    <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/">Learn Lorentzian Geometry</Link>
                  </li>
                  <li>
                    <Link className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" to="/about">About</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<LorentzianGeometry />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
  );
};

export default App;
