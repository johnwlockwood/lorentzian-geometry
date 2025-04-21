# Lorentzian Geometry Visualization

This project is an interactive educational tool for visualizing concepts from special relativity and Lorentzian geometry.

## Project Purpose

This application helps students and educators understand key concepts in special relativity by providing:

- Interactive visualizations of Lorentz transformations
- Minkowski diagrams showing spacetime coordinates
- Gamma factor calculations and visualizations
- Time dilation demonstrations with animated clocks

## Key Components

- **VelocityContext**: Manages the shared velocity state across components
- **VelocitySlider**: Interactive control for adjusting relative velocity
- **GammaReadout**: Displays the calculated Lorentz factor (gamma)
- **GammaGraph**: Visualizes how gamma changes with velocity
- **MinkowskiDiagram**: Displays spacetime coordinates in different reference frames
- **ClockAnimation**: Demonstrates time dilation effects

## Technical Implementation

Built as a Vite + React application using TypeScript and Tailwind CSS 4.1+. The project leverages:

- React's Context API for state management
- Visx for data visualization components
- MathJax for rendering mathematical equations
- Tailwind CSS for responsive, utility-first styling

## Development

This project follows modern React development practices with a component-based architecture and TypeScript for type safety.
