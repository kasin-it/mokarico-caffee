'use client';

import { useSmallMenuModal } from '@/app/hooks/use-small-menu-modal';
import Modal from '../ui/modal';
import { Search, UserCircle, X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import MenuDropdown from '../menu-dropdown';
import Link from 'next/link';
import Separator from '../ui/separator';
import { Input } from 'postcss';
import {
  assistanceItemsList,
  businessItemsList,
  coffeItemsList,
  shopItemsList,
} from '@/lib/routes';

export const SmallMenuModal = () => {
  const smallMenuModal = useSmallMenuModal();

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
          <Link
            href={'/'}
            className={'text-2xl text-orange-600'}
            onClick={smallMenuModal.onClose}
          >
            Home
          </Link>
          <Separator />
          <MenuDropdown
            dropdownName="Shop"
            itemsList={shopItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
            href="/shop"
            onClose={smallMenuModal.onClose}
          />
          <Separator />

          <MenuDropdown
            dropdownName="Assistance"
            itemsList={assistanceItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
            href="/assistance"
            onClose={smallMenuModal.onClose}
          />
          <Separator />

          <MenuDropdown
            dropdownName="Coffe"
            itemsList={coffeItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
            href="/coffee"
            onClose={smallMenuModal.onClose}
          />
          <Separator />

          <MenuDropdown
            dropdownName="Business"
            itemsList={businessItemsList}
            bigLabel={true}
            sizeBig="2xl"
            sizeSmall="xl"
            href="/business"
            onClose={smallMenuModal.onClose}
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
