import { create } from 'zustand';

interface useFilterModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  price: number;
  setPrice: (price: number) => void;

  type: string;
  setType: (type: string) => void;

  quantity: string[];
  setQuantity: (quantity: string[]) => void;
}

export const useFilterModal = create<useFilterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
  price: 25,
  setPrice: (price) => set({ price }),
  type: '',
  setType: (type) => set({ type }),
  quantity: [],
  setQuantity: (quantity) => set({ quantity }),
}));
