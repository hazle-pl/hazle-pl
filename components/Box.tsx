import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  background?: string;
}

const Container: React.FC<ContainerProps> = ({ children, padding, background }) => {
  const classes = [
    padding ? `p-${padding}` : '',
    background ? `bg-${background}` : ''
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`box ${classes}`}>
        {children}
    </div>
  );
};

export default Container;
