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

export function reduceDuplicatesAndCount(items: Product[]): Product[] {
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

  // Create a new array to store unique items with counts
  const uniqueItems: Product[] = [];

  // Iterate through the object and add unique items with counts to the new array
  for (const key in itemCounts) {
    const item = JSON.parse(key);
    if (itemCounts[key] > 0) {
      item.count = itemCounts[key];
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}
