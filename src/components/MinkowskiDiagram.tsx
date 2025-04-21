import { useContext } from 'react';
import { VelocityContext } from '../context/VelocityContext';
import { Group } from '@visx/group';

const MinkowskiDiagram = () => {
  const { beta } = useContext(VelocityContext);
  const width = 300;
  const height = 300;
  const midX = width / 2;
  const midY = height / 2;
  const lineLength = 120;
  const worldLineX = beta * lineLength;

  return (
    <svg width={width} height={height} className="border">
      <Group>
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
  );
};

export default MinkowskiDiagram;
