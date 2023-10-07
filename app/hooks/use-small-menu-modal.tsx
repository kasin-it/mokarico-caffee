import { create } from 'zustand';

interface useSmallMenuModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useSmallMenuModal = create<useSmallMenuModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
