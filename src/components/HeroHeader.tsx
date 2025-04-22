/* -------------------------------------------
 * HeroHeader.tsx
 * ----------------------------------------- */

export default function HeroHeader() {
  return (
    <header className="relative flex flex-col items-center justify-center h-[60vh] text-center text-white overflow-hidden">
          {/* Cosmic/starfield SVG background */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover animate-pulse opacity-20"
          >
            {/* tiny star circles here or import an asset */}
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
