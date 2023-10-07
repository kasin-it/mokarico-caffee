import React, { useCallback, useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';

interface MultiRangeSliderProps {
  min: number;
  max: number;
  onChange: (value: { min: number; max: number }) => void;
}

const MultiRangeSlider = ({ min, max, onChange }: MultiRangeSliderProps) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef<HTMLInputElement | null>(null);
  const maxValRef = useRef<HTMLInputElement | null>(null);
  const range = useRef<HTMLDivElement | null>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max],
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    if (maxValRef.current) {
      const minPercent = getPercent(minVal);
      const maxPercent = getPercent(+maxValRef.current.value);

      if (range.current) {
        range.current.style.left = `${minPercent}%`;
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    if (minValRef.current) {
      const minPercent = getPercent(+minValRef.current.value);
      const maxPercent = getPercent(maxVal);

      if (range.current) {
        range.current.style.width = `${maxPercent - minPercent}%`;
      }
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minVal, max: maxVal });
  }, [minVal, maxVal, onChange]);

  return (
    <div className="h-24 flex items-center justify-center">
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        ref={minValRef}
        onChange={(event) => {
          const value = Math.min(
            Math.max(+event.target.value, min),
            maxVal, // Ensure minVal doesn't exceed maxVal
          ) as number;
          setMinVal(value);
          event.target.value = value.toString();
        }}
        className={cn(
          'thumb pointer-events-none cursor-grab absolute h-0 w-[200px] outline-none z-[3]',
          {
            'z-[5]': minVal > max - 100,
          },
        )}
      />

      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        ref={maxValRef}
        onChange={(event) => {
          const value = Math.max(
            Math.min(+event.target.value, max),
            minVal, // Ensure maxVal doesn't go below minVal
          ) as number;
          setMaxVal(value);
          event.target.value = value.toString();
        }}
        className="thumb pointer-events-none cursor-grab absolute h-0 w-[200px] outline-none z-[4]"
      />

      <div className="relative w-[200px]">
        <div className="slider__track absolute h-[5px] rounded-[3px] bg-[#ced4da] w-full z-[1]" />
        <div
          ref={range}
          className="slider__range absolute h-[5px] rounded-[3px] bg-[#9fe5e1] z-[2]"
        />
        <div className="slider__left-value absolute text-[#dee2e6] text-xs mt-5 left-1.5">
          {minVal}
        </div>
        <div className="slider__right-value absolute text-[#dee2e6] text-xs mt-5 right-1">
          {maxVal}
        </div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
