'use client';

import { useState } from 'react';
import img from '@/public/img/aromi-caffe-mokarico.jpg';
import Image from 'next/image';
import { cn } from '@/lib/utils';


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
    <>
      <div
        className="absolute h-full w-full z-20"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      <div className="relative overflow-hidden bg-black h-full opacity-95">
        <Image
          src={img.src}
          alt="Your Image"
          className={cn(
            `transform transition-transform duration-500 scale-110 h-full w-full opacity-80 object-cover`,
          )}
          fill
          loading='eager'
          style={{
            transformOrigin: `${mousePosition.x / 5}px ${
              mousePosition.y / 5
            }px`,
          }}
        />
      </div>
    </>
  );
}

export default ImageZoom;
