'use client';

import useCart from '@/app/hooks/use-cart';
import { useNavbarProperties } from '@/app/hooks/use-navbar-properties';
import CartItem2 from '@/components/cart-item-2';
import { reduceDuplicatesAndCount } from '@/lib/utils';
import { ChevronLeft, RefreshCw, RefreshCwIcon, Trash } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';

function CartPage() {
  const navbar = useNavbarProperties();
  const cart = useCart();
  const products = reduceDuplicatesAndCount(cart.items);

  useEffect(() => {
    navbar.setisTransparent(false);
  }, []);

  return (
    <main className="flex justify-center items-center mt-24 text-center w-full">
      <div className="max-w-[1170px] w-full">
        <h1 className="text-5xl font-playfair-display py-11">Shopping cart</h1>
        <div className="w-full mb-24">
          <article className="w-[60%] flex flex-col justify-left">
            <div className="grid grid-cols-4 px-5 w-full border-y text-black/50 ms-12">
              <p>Product</p>
              <p>PRICE</p>
              <p>QTANTITY</p>
              <p>SUBTOTAL</p>
            </div>
            <section
              className={
                'text-sm text-gray-600 py-5 pb-10 h-[75%] overflow-y-scroll max-h-[400px]'
              }
            >
              {cart.items.length < 1 ? (
                <p>You have no items in your shopping cart</p>
              ) : (
                <>
                  {Object.values(products).map((product) => (
                    <CartItem2
                      item={product.item}
                      key={product.item.id}
                      count={product.count}
                    />
                  ))}
                </>
              )}
            </section>
            <div className="w-full flex border-t pt-6 justify-between px-5">
              <Link
                href={'/shop'}
                className="flex space-x-3 hover:text-orange-600 cursor-pointer transition duration-200"
              >
                <ChevronLeft /> <p>BACK TO SHOP</p>
              </Link>

              <button
                onClick={() => cart.removeAll()}
                className="flex space-x-3 hover:text-orange-600 cursor-pointer transition duration-200"
              >
                <Trash strokeWidth={'1px'} />
                <p>CLEAR CART</p>
              </button>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
export default CartPage;
