'use client';

import { useSmallMenuModal } from '@/app/hooks/use-small-menu-modal';
import Modal from '../ui/modal';
import { Search, UserCircle, X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import MenuDropdown from '../menu-dropdown';
import Link from 'next/link';
import Separator from '../ui/separator';
import { Input } from 'postcss';

export const SmallMenuModal = () => {
  const smallMenuModal = useSmallMenuModal();

  const shopItemsList = [
    { label: 'All Coffees', href: '#' },
    { label: 'Rainforest', href: '#' },
    { label: 'Bio', href: '#' },
    { label: 'Ground Coffee', href: '#' },
    {
      label: 'Pods and Capsules',
      href: '#',
      items: [
        { label: 'Capsule Fap', href: '#' },
        { label: 'Capsule Compatibili Nespresso', href: '#' },
        { label: 'Cialde in carta', href: '#' },
      ],
    },
    { label: 'Coffe Grains', href: '#' },
    { label: 'Mono', href: '#' },
    { label: 'La casa del caffe', href: '#' },
    {
      label: 'Merchandising',
      href: '#',
      items: [
        { label: 'Tazzine espresso', href: '#' },
        { label: 'Tazzine capuccino', href: '#' },
        { label: 'Mug', href: '#' },
        { label: 'Bicchieri vetro', href: '#' },
      ],
    },
  ];

  const assistanceItemsList = [
    { label: 'Shipping', href: '#' },
    { label: 'Return', href: '#' },
    { label: 'Payments', href: '#' },
    { label: 'Contacts', href: '#' },
  ];
  const coffeItemsList = [
    { label: 'Blends', href: '#' },
    { label: 'Quality', href: '#' },
    { label: 'Organic', href: '#' },
  ];
  const businessItemsList = [
    { label: 'Company', href: '#' },
    { label: 'Choose Mokarico', href: '#' },
    { label: 'Training Courses', href: '#' },
  ];

  return (
    <Modal isOpen={smallMenuModal.isOpen} onClose={smallMenuModal.onClose}>
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
          onClick={smallMenuModal.onClose}
        />

        <form>
          <label
            htmlFor="search"
            className={
              'sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white'
            }
          >
            Search
          </label>
          <div className={'relative'}>
            <input
              type="search"
              id="search"
              className={'block w-full border p-3 text-sm outline-none ring-0'}
              placeholder="Search"
              required
            />
            <button
              type="submit"
              className={'absolute right-2.5 top-3 text-gray-500/50 '}
            >
              <Search size={22} />
            </button>
          </div>
        </form>

        <div className={'block w-full space-y-2 pb-11'}>
          <Link href={'#'} className={'text-2xl text-orange-600'}>
            Home
          </Link>
          <Separator />
          <MenuDropdown
            dropdownName="Shop"
            itemsList={shopItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
          />
          <Separator />

          <MenuDropdown
            dropdownName="Assistance"
            itemsList={assistanceItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
          />
          <Separator />

          <MenuDropdown
            dropdownName="Coffe"
            itemsList={coffeItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
          />
          <Separator />

          <MenuDropdown
            dropdownName="Business"
            itemsList={businessItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
          />
          <Separator />
        </div>
        <Link href={'#'} className={' flex justify-between text-2xl'}>
          <p>Login</p>
          <UserCircle />
        </Link>
        <Separator />
        {/* IMPLEMENT CHANGING LANG */}
        <Separator />
      </div>
    </Modal>
  );
};
