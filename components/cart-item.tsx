import { Product } from '@/types';
import Image from 'next/image';
import { formatter } from '@/lib/utils';
import { Edit, Minus, Plus, X } from 'lucide-react';
import useCart from '@/app/hooks/use-cart';
import Link from 'next/link';

interface CartItemProps {
  item: Product;
  count: number;
}

function CartItem({ item, count }: CartItemProps) {
  const cart = useCart();

  return (
    <div key={item.id} className={'flex justify-between items-center border-b'}>
      <div className="flex">
        <Image src={item.image} alt={item.label} height={100} width={100} />
        <div>
          <h1 className="font-semibold text-black text-md">{item.label}</h1>
          <p className="text-md text-black">{formatter.format(item.price)}</p>
          <p>{item.desc}</p>
          <div className="flex space-x-4">
            <button onClick={() => cart.removeItem(item.id)}>
              <Minus />
            </button>
            <p>{count}</p>
            <button
              onClick={() => {
                cart.addItem(item);
              }}
            >
              <Plus />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-3 justify-start">
        <Link
          href={`/shop/${item.category}/${item.id}`}
          className="hover:opacity-70 cursor-pointer"
        >
          <Edit className="h-4 " />
        </Link>
        <X
          className="h-4 hover:opacity-70 cursor-pointer"
          onClick={() => cart.removeAllId(item.id)}
        />
      </div>
    </div>
  );
}
export default CartItem;
