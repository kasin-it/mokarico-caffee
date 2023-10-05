'use client';

import React, { useState, useEffect } from 'react';
import ProductsCollectionItem from './product-collection-item';
import coffee from '@/public/img/i_mono_brasile_1000.jpg';

interface Product {
  img: string;
  label: string;
  price: number;
  grammage: string;
  type: string;
}

function ProductsCollection() {
  const [sortingCriteria, setSortingCriteria] = useState<string>('price'); // Default sorting criteria
  const [items, setItems] = useState<Product[]>([
    {
      img: coffee.src,
      label: 'brasiliana',
      price: 3.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
    {
      img: coffee.src,
      label: 'arasiliana',
      price: 1.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
    {
      img: coffee.src,
      label: 'crasiliana',
      price: 2.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
    {
      img: coffee.src,
      label: 'brasiliana',
      price: 18.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
    {
      img: coffee.src,
      label: 'brasiliana',
      price: 10.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
    {
      img: coffee.src,
      label: 'arasiliana',
      price: 5.5,
      grammage: '500G',
      type: 'ROASTED IN BEANS',
    },
  ]);

  useEffect(() => {
    // Function to handle sorting based on the selected criteria
    const handleSort = () => {
      const sortedItems = [...items];

      sortedItems.sort((a, b) => {
        if (a[sortingCriteria] < b[sortingCriteria]) return -1;
        if (a[sortingCriteria] > b[sortingCriteria]) return 1;
        return 0;
      });

      setItems(sortedItems);
    };

    handleSort(); // Call the sorting function initially

    // Clean up the effect
    return () => {
      // You can perform cleanup here if needed
    };
  }, [sortingCriteria, items]); // Listen for changes in sortingCriteria and items

  return (
    <div className='mt-11'>
      <div className="flex justify-end space-x-4 items-center">
        <label htmlFor="sortSelect" className='text-xs opacity-50 font-medium'>SORT BY</label>
        <select
          id="sortSelect"
          onChange={(e) => setSortingCriteria(e.target.value)}
          value={sortingCriteria}
          className='bg-transparent'
        >
          <option value="price">Price</option>
          <option value="label">Label</option>
          <option value="grammage">Grammage</option>
          <option value="type">Type</option>
        </select>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-[1100px]">
        {items.map((item, index) => (
          <ProductsCollectionItem
            key={index}
            img={item.img}
            label={item.label}
            price={item.price}
            grammage={item.grammage}
            type={item.type}
            className={''}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductsCollection;
