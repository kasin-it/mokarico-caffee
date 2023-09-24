import { create } from "zustand";

interface useArrowUpModalProps {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;
}

export const useArrowUpModal = create<useArrowUpModalProps>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
}));
