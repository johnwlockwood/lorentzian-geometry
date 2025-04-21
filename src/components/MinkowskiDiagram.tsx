import { useContext, useState } from 'react';
import { VelocityContext } from '../context/VelocityContext';
import { Group } from '@visx/group';

const MinkowskiDiagram = () => {
  const { beta } = useContext(VelocityContext);
  const [showGrid, setShowGrid] = useState(false);
  const width = 300;
  const height = 300;
  const midX = width / 2;
  const midY = height / 2;
  const lineLength = 120;
  const worldLineX = beta * lineLength;
  const gridSpacing = 20; // each grid line represents 1 light‑second

  return (
    <div>
      <label className="block mb-2">
        <input
          type="checkbox"
          aria-label="Show simultaneity grid"
          checked={showGrid}
          onChange={() => setShowGrid(!showGrid)}
          className="mr-2"
        />
        Show simultaneity grid
      </label>
      <svg width={width} height={height} className="border">
        <Group>
          {showGrid &&
            Array.from({ length: Math.floor(height / gridSpacing) + 1 }).map((_, i) => {
              const y = i * gridSpacing;
              return (
                <line
                  key={`grid-line-${i}`}
                  x1={0}
                  y1={y}
                  x2={width}
                  y2={y}
                  stroke="gray"
                  strokeWidth={0.5}
                  strokeDasharray="4,4"
                />
              );
            })}
          <line x1={midX} y1={0} x2={midX} y2={height} stroke="black" />
          <line x1={0} y1={midY} x2={width} y2={midY} stroke="black" />
          <line
            x1={midX}
            y1={midY}
            x2={midX + 100}
            y2={midY - 100}
            stroke="red"
            strokeDasharray="5,5"
          />
          <line
            x1={midX}
            y1={midY}
            x2={midX - 100}
            y2={midY - 100}
            stroke="red"
            strokeDasharray="5,5"
          />
          <line
            x1={midX}
            y1={midY}
            x2={midX + worldLineX}
            y2={midY - lineLength}
            stroke="orange"
            strokeWidth={2}
          />
        </Group>
      </svg>
    </div>
  );
};

export default MinkowskiDiagram;
