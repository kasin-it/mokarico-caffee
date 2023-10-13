import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { useCookies } from 'react-cookie';

interface Item {
  id: string;
  label: string;
  grammage: number;
  quantity: number;
  price: number;
}

interface CartState {
  items: Item[];
  totalItems: number;
  addItem: (item: Item) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
}

const CART_COOKIE_KEY = 'cartData';

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      totalItems: 0,
      addItem: (item: Item) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);

          if (existingItem) {
            const updatedItems = state.items.map((i) => {
              if (i.id === item.id) {
                return { ...i, quantity: i.quantity + 1 };
              }
              return i;
            });

            const totalItems = updatedItems.reduce(
              (total, item) => total + item.quantity,
              0,
            );
            return { items: updatedItems, totalItems };
          } else {
            const updatedItems = [...state.items, { ...item, quantity: 1 }];
            const totalItems = state.totalItems + 1;
            return { items: updatedItems, totalItems };
          }
        }),
      removeItem: (id: string) =>
        set((state) => {
          const existingItem = state.items.find((i) => i.id === id);

          if (existingItem) {
            const updatedItems = state.items.map((i) => {
              if (i.id === id) {
                if (i.quantity > 1) {
                  return { ...i, quantity: i.quantity - 1 };
                }
              }
              return i;
            });

            const filteredItems = updatedItems.filter((i) => i.quantity > 0);
            const totalItems = filteredItems.reduce(
              (total, item) => total + item.quantity,
              0,
            );
            return { items: filteredItems, totalItems };
          } else {
            return state;
          }
        }),
      clearCart: () => set({ items: [], totalItems: 0 }),
    }),
    {
      name: CART_COOKIE_KEY,
      storage: createJSONStorage(() => {
        const [cookies, setCookie] = useCookies([CART_COOKIE_KEY]);

        return {
          getItem: (name: string) => cookies[name],
          setItem: (name: string, value: any) =>
            setCookie(name, value, {
              path: '/',
              maxAge: 7 * 24 * 60 * 60,
            }), // Expires in 7 days
          removeItem: (name: string) =>
            setCookie(name, '', {
              expires: new Date(0),
              path: '/',
            }),
        };
      }),
    },
  ),
);
