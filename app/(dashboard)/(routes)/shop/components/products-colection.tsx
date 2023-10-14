'use client';

import React, { useState } from 'react';
import ProductsCollectionItem from './product-collection-item';
import { PlusCircle } from 'lucide-react';
import { useFilterModal } from '@/app/hooks/use-filter-modal';
import { cn } from '@/lib/utils';
import { Product } from '@/types';

interface ProductsCollectionProps {
  filter?: boolean;
  products: Product[];
}

function ProductsCollection({ filter, products }: ProductsCollectionProps) {
  const [sortingCriteria, setSortingCriteria] = useState<string>('price'); // Default sorting criteria
  const filterModal = useFilterModal();

  const [items, setItems] = useState<Product[]>(products);

  // Function to handle sorting based on the selected criteria
  const handleSort = (criteria: string) => {
    const sortedItems = [...items];

    sortedItems.sort((a: any, b: any) => {
      if (a[criteria] < b[criteria]) return -1;
      if (a[criteria] > b[criteria]) return 1;
      return 0;
    });

    setItems(sortedItems);
  };

  // Event handler for select change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSortingCriteria(selectedValue);
    handleSort(selectedValue); // Call the sorting function directly when the select option changes
  };

  return (
    <div className="mt-11">
      <div
        className={cn(
          'flex items-center',
          filter ? 'justify-between' : 'justify-end',
        )}
      >
        {filter && (
          <div
            onClick={filterModal.onOpen}
            className="flex font-extrabold hover:text-orange-600 transition cursor-pointer duration-150"
          >
            <PlusCircle /> FILTER
          </div>
        )}

        <div className="space-x-4">
          <label
            htmlFor="sortSelect"
            className="text-xs opacity-50 font-medium"
          >
            SORT BY
          </label>
          <select
            id="sortSelect"
            onChange={handleSelectChange} // Call the event handler on select change
            value={sortingCriteria}
            className="bg-transparent"
          >
            <option value="price">Price</option>
            <option value="label">Label</option>
            <option value="grammge">Grammage</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1100px]">
        {items
          ? items.map((item, index) => (
              <ProductsCollectionItem key={index} {...item} />
            ))
          : 'Something went wrong.'}
      </div>
    </div>
  );
}

export default ProductsCollection;
