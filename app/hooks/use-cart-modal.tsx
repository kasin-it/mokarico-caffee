import { create } from "zustand";

interface useCartModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useCartModal = create<useCartModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
