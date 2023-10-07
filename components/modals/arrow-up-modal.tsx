import { useArrowUpModal } from '@/app/hooks/use-arrow-up-modal';
import { cn } from '@/lib/utils';
import { LucideArrowUpRight } from 'lucide-react';

function ArrowUpModal() {
  const arrowModal = useArrowUpModal();

  return (
    <div
      className={cn(
        'duration-400 fixed bottom-10 right-10 z-50 flex h-[50px] w-[50px] rotate-[-90deg] cursor-pointer items-center justify-center rounded-xl border border-black/30 bg-transparent text-black/30 transition duration-500 hover:bg-black hover:text-white',
        arrowModal.isOpen ? '' : 'hidden',
      )}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      role="button"
      tabIndex={0}
      aria-label="Scroll to top"
      title="Scroll to top"
    >
      <LucideArrowUpRight size={20} className={'rotate-45 '} />
    </div>
  );
}
export default ArrowUpModal;
