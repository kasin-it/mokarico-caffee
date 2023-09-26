import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedButtonProps {
  className?: string;
  width?: number;
  height?: number;
  children?: React.ReactNode;
  childrenClassName?: string;
  secoundChildren?: React.ReactNode;
}

function AnimatedButton({
  className,
  width,
  height,
  children,
  childrenClassName,
  secoundChildren,
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        'group/btn relative overflow-hidden border-b-[2px] border-b-orange-600 duration-700 hover:bg-orange-600',
        width ? `w-[${width}px]` : 'w-full',
        height ? `h-[${height}px]` : 'h-[64px]',
        className,
      )}
    >
      <div
        className={cn(
          'duration-400 absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center font-extrabold transition tracking-widest',
          height
            ? `group-hover/btn:translate-y-[-${height}px]`
            : 'group-hover/btn:translate-y-[-64px]',
          childrenClassName,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'z-19 absolute left-0 top-0 flex h-full w-full items-center justify-center bg-orange-600 transition delay-75 duration-300',
          height
            ? `group-hover/btn:translate-y-[-${2 * height}px] top-[${Math.round(
                2 * height,
              )}px]`
            : 'top-[102px] group-hover/btn:translate-y-[-102px]',
        )}
      >
        {secoundChildren}
      </div>
    </button>
  );
}
export default AnimatedButton;
