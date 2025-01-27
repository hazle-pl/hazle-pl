import React from 'react';
import useVisibilityAnimation from '@/lib/useVisibilityAnimation';

interface ContainerProps {
  children: React.ReactNode;
  xs?: string;
  md?: string;
  xl?: string;
  justify?: string;
  style?: string;
}

const Grid: React.FC<ContainerProps> = ({ children, xs, md, xl, justify, style }) => {
  const classes = [
    xs ? `xs-${xs}` : '',
    md ? `md-${md}` : '',
    xl ? `xl-${xl}` : '',
    justify ? `center` : '',
    style ? `${style}` : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={`grid ${classes}`}>
      {React.Children.map(children, (child) => {
        const { isVisible, elementRef } = useVisibilityAnimation(0.3);
        return (
          <div
            ref={elementRef}
            className={`grid-item ${isVisible ? 'visible' : ''}`}
          >
            <div className="grid-item-content">{child}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Grid;
