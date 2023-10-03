'use client';

import { useState } from 'react';

interface AddToCartFormProps {
  productId: string;
}

function AddToCartForm({ productId }: AddToCartFormProps) {
  const [quantity, setQuantity] = useState(1);

  const onDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const onIncrement = () => {
    setQuantity(quantity + 1);
  };
  return (
    <form>
      <button className="w-64 bg-green-700 opacity-60 text-white font-semibold py-3">
        ADD TO CART
      </button>
      <div className="flex">
        <div
          className="w-12 h-12 flex items-center justify-center bg-green-700 text-whitel"
          onClick={onDecrement}
        >
          -
        </div>
        <span>
          <input
            type="number"
            value={quantity}
            contentEditable
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none]"
          />
        </span>
        <div
          className="w-12 h-12 flex items-center justify-center bg-green-700 text-whitel"
          onClick={onIncrement}
        >
          +
        </div>
      </div>
    </form>
  );
}
export default AddToCartForm;
