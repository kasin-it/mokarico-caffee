import { cn } from '@/lib/utils';
import React from 'react';

interface AnimatedButtonProps {
  className?: string;
  children?: React.ReactNode;
  childrenClassName?: string;
  secoundChildren?: React.ReactNode;
  secoundChildrenClassName?: React.ReactNode;
}

function AnimatedButton({
  className,
  children,
  childrenClassName,
  secoundChildren,
  secoundChildrenClassName,
}: AnimatedButtonProps) {
  return (
    <button
      className={cn(
        'group/btn relative overflow-hidden border-b-[2px] border-b-orange-600 duration-700 hover:bg-orange-600 h-[64px] w-full',
        className,
      )}
      aria-label={'button'}
    >
      <div
        className={cn(
          'duration-400 absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center font-extrabold transition tracking-widest group-hover/btn:translate-y-[-64px]',
          childrenClassName,
        )}
      >
        {children}
      </div>
      <div
        className={cn(
          'z-19 absolute left-0 flex h-full w-full items-center justify-center bg-orange-600 transition delay-75 duration-300 top-[102px] group-hover/btn:translate-y-[-102px]',
          secoundChildrenClassName,
        )}
      >
        {secoundChildren}
      </div>
    </button>
  );
}
export default AnimatedButton;
