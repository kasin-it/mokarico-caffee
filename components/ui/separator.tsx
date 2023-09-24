import { cn } from '@/lib/utils';

interface SeparatorProps {
  width?: number;
}

function Separator({ width }: SeparatorProps) {
  return (
    <div className={cn('h-[1px] border-b-[1px]', width ? `w-${width}` : '')} />
  );
}
export default Separator;
