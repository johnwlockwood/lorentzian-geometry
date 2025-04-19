import React, { createContext, useState, useMemo } from 'react';

interface VelocityContextType {
  beta: number;
  setBeta: (value: number) => void;
  gamma: number;
}

export const VelocityContext = createContext<VelocityContextType>({
  beta: 0,
  setBeta: () => {},
  gamma: 1,
});

export const VelocityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [beta, setBeta] = useState(0);

  const gamma = useMemo(() => 1 / Math.sqrt(1 - beta * beta), [beta]);

  return (
    <VelocityContext.Provider value={{ beta, setBeta, gamma }}>
      {children}
    </VelocityContext.Provider>
  );
};

export default VelocityContext;
