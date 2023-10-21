import useCart from '@/app/hooks/use-cart';
import { useCartModal } from '@/app/hooks/use-cart-modal';
import { useEffect, useState } from 'react';

function CartButton() {
  const cartModal = useCartModal();
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <button onClick={cartModal.onOpen} className={'cursor-pointer'}>
      <div className={'relative'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={'h-7 w-7 transition duration-150 hover:text-orange-500'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <div
          className={
            'absolute left-5 top-4 rounded-full bg-orange-500 px-1 text-xs text-white'
          }
        >
          {cart.items.length}
        </div>
      </div>
    </button>
  );
}
export default CartButton;
