/* -------------------------------------------
 * IntuitiveIntro.tsx
 * ----------------------------------------- */

export default function IntuitiveIntro() {
  return (
    <section
      id="intro"
      className="prose prose-lg md:prose-xl dark:prose-invert mx-auto px-6 py-12 md:py-20"
    >
      <h2 className="sr-only">Introduction</h2>

      <p>
        <strong>Why does a moving clock tick slower?</strong> Imagine two
        identical watches: one stays on Earth, the other rockets away at a hefty
        fraction&nbsp;of the speed&nbsp;of&nbsp;light. When they reunite, the
        traveler's watch lags behind—an everyday-sized glimpse of a deeper
        truth: <em>time itself stretches and shrinks depending on how you
        move.</em>
      </p>

      <p>
        This site turns that counter-intuitive idea into something you can{" "}
        <em>see</em> and <em>play&nbsp;with</em>. Drag a velocity slider and
        watch a world-line flatten toward the speed-of-light boundary. Spin up
        side-by-side clocks and feel proper time slow down. Peek at real
        examples—GPS satellites and sub-atomic particles—that&nbsp;rely on
        relativity every day.
      </p>

      <p>
        At the heart of it all lies a simple geometric rule: in the
        four-dimensional fabric of spacetime, the combination{" "}
        <code>(c Δt)² - Δx²</code> stays the same for everyone. Stretch
        space and time in opposite directions and you still trace the same
        “distance” through spacetime—the <em>spacetime&nbsp;interval</em>. That
        invariance builds cones of light that fence off the possible from the
        impossible, protecting causality and defining the cosmic speed limit.
      </p>

      <p>
        Ready to bend your intuition? Start by exploring the <strong>
          Minkowski Diagram
        </strong>{" "}
        below. The orange path is <em>you</em> in a fast ship; the red dashed
        lines are light itself. Everything above the tip of the cone is your
        future, everything below is your past—and everything outside can never
        touch you, no matter how hard you try.
      </p>

      <p>
        Slide, click, and discover: the math of relativity isn't just
        equations—it's a picture.
      </p>
    </section>
  );
}
