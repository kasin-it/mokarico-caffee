'use client';

import { useEffect } from 'react';
import { useArrowUpModal } from '../hooks/use-arrow-up-modal';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  const arrowUp = useArrowUpModal();

  useEffect(() => {
    const handleArrowVisibility = () => {
      const screanHeight = window.scrollY;
      const isTop = screanHeight === 0;

      if (isTop) {
        arrowUp.onClose();
      } else {
        arrowUp.onOpen();
      }
    };

    // Attach the scroll event listener for arrow visibility
    window.addEventListener('scroll', handleArrowVisibility);

    // Cleanup the scroll event listener for arrow visibility on unmount
    return () => {
      window.removeEventListener('scroll', handleArrowVisibility);
    };
  }, [arrowUp]);

  return <>{children}</>;
}
export default DashboardLayout;
