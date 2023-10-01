import { ShoppingCart } from 'lucide-react';

interface AddToCartButtonProps {
  onClick: () => void;
  className?: string;
}

function AddToCartButton() {
  return (
    <button className="rounded-full border-orange-600 border-[3px] p-0 inset-0 w-[3.7rem] h-[3.7rem] relative flex items-center justify-center group transition overflow-hidden">
      <ShoppingCart
        size={23}
        className="z-30 group-hover:text-white"
        strokeWidth=".5px"
      />
      <div className="w-full h-full absolute bg-orange-600 top-14 group-hover:translate-y-[-3.5rem] transition duration-500"></div>
    </button>
  );
}
export default AddToCartButton;
