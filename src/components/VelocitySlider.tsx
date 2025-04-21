import React, { useContext } from 'react';
import { VelocityContext } from '../context/VelocityContext';

const VelocitySlider = () => {
  const { beta, setBeta } = useContext(VelocityContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBeta(parseFloat(e.target.value));
  };

  return (
    <div className="">
      <label htmlFor="velocity-slider" className="block text-sm font-medium text-gray-700">
        Velocity (β)
      </label>
      <input
        id="velocity-slider"
        type="range"
        min="0"
        max="0.99"
        step="0.01"
        value={beta}
        onChange={handleChange}
        aria-label="Velocity slider controlling β"
        className="w-full"
      />
    </div>
  );
};

export default VelocitySlider;
