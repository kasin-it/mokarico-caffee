'use client';

import { useCartModal } from '@/app/hooks/use-cart-modal';
import Modal from '../ui/modal';
import { X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import useCart from '@/app/hooks/use-cart';
import { formatter, reduceDuplicatesAndCount } from '@/lib/utils';
import CartItem from '../cart-item';
import Link from 'next/link';

export const CartModal = () => {
  const cartModal = useCartModal();

  const cart = useCart();

  const products = reduceDuplicatesAndCount(cart.items);

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
        <section
          className={'text-sm text-gray-600 py-5 pb-10 h-[55%] overflow-scroll'}
        >
          {cart.items.length < 1 ? (
            <div className="w-full justify-center items-center space-y-5">
              <p className='mb-11'>You have no items in your shopping cart</p>
              <Link href={'/shop'}>
                <DefaultButton
                  className="w-[250px]"
                  onClick={cartModal.onClose}
                >
                  GO TO SHOP
                </DefaultButton>
              </Link>
            </div>
          ) : (
            <>
              {Object.values(products).map((product) => (
                <CartItem
                  item={product.item}
                  key={product.item.id}
                  count={product.count}
                />
              ))}
            </>
          )}
        </section>
        {cart.items.length > 0 ? (
          <article className="flex px-7 flex-col space-y-3">
            <div className="flex justify-between py-5">
              <p className="text-xl ">Total:</p>
              <p className="text-xl">
                {formatter.format(
                  Object.values(products).reduce(
                    (acc, product) => acc + product.item.price * product.count,
                    0,
                  ),
                )}
              </p>
            </div>
            <Link href={'/cart'}>
              <DefaultButton
                className="border-black border-[1px] text-black bg-white w-full hover:bg-black transition hover:text-white"
                onClick={cartModal.onClose}
              >
                GO TO CART
              </DefaultButton>
            </Link>

            <DefaultButton className="bg-green-600 hover:bg-green-700 transition w-full">
              CHECK OUT
            </DefaultButton>
          </article>
        ) : null}
      </div>
    </Modal>
  );
};
