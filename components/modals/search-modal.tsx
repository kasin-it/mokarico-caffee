'use client';

import Modal from '../ui/modal';
import { Triangle } from 'lucide-react';
import { useSearchModal } from '@/app/hooks/use-search-modal';
import { cn } from '@/lib/utils';

export const SearchModal = () => {
  const searchModal = useSearchModal();

  return (
    <Modal
      isOpen={searchModal.isOpen}
      onClose={searchModal.onClose}
      overlayClassName={'top-[82px]'}
      className={'top-[82px] z-40'}
    >
      <div
        className={cn(
          'absolute z-40 flex h-[400px] w-full flex-col items-center justify-center space-y-4 bg-white px-12 py-10 pb-4 transition duration-300',
        )}
      >
        <section className={'py-5 pb-10 text-5xl text-gray-600 opacity-50'}>
          What are you looking for?
        </section>
        <form className={'w-full'}>
          <label
            htmlFor="search"
            className={
              'sr-only mb-2 text-lg font-medium text-gray-900 dark:text-white'
            }
          >
            Search
          </label>
          <div className={'flex justify-center'}>
            <div className={'relative w-[60%]'}>
              <input
                type="search"
                id="search"
                className={
                  'block w-full border border-gray-500/70 p-4 text-sm outline-none ring-0'
                }
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className={'absolute right-8 top-5 text-gray-500/50 '}
              >
                <Triangle className={'rotate-90'} size={15} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};
