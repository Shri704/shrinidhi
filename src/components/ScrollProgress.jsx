import React, { useState, useEffect } from 'react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(scroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '3px',
        background: 'transparent',
        zIndex: 9999,
        pointerEvents: 'none'
      }}
    >
      <div 
        style={{
          height: '100%',
          width: '100%',
          background: 'linear-gradient(to right, var(--accent), var(--accent-secondary))',
          transformOrigin: 'left',
          transform: `scaleX(${scrollProgress})`,
          transition: 'transform 0.1s ease'
        }}
      />
    </div>
  );
};

export default ScrollProgress;
