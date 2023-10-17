'use client';

import useCart from '@/app/hooks/use-cart';
import { formatter } from '@/lib/utils';
import { Product } from '@/types';
import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductsCollectionItemProps {
  item: Product;
}

function ProductsCollectionItem({ item }: ProductsCollectionItemProps) {
  const cart = useCart();

  return (
    <section className="group/coffee-item relative overflow-hidden">
      <Link href={`/shop/${item.category}/${item.id}`}>
        <Image src={item.image} width={290} height={290} alt="coffee grains" />
      </Link>
      <p className="text-lg font-bold">{item.label}</p>
      <p className="opacity-50">{formatter.format(item.price)}</p>
      <div className="flex space-x-4">
        <p className="text-sm">
          {' '}
          {item.quantity ? `${item.quantity}pcs` : `${item.grammage}g`}
        </p>
        <p className="text-sm">{item.type}</p>
      </div>
      <Link href={`/shop/${item.category}/${item.id}`}>
        <Search
          size={24}
          className="absolute right-[-30px] bottom-20 z-10 group-hover/coffee-item:translate-x-[-90px] transition duration-700 hover:text-orange-600 cursor-pointer"
        />
      </Link>
      <ShoppingBag
        size={24}
        className="absolute right-[-40px] bottom-20 z-10 group-hover/coffee-item:translate-x-[-50px] transition duration-700 hover:text-orange-600 cursor-pointer"
        onClick={() => {
          cart.addItem(item);
        }}
      />
    </section>
  );
}
export default ProductsCollectionItem;
