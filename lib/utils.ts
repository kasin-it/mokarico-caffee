import { Product } from '@/types';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'EUR',
});

export function reduceDuplicatesAndCount(items: Product[]): {
  [key: string]: { item: Product; count: number };
} {
  // Create an object to store item counts
  const itemCounts: { [key: string]: number } = {};

  // Iterate through the items and update counts
  items.forEach((item) => {
    const key = JSON.stringify(item);

    if (itemCounts[key]) {
      // If the item is already in the object, increment the count
      itemCounts[key]++;
    } else {
      // If it's a new item, initialize the count to 1
      itemCounts[key] = 1;
    }
  });

  // Create an object to store items and their respective counts
  const itemsWithCounts: { [key: string]: { item: Product; count: number } } =
    {};

  // Iterate through the object and add items with counts to the new object
  for (const key in itemCounts) {
    const item = JSON.parse(key);
    const count = itemCounts[key];
    itemsWithCounts[key] = { item, count };
  }

  return itemsWithCounts;
}
