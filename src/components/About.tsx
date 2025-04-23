import { Fragment } from "react/jsx-runtime";

export default function About() {
  return (
    <Fragment>
      <section className="prose prose-lg md:prose-xl dark:prose-invert mx-auto px-6 py-12 md:py-20">
        <h1 className="text-4xl font-bold mb-4 text-blue-800">
          Welcome to Exploring Time and Space
        </h1>
        <p className="text-lg mb-6">
          Have you ever wondered what happens when you travel near the speed of
          light? Picture a spaceship zooming through a tunnel at unimaginable
          speeds, its clocks ticking slower than those on Earth. This is the
          mind-bending world of <strong>special relativity</strong>, where time
          and space twist in ways that challenge our everyday intuition.
          Inspired by my high school physics class and the captivating ideas of
          physicist <a
            href="https://muller.lbl.gov"
            title="Visit Richard A. Muller's homepage"
          >
            Richard A. Muller
          </a>, I created this site to make these slippery
          concepts easier to grasp—for myself, for curious minds like my young
          nephew, and for you.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-700">
          Why Relativity Matters
        </h2>
        <p className="text-lg mb-6">
          Special relativity, pioneered by Albert Einstein, reveals that
          everything in the universe moves at the <em>same speed</em> in four
          dimensions—a blend of space and time. As my nephew once explained
          after watching a YouTube video, “When something speeds up in space,
          its time slows down.” An object at rest moves fully through time; a
          photon racing at light speed has no time at all. This dance of{" "}
          <strong>four-velocity</strong> is at the heart of relativity, governed
          by the <strong>Lorentzian geometry</strong> that shapes spacetime
          itself.
        </p>
        <p className="text-lg mb-6">
          But relativity isn’t just equations—it’s a new way to see the
          universe. Through interactive tools, this site brings concepts like{" "}
          <strong>time dilation</strong>, the <strong>Lorentz factor</strong>,
          and <strong>Minkowski diagrams</strong> to life, making them intuitive
          and fun to explore.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-700">
          Dive Into the Tools
        </h2>
        <p className="text-lg mb-4">
          Our interactive features let you play with relativity like a
          physicist:
        </p>
        <ul className="list-disc list-inside text-lg mb-6 space-y-2">
          <li>
            <strong>Speed Slider</strong>: Adjust the speed of a spaceship (as a
            fraction of light speed, β = v/c) and watch how time and space
            respond in real-time.
          </li>
          <li>
            <strong>Gamma Readout & Graph</strong>: See the{" "}
            <strong>Lorentz factor (γ)</strong>, which measures how time
            stretches and space contracts at high speeds, displayed numerically
            and visually.
          </li>
          <li>
            <strong>Minkowski Diagram</strong>: Explore spacetime with a dynamic
            diagram showing the spaceship’s <strong>worldline</strong> in
            orange, flanked by <strong>past and future light cones</strong>.
            Watch how events shift as speed changes.
          </li>
          <li>
            <strong>Clock Comparison</strong>: Compare two clocks—one ticking at{" "}
            <strong>Proper Time</strong> (the spaceship’s time) and another at{" "}
            <strong>Coordinate Time</strong> (Earth’s time)—to witness time
            dilation in action.
          </li>
        </ul>
        <p className="text-lg mb-6">
          These tools are just the start. Inspired by Muller’s{" "}
          <em>Descriptive Physics</em> and his book <em>Now</em>, which reframes
          time as the ever-expanding edge of the universe, we’re building more
          ways to visualize and understand relativity’s magic.
        </p>

        <h2 className="text-2xl font-semibold mb-3 text-blue-700">
          Join the Journey
        </h2>
        <p className="text-lg mb-6">
          Whether you’re a student puzzled by relativity, a lifelong learner
          chasing cosmic insights, or just curious about why time slows for a
          speeding spaceship, this site is for you. Slide the speed, watch the
          diagrams shift, and feel the universe’s rules come alive. Let’s
          unravel the mysteries of <strong>Lorentzian geometry</strong>{" "}
          together—because time and space are more connected than you ever
          imagined.
        </p>
        <p className="text-lg italic">
          Got ideas for new tools or ways to make relativity clearer? Share your
          thoughts, and let’s keep exploring!
        </p>
        <p>
          This site is open source at{" "}
          <a href="https://github.com/johnwlockwood/lorentzian-geometry">
            GitHub
          </a>
        </p>
        <p></p>
      </section>
    </Fragment>
  );
}
