'use client';

import { useSmallMenuModal } from '@/app/hooks/use-small-menu-modal';
import Modal from '../ui/modal';
import { Search, UserCircle, X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import MenuDropdown from '../menu-dropdown';
import Link from 'next/link';
import Separator from '../ui/separator';
import { Input } from 'postcss';
import { useFilterModal } from '@/app/hooks/use-filter-modal';
import Accordion from '../ui/accordion';
import DoubleRangeSlider from '../ui/duble-range-slider';

export const FilterModal = () => {
  const filter = useFilterModal();

  return (
    <Modal isOpen={filter.isOpen} onClose={filter.onClose}>
      <div
        className={
          'left absolute z-50 h-full w-full space-y-4 bg-white px-6 py-10 pb-4 sm:w-[475px]'
        }
      >
        <X
          size={34}
          className={
            'cursor-pointer text-gray-600 opacity-50 hover:text-orange-600 hover:opacity-80'
          }
          onClick={filter.onClose}
        />
        <Accordion
          children={<DoubleRangeSlider />}
          title={'Filter by Price'}
          id={'d'}
        />{' '}
        <Accordion
          children={<div>xD</div>}
          title={'Filter by Content'}
          id={'d'}
        />{' '}
        <Accordion
          children={<div>xD</div>}
          title={'Filter by Quantity'}
          id={'d'}
        />
      </div>
    </Modal>
  );
};
