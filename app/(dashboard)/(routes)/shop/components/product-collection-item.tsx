'use client';

import { formatter } from '@/lib/utils';
import { Product } from '@/types';
import { Search, ShoppingBag } from 'lucide-react';
import Image from 'next/image';

function ProductsCollectionItem({
  image,
  label,
  price,
  grammage,
  type,
}: Product) {
  return (
    <section className="group/coffee-item relative overflow-hidden">
      <Image src={image} width={290} height={290} alt="coffee grains" />
      <p className="text-lg font-bold">{label}</p>
      <p className="opacity-50">{formatter.format(price)}</p>
      <div className="flex space-x-4">
        <p className="text-sm">{grammage}</p>
        <p className="text-sm">{type}</p>
      </div>
      <Search
        size={24}
        className="absolute right-[-30px] bottom-20 z-10 group-hover/coffee-item:translate-x-[-90px] transition duration-700 hover:text-orange-600 cursor-pointer"
        onClick={() => {}}
      />
      <ShoppingBag
        size={24}
        className="absolute right-[-40px] bottom-20 z-10 group-hover/coffee-item:translate-x-[-50px] transition duration-700 hover:text-orange-600 cursor-pointer"
        onClick={() => {}}
      />
    </section>
  );
}
export default ProductsCollectionItem;
