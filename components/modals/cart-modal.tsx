'use client';

import { useCartModal } from '@/app/hooks/use-cart-modal';
import Modal from '../ui/modal';
import { X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import useCart from '@/app/hooks/use-cart';
import { reduceDuplicatesAndCount } from '@/lib/utils';
import Image from 'next/image';
import CartItem from '../cart-item';

export const CartModal = () => {
  const cartModal = useCartModal();

  const cart = useCart();

  const items = reduceDuplicatesAndCount(cart.items);

  return (
    <Modal isOpen={cartModal.isOpen} onClose={cartModal.onClose}>
      <div
        className={
          'space-y-4 pb-4 bg-white h-full z-50 w-full sm:w-[475px] px-12 py-10 absolute right-0'
        }
      >
        <X
          size={34}
          className={
            'opacity-50 hover:opacity-80 hover:text-orange-600 cursor-pointer text-gray-600'
          }
          onClick={cartModal.onClose}
        />
        <section className={'text-sm text-gray-600 py-5 pb-10'}>
          {cart.items.length < 1 ? (
            'You have no items in your shopping cart'
          ) : (
            <>
              {items.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </>
          )}
        </section>
        <DefaultButton className="w-[250px]" onClick={cartModal.onClose}>
          GO TO SHOP
        </DefaultButton>
      </div>
    </Modal>
  );
};
