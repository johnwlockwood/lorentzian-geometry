/* -------------------------------------------
 * MainDiagram.tsx
 * ----------------------------------------- */
import VelocitySlider from "./VelocitySlider";
import Accordion from "./Accordion";
import GammaReadout from "./GammaReadout";
import MinkowskiDiagram from "./MinkowskiDiagram";
import GammaGraph from "./GammaGraph";
import ClockAnimation from "./ClockAnimation";

export default function MainDiagram() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 gap-8">
      <section id="diagram">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-shadow-md">
              Velocity Slider
            </h2>
            <p className="text-gray-600 mb-4">
              Lets you set a speed as a fraction of light-speed (β = v/c).
              Dragging it instantly updates every other graphic.
            </p>
            <VelocitySlider />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-shadow-md">
              Gamma Readout
            </h2>
            <p className="text-gray-600 mb-4">
              Shows the Lorentz factor γ, computed from the slider's speed.
              Think of γ as the "stretch factor" for time and space.
            </p>
            <GammaReadout />
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-shadow-md">
              Gamma Graph
            </h2>
            <p className="text-gray-600 mb-4">
              Charts γ versus β as a curve. A moving marker tracks the slider's
              position.
            </p>
            <GammaGraph />
          </div>
        </div>
      </section>
      <section>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 text-shadow-md">
            Clock Animation
          </h2>
          <p className="text-gray-600 mb-4">
            Two clocks tick side-by-side. The left clock measures coordinate
            time ("stationary observer"), the right clock measures proper time
            aboard the moving spaceship.
          </p>
          <ClockAnimation />
        </div>
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-shadow-md">
              Minkowski Diagram
            </h2>
            <MinkowskiDiagram />
            <div className="mt-4 mb-4">
              <Accordion title="Minkowski Diagram details">
                <h3 className="text-l font-semibold">What it does</h3>
                <p className="text-gray-600">
                  Plots spacetime (vertical = ct, horizontal = x). The orange
                  world-line tilts with speed, while the 45° light-cone stays
                  fixed.
                </p>
                <h3 className="text-l font-semibold mt-4">Why it matters</h3>
                <p className="text-gray-600">
                  This diagram reveals causality. As the world-line tilts closer
                  to the cone, proper time along it shrinks—visualizing time
                  dilation geometrically.
                </p>
                <h3 className="text-l font-semibold mt-4">
                  Spacetime at a glance:
                </h3>
                <p className="text-gray-600">
                  The vertical axis shows ct (time scaled by the speed of light
                  so that seconds read as light-seconds); the horizontal axis
                  shows x (distance). Putting them in the same units lets
                  geometry tell the story.
                </p>
                <h3 className="text-l font-semibold mt-4">Light cone:</h3>
                <p className="text-gray-600">
                  The 45° diagonals are light rays. They carve spacetime into
                  three regions:
                </p>
                <ul className="list-disc list-inside text-gray-600">
                  <li>
                    Future cone — events you can influence, because signals
                    leaving the origin at ≤c will reach them.
                  </li>
                  <li>
                    Past cone — events that could influence you, because their
                    light can reach the origin.
                  </li>
                  <li>
                    Elsewhere — spacelike-separated events outside the cones; no
                    signal obeying relativity can get there in time, so they're
                    causally disconnected.
                  </li>
                </ul>
                <h3 className="text-l font-semibold mt-4">World-line:</h3>{" "}
                <p className="text-gray-600">
                  The orange line is the spacecraft's path. Its slope = Δct/Δx =
                  c/v. Drag the velocity slider: the line flattens toward 45° as
                  you accelerate, shrinking the proper-time tick marks along
                  it—that's time dilation drawn as shorter path-length through
                  spacetime.
                </p>
                <h3 className="text-l font-semibold mt-4">
                  Invariant hyperbolas:
                </h3>{" "}
                <p className="text-gray-600">
                  Points equidistant in spacetime (same interval s² = (ct)²−x²)
                  live on hyperbolas. Rotate frames (a Lorentz transformation)
                  and those hyperbolas stay put—just like circles in Euclidean
                  space—showing why the interval is “the thing” everyone agrees
                  on.
                </p>
                <h3 className="text-l font-semibold mt-4">
                  Relativity of simultaneity:
                </h3>{" "}
                <p className="text-gray-600">
                  In one frame, “now” is a horizontal slice. Tilt that slice by
                  hyperbolic rotation and you get another observer's “now.” Try
                  toggling the simultaneity grid (button in the corner) to see
                  why observers disagree on what's simultaneous yet never on
                  causal order.
                </p>
                <h3 className="text-l font-semibold mt-4">Causal takeaway:</h3>{" "}
                <p className="text-gray-600">
                  No matter how close your world-line hugs the light cone, it
                  can't cross it. Causality is safeguarded because all Lorentz
                  transformations leave the cone standing; the speed of light is
                  the same in every frame.
                </p>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
