import { cn } from '@/lib/utils';

interface DefaultButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

function DefaultButton({
  className,
  children,
  onClick = () => {},
}: DefaultButtonProps) {
  return (
    <button
      className={cn(
        'bg-orange-600 text-center text-sm font-bold text-white hover:opacity-80 w-96 h-12',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default DefaultButton;
