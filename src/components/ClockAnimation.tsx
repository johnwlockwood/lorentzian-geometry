import { useContext, useState, useEffect } from 'react';
import { VelocityContext } from '../context/VelocityContext';

const ClockAnimation = () => {
  const { gamma } = useContext(VelocityContext);
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const newAngle = ((elapsed / 6000) * 360) % 360;
      setAngle(newAngle);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  const coordAngle = angle / gamma;

  const clockStyle = { width: 100, height: 100 };

  const renderClock = (angleVal: number, label: string) => (
    <div className="flex flex-col items-center">
      <svg style={clockStyle} viewBox="0 0 100 100" aria-label={label}>
        <circle cx="50" cy="50" r="45" stroke="black" strokeWidth="2" fill="none" />
        <line
          x1="50"
          y1="50"
          x2={50 + 40 * Math.cos((Math.PI / 180) * (angleVal - 90))}
          y2={50 + 40 * Math.sin((Math.PI / 180) * (angleVal - 90))}
          stroke="black"
          strokeWidth="2"
        />
      </svg>
      <span>{label}</span>
    </div>
  );

  return (
    <div className="flex space-x-4">
      {renderClock(angle, 'Proper Time')}
      {renderClock(coordAngle, 'Coordinate Time')}
    </div>
  );
};

export default ClockAnimation;
