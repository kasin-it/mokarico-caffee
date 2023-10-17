'use client';

import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface GalleryProps {
  image: string;
}

function Gallery({ image }: GalleryProps) {
  return (
    <section className="flex">
      <div className="group/arrows relative"></div>
    </section>
  );
}

export default Gallery;
