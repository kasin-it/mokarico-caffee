import { cn } from '@/lib/utils';

interface SeparatorProps {
  className?: string;
}

function Separator({ className }: SeparatorProps) {
  return (
    <div className={cn('h-[1px] border-b-[1px]', className)} />
  );
}
export default Separator;
