import React, { useState, useEffect } from 'react';

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    const checkHover = (e) => {
      const target = e.target;
      const isInteractive = target.tagName === 'BUTTON' || target.tagName === 'A' || target.closest('button') || target.closest('a') || target.classList.contains('cursor-pointer') || target.closest('.cursor-pointer');
      setHovering(!!isInteractive);
    };
    const mouseDown = () => setClicking(true);
    const mouseUp = () => setClicking(false);

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
    };
  }, []);

  return (
    <div className="fixed pointer-events-none z-[9999] hidden md:block" style={{ left: pos.x, top: pos.y }}>
      <svg width="24" height="24" viewBox="0 0 24 24" className={`transition-all duration-150 ease-out origin-top-left ${hovering ? 'scale-110' : 'scale-100'} ${clicking ? 'scale-90' : ''}`} style={{ filter: 'drop-shadow(0 0 2px rgba(165, 252, 41, 0.4))' }}>
        <path d="M0 0 L18 6 L10 10 L6 18 Z" fill={hovering ? "#a5fc29" : "#370139"} stroke="#a5fc29" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default CustomCursor;