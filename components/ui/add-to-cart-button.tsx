'use client';

import useCart from '@/app/hooks/use-cart';
import { Product } from '@/types';
import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  item: Product;
}

function AddToCartButton({ item }: AddToCartButtonProps) {
  const cart = useCart();

  const handleAddToCart = () => {
    cart.addItem(item);
  };

  return (
    <button
      className="rounded-full border-orange-600 border-[3px] p-0 inset-0 w-[3.7rem] h-[3.7rem] relative flex items-center justify-center group/btn transition overflow-hidden"
      aria-label="add to cart"
      onClick={handleAddToCart}
    >
      <ShoppingCart
        size={23}
        className="z-30 group-hover/btn:text-white"
        strokeWidth=".5px"
      />
      <div className="w-[105%] h-full absolute bg-orange-600 top-14 group-hover/btn:translate-y-[-3.5rem] transition duration-500"></div>
    </button>
  );
}
export default AddToCartButton;
