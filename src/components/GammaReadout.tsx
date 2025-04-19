import React, { useContext } from 'react';
import { VelocityContext } from '../context/VelocityContext';

const GammaReadout: React.FC = () => {
  const { gamma } = useContext(VelocityContext);
  return (
    <div>
      <p className="text-lg">γ = {gamma.toFixed(2)}</p>
    </div>
  );
};

export default GammaReadout;
