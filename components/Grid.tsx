import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  xs?: string;
  md?: string;
  xl?: string;
  justify?: string;
}

const Grid: React.FC<ContainerProps> = ({ children, xs, md, xl, justify }) => {
  const classes = [
    xs ? `xs-${xs}` : '',
    md ? `md-${md}` : '',
    xl ? `xl-${xl}` : '',
    justify ? `center` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`grid ${classes}`}>
      {children}
    </div>
  );
};

export default Grid;
