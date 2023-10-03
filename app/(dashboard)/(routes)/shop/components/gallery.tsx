'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  images: string[];
}

function Gallery({ images }: GalleryProps) {
  const [imageIndex, setImageIndex] = useState(0);

  const handlePrevClick = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (imageIndex < images.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  return (
    <section className="flex">
      <div className="w-[200px]">
        {images.map((image, index) => (
          <Image
            src={image}
            alt="image"
            width={200}
            height={200}
            onClick={() => setImageIndex(index)}
            key={index}
            className={cn(imageIndex !== index ? 'opacity-50' : '')}
          />
        ))}
      </div>
      <div className="group/arrows relative">
        <Image src={images[imageIndex]} alt="image" width={600} height={600} />
        <button
          onClick={handlePrevClick}
          className={`absolute left-0 top-1/2 opacity-0 transition ${
            imageIndex === 0
              ? 'group-hover/arrows:opacity-50'
              : 'group-hover/arrows:opacity-100'
          }`}
          disabled={imageIndex === 0}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNextClick}
          className={` absolute right-0 top-1/2 opacity-0 transition ${
            imageIndex === images.length - 1
              ? 'group-hover/arrows:opacity-50'
              : 'group-hover/arrows:opacity-100'
          }`}
          disabled={imageIndex === images.length - 1}
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}

export default Gallery;
