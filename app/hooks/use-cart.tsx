import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { Product } from '@/types';

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: string) => void;
  removeAllId: (id: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
        }

        set({ items: [...get().items, data] });
      },
      removeItem: (id: string) => {
        const items = get().items;
        let removed = false;

        const updatedItems = items.filter((item) => {
          if (!removed && item.id === id) {
            removed = true;
            return false; // Skip the first occurrence
          }
          return true;
        });

        set({ items: updatedItems });
      },
      removeAllId: (id: string) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useCart;
