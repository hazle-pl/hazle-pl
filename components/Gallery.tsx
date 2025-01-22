import React, { useEffect, useState, useRef } from "react";

type GalleryProps = {
  children: React.ReactNode;
};

const Gallery: React.FC<GalleryProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (isVisible && galleryRef.current) {
      setScrollY(window.scrollY);
    }
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0, // Element musi być w 50% widoczny, aby uzyskać efekt
    });

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      if (galleryRef.current) {
        observer.unobserve(galleryRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  return (
    <div ref={galleryRef} className="gallery">
      {React.Children.map(children, (child, index) => (
        <div
          className={`column column${(index % 4) + 1}`}
          key={index}
          style={{
            transform: isVisible
              ? `translateY(${scrollY * 0.1}px)` // Uniform scroll movement for all columns
              : 'translateY(0)', // No movement if not visible
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default Gallery;
