import React, { useContext } from 'react';
import { VelocityContext } from '../context/VelocityContext';
import { scaleLinear } from '@visx/scale';
import { LinePath } from '@visx/shape';

interface Point {
  beta: number;
  gamma: number;
}

const GammaGraph: React.FC = () => {
  const { beta, gamma } = useContext(VelocityContext);
  const width = 300;
  const height = 200;
  const margin = { top: 20, right: 20, bottom: 30, left: 40 };

  const data: Point[] = [];
  for (let b = 0; b <= 0.99; b += 0.01) {
    data.push({ beta: b, gamma: 1 / Math.sqrt(1 - b * b) });
  }

  const xMax = width - margin.left - margin.right;
  const yMax = height - margin.top - margin.bottom;

  const xScale = scaleLinear({
    domain: [0, 1],
    range: [0, xMax],
  });
  const yScale = scaleLinear({
    domain: [1, Math.max(...data.map(d => d.gamma))],
    range: [yMax, 0],
  });

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <LinePath
          data={data}
          x={d => xScale(d.beta)}
          y={d => yScale(d.gamma)}
          stroke="green"
          strokeWidth={2}
        />
        <circle
          cx={xScale(beta)}
          cy={yScale(gamma)}
          r={4}
          fill="orange"
          aria-label="Current gamma marker"
        />
      </g>
    </svg>
  );
};

export default GammaGraph;
