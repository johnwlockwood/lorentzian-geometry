import { useContext, useState } from 'react';
import { VelocityContext } from '../context/VelocityContext';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

interface MinkowskiDiagramProps {
  showCones?: boolean;
}

const MinkowskiDiagram = ({ showCones = true }: MinkowskiDiagramProps) => {
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
          {/* Future light cone edges */}
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

          {/* Past light cone edges */}
          <line
            x1={midX}
            y1={midY}
            x2={midX + 100}
            y2={midY + 100}
            stroke="red"
            strokeDasharray="5,5"
          />
          <line
            x1={midX}
            y1={midY}
            x2={midX - 100}
            y2={midY + 100}
            stroke="red"
            strokeDasharray="5,5"
          />

          {/* Past light cone fill */}
          {showCones && (
            <path
              d={`M ${midX} ${midY} L ${midX + 100} ${midY + 100} L ${midX - 100} ${midY + 100} Z`}
              fill="rgba(255,0,0,0.1)"
            />
          )}

          {/* Future light cone fill */}
          {showCones && (
            <path
              d={`M ${midX} ${midY} L ${midX + 100} ${midY - 100} L ${midX - 100} ${midY - 100} Z`}
              fill="rgba(0,0,255,0.1)"
            />
          )}

          {/* Past cone label */}
          {showCones && (
            <Text
              x={midX}
              y={midY + 50}
              width={100}
              textAnchor="middle"
              transform={`rotate(-45, ${midX}, ${midY + 50})`}
              fontSize={10}
              fill="red"
            >
              Past cone
            </Text>
          )}
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
