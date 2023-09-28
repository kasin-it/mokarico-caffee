'use client';

import { useState } from 'react';
import img from '@/public/img/hero_img.jpg';

function ImageZoom() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Function to handle mouse enter and leave events
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Function to track mouse movement
  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <img
        src={img.src}
        alt="Your Image"
        className={`transform transition-transform ${
          isHovered ? 'scale-150' : 'scale-100'
        }`}
        style={{
          transformOrigin: `${mousePosition.x}px ${mousePosition.y}px`,
        }}
      />
    </div>
  );
}

export default ImageZoom;
