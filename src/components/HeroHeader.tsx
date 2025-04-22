/* -------------------------------------------
 * HeroHeader.tsx
 * ----------------------------------------- */

export default function HeroHeader() {
  return (
    <header className="relative flex flex-col items-center justify-center h-[60vh] text-center text-white overflow-hidden">
          {/* Cosmic/starfield SVG background */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ backgroundColor: 'black' }}
          >
            {/* Black background rectangle */}
            <rect x="0" y="0" width="100%" height="100%" fill="black" />
            
            {/* Generate 200 small stars with random properties */}
            {Array.from({ length: 200 }).map((_, i) => {
              const size = Math.random() * 1.5 + 0.5;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              const opacity = Math.random() * 0.7 + 0.3;
              // Add color variation for some stars
              const fill = Math.random() > 0.9 
                ? '#b6caff' // Light blue for some stars
                : Math.random() > 0.9 
                  ? '#eed9ff' // Light purple for some stars
                  : 'white'; // Most stars are white
              
              return (
                <circle
                  key={i}
                  cx={`${x}%`}
                  cy={`${y}%`}
                  r={size}
                  fill={fill}
                  opacity={opacity}
                />
              );
            })}
            
            {/* Add 15 larger stars with glow effect */}
            {Array.from({ length: 15 }).map((_, i) => {
              const size = Math.random() * 1 + 1.5;
              const x = Math.random() * 100;
              const y = Math.random() * 100;
              
              return (
                <g key={`glow-${i}`}>
                  {/* Glow effect */}
                  <circle
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r={size * 2}
                    fill="white"
                    opacity="0.05"
                  />
                  {/* Star center */}
                  <circle
                    cx={`${x}%`}
                    cy={`${y}%`}
                    r={size}
                    fill="white"
                    opacity="0.8"
                  />
                </g>
              );
            })}
          </svg>

          <h1 className="relative z-10 text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Lorentzian Geometry
            <br className="hidden md:block" /> Visualized
          </h1>

          <p className="relative z-10 mt-4 max-w-xl text-lg md:text-2xl text-white/90">
            See how speed bends space‑time, slows clocks, and redraws the
            boundaries of cause and effect—one drag of a slider at a time.
          </p>

          <a
            href="#diagram"
            className="relative z-10 mt-8 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-lg font-semibold bg-indigo-500/90 hover:bg-indigo-400 focus-visible:outline focus-visible:ring"
          >
            Start Exploring
            <span aria-hidden="true">→</span>
          </a>
        </header>
  );
}
