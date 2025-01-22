import React, { useEffect, useState, useRef } from 'react';
import Grid from './Grid';
import RichText from './RichText';

const InNumbers: React.FC = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const countUp = (target: number, setState: React.Dispatch<React.SetStateAction<number>>) => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < target) {
        current += 1;
        setState(current);
      } else {
        clearInterval(interval);
      }
    }, 50);
  };

  useEffect(() => {

    if (isVisible) {
      countUp(20, setNumber1);
      countUp(1000, setNumber2);
    }
  }, [isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="in-numbers" ref={elementRef}>
      {isVisible && (
        <Grid xs="1" md="3" xl="3">
          <RichText content={`<p class="big">+ ${number1}</p>
            <p>Wykonane projekty</p>`}>
          </RichText>
          <RichText content={`<p class="big">+ ${number2}</p>
            <p>Spędzone godziny</p>`}>
          </RichText>
          <RichText content={`<p class="big">Niezliczone</p>
            <p>Uśmiechy klientów</p>`}>
          </RichText>
        </Grid>
      )}
    </div>
  );
};

export default InNumbers;
