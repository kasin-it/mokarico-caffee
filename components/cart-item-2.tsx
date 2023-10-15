import { Product } from '@/types';
import Image from 'next/image';
import { formatter } from '@/lib/utils';
import { Edit, Minus, Plus, Trash, X } from 'lucide-react';
import useCart from '@/app/hooks/use-cart';
import Link from 'next/link';

interface CartItem2Props {
  item: Product;
  count: number;
}

function CartItem2({ item, count }: CartItem2Props) {
  const cart = useCart();

  return (
    <div key={item.id} className={'flex items-start border-b relative mb-2 h-36'}>
      <div className="flex w-full">
        <Image src={item.image} alt={item.label} height={100} width={100} />
        <div className="grid grid-cols-4 w-full px-0 gap-x-12">
          <h1 className="font-semibold text-black text-lg">{item.label}</h1>
          <p className="text-md text-black">{formatter.format(item.price)}</p>
          <div className="flex space-x-4 justify-center items-start">
            <button onClick={() => cart.removeItem(item.id)}>
              <Minus />
            </button>
            <p className='text-md'>{count}</p>
            <button
              onClick={() => {
                cart.addItem(item);
              }}
            >
              <Plus />
            </button>
          </div>
          <p className="text-md text-black font-bold">
            {formatter.format(item.price * count)}
          </p>
        </div>
      </div>
      <div className="flex justify-start absolute right-5 bottom-5">
        <Link
          href={`/shop/${item.category}/${item.id}`}
          className="hover:opacity-70 cursor-pointer hover:bg-black hover:text-white rounded-lg border border-black/80 p-1"
        >
          <Edit className="h-5" strokeWidth={'1px'} />
        </Link>
        <div className="hover:opacity-70 cursor-pointer hover:bg-black hover:text-white rounded-lg border border-black/80 p-1">
          <Trash
            className=" hover:opacity-70 cursor-pointer"
            onClick={() => cart.removeAllId(item.id)}
            strokeWidth={'1px'}
          />
        </div>
      </div>
    </div>
  );
}
export default CartItem2;
