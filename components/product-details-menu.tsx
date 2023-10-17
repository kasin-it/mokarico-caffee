'use client';

import useCart from '@/app/hooks/use-cart';
import { Product } from '@/types';
import { Minus, Plus } from 'lucide-react';
import { useState } from 'react';

interface ProductDetailsMenuProps {
  product: Product;
}

function ProductDetailsMenu({ product }: ProductDetailsMenuProps) {
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();

  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleClick = () => {
    for (let index = 0; index < quantity; index++) {
      cart.addItem(product);
    }
    setQuantity(1);
  };
  return (
    <div className="flex space-x-5">
      <div className="flex">
        <div
          className="w-12 h-12 flex items-center justify-center text-whitel cursor-pointer"
          onClick={onDecrement}
        >
          <Minus />
        </div>
        <span>
          <input
            type="number"
            value={quantity}
            contentEditable
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none] w-16 text-2xl text-center pt-2"
          />
        </span>
        <div
          className="w-12 h-12 flex items-center justify-center  text-whitel cursor-pointer"
          onClick={onIncrement}
        >
          <Plus />
        </div>
      </div>
      <button
        className="w-64 bg-green-700 opacity-60 text-white font-semibold py-3"
        onClick={handleClick}
      >
        ADD TO CART
      </button>
    </div>
  );
}
export default ProductDetailsMenu;
