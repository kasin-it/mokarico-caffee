'use client';

import React, { MouseEvent as ReactMouseEvent, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, type PanInfo } from 'framer-motion';
import { MoveLeft, MoveRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import coffee from '@/public/img/i_mono_brasile_1000.jpg';
import CarouselItem from './carousel-item';

const START_INDEX = 1;
const DRAG_THRESHOLD = 150;
const FALLBACK_WIDTH = 509;

const CURSOR_SIZE = 80;

const articles = [
  {
    title:
      'Building a fully customisable carousel slider with swipe gestures and navigation using Framer Motion',
    url: 'https://medium.com/@jeyprox/building-a-fully-customisable-carousel-slider-with-swipe-gestures-navigation-and-custom-cursor-4e986ccbd08f',
  },
  {
    title:
      'Building a customisable Input component with NextJS, ReactHookForm, TailwindCSS and TypeScript',
    url: 'https://medium.com/@jeyprox/building-a-fully-customisable-input-component-with-nextjs-reacthookfrom-tailwindcss-and-ts-58874a2e3450',
  },
  {
    title: 'Handling Forms in NextJS with busboy, ReactHookForm and TypeScript',
    url: 'https://medium.com/@jeyprox/handling-forms-in-nextjs-with-busboy-reacthookform-and-ts-3f86c70545b3',
  },
];

export default function SuggestedCarousel() {
  const containerRef = useRef<HTMLUListElement>(null);
  const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(START_INDEX);
  const canScrollPrev = activeSlide > 0;
  const canScrollNext = activeSlide < articles.length - 1;
  const offsetX = useMotionValue(0);
  const animatedX = useSpring(offsetX, {
    damping: 20,
    stiffness: 150,
  });

  const [isDragging, setIsDragging] = useState(false);
  function handleDragSnap(
    _: MouseEvent,
    { offset: { x: dragOffset } }: PanInfo,
  ) {
    //reset drag state
    setIsDragging(false);
    containerRef.current?.removeAttribute('data-dragging');

    //stop drag animation (rest velocity)
    animatedX.stop();

    const currentOffset = offsetX.get();

    //snap back if not dragged far enough or if at the start/end of the list
    if (
      Math.abs(dragOffset) < DRAG_THRESHOLD ||
      (!canScrollPrev && dragOffset > 0) ||
      (!canScrollNext && dragOffset < 0)
    ) {
      animatedX.set(currentOffset);
      return;
    }

    let offsetWidth = 0;
    /*
      - start searching from currently active slide in the direction of the drag
      - check if the drag offset is greater than the width of the current item
      - if it is, add/subtract the width of the next/prev item to the offsetWidth
      - if it isn't, snap to the next/prev item
    */
    for (
      let i = activeSlide;
      dragOffset > 0 ? i >= 0 : i < itemsRef.current.length;
      dragOffset > 0 ? i-- : i++
    ) {
      const item = itemsRef.current[i];
      if (item === null) continue;
      const itemOffset = item.offsetWidth;

      const prevItemWidth =
        itemsRef.current[i - 1]?.offsetWidth ?? FALLBACK_WIDTH;
      const nextItemWidth =
        itemsRef.current[i + 1]?.offsetWidth ?? FALLBACK_WIDTH;

      if (
        (dragOffset > 0 && //dragging left
          dragOffset > offsetWidth + itemOffset && //dragged past item
          i > 1) || //not the first/second item
        (dragOffset < 0 && //dragging right
          dragOffset < offsetWidth + -itemOffset && //dragged past item
          i < itemsRef.current.length - 2) //not the last/second to last item
      ) {
        dragOffset > 0
          ? (offsetWidth += prevItemWidth)
          : (offsetWidth -= nextItemWidth);
        continue;
      }

      if (dragOffset > 0) {
        //prev
        offsetX.set(currentOffset + offsetWidth + prevItemWidth);
        setActiveSlide(i - 1);
      } else {
        //next
        offsetX.set(currentOffset + offsetWidth - nextItemWidth);
        setActiveSlide(i + 1);
      }
      break;
    }
  }

  function scrollPrev() {
    //prevent scrolling past first item
    if (!canScrollPrev) return;

    const nextWidth = itemsRef.current
      .at(activeSlide - 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() + nextWidth);

    setActiveSlide((prev) => prev - 1);
  }
  function scrollNext() {
    // prevent scrolling past last item
    if (!canScrollNext) return;

    const nextWidth = itemsRef.current
      .at(activeSlide + 1)
      ?.getBoundingClientRect().width;
    if (nextWidth === undefined) return;
    offsetX.set(offsetX.get() - nextWidth);

    setActiveSlide((prev) => prev + 1);
  }

  const [hoverType, setHoverType] = useState<'prev' | 'next' | 'click' | null>(
    null,
  );

  function navButtonHover({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLButtonElement, MouseEvent>) {
    const parent = currentTarget.offsetParent;
    if (!parent) return;
    const { left: parentLeft, top: parentTop } = parent.getBoundingClientRect();

    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // mouseX.set(left - parentLeft + offsetFromCenterX / 4);
    // mouseY.set(top - parentTop + offsetFromCenterY / 4);
  }

  function disableDragClick(e: ReactMouseEvent<HTMLAnchorElement>) {
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  return (
    <>
      <div className="group container mx-6">
        <div className="relative overflow-hidden">
          <motion.ul
            ref={containerRef}
            className="flex cursor-none items-start"
            style={{
              x: animatedX,
            }}
            drag="x"
            dragConstraints={{
              left: -(FALLBACK_WIDTH * (articles.length - 1)),
              right: FALLBACK_WIDTH,
            }}
            onMouseMove={({ currentTarget, clientX, clientY }) => {
              const parent = currentTarget.offsetParent;
              if (!parent) return;
              const { left, top } = parent.getBoundingClientRect();
              // mouseX.set(clientX - left - CURSOR_SIZE / 2);
              // mouseY.set(clientY - top - CURSOR_SIZE / 2);
            }}
            onDragStart={() => {
              containerRef.current?.setAttribute('data-dragging', 'true');
              setIsDragging(true);
            }}
            onDragEnd={handleDragSnap}
          >
            {articles.map((item, index) => (
              <motion.li
                key={index}
                layout
                ref={(el) => (itemsRef.current[index] = el)}
                className={cn(
                  'group relative shrink-0 select-none px-3 transition-opacity duration-300',
                  index !== activeSlide && 'opacity-30',
                )}
                transition={{
                  ease: 'easeInOut',
                  duration: 0.4,
                }}
                style={{
                  flexBasis: index === activeSlide ? '40%' : '30%',
                }}
              >
                <CarouselItem
                  desc={item.title}
                  img={coffee}
                  label={item.title}
                  active={index === activeSlide}
                />
              </motion.li>
            ))}
          </motion.ul>

          {/* NAV BUTTONS */}

          <button
            type="button"
            className="group absolute left-[24%] top-0 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            onMouseEnter={() => setHoverType('prev')}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Previous Guide</span>
            <MoveLeft className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>
          <button
            type="button"
            className="group absolute right-[24%] top-0 z-20 grid aspect-square place-content-center rounded-full transition-colors"
            style={{
              width: CURSOR_SIZE,
              height: CURSOR_SIZE,
            }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            onMouseEnter={() => setHoverType('next')}
            onMouseMove={(e) => navButtonHover(e)}
            onMouseLeave={() => setHoverType(null)}
          >
            <span className="sr-only">Next Guide</span>
            <MoveRight className="h-10 w-10 stroke-[1.5] transition-colors group-enabled:group-hover:text-gray-900 group-disabled:opacity-50" />
          </button>
        </div>
      </div>
    </>
  );
}
