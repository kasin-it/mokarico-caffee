import { create } from 'zustand';

interface useMenuModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useMenuModal = create<useMenuModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
