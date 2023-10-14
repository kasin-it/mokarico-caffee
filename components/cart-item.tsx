import { Product } from '@/types';
import Image from 'next/image';
import { formatter } from '@/lib/utils';

interface CartItemProps {
  item: Product;
}

function CartItem({ item }: CartItemProps) {
  return (
    <div key={item.id} className={'flex justify-between items-center border-b'}>
      <div className="flex">
        <Image src={item.image} alt={item.label} height={100} width={100} />
        <div>
          <h1 className="font-semibold text-black text-md">{item.label}</h1>
          <p className="text-md text-black">{formatter.format(item.price)}</p>
        </div>
      </div>
    </div>
  );
}
export default CartItem;
