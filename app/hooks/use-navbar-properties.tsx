import { create } from "zustand";

interface useNavbarPropertiesStore {
	isTransparent: boolean;
	isModalOpen: boolean;

	setTransparent: (value: boolean) => void;
	setModalOpen: (value: boolean) => void;
}

export const useNavbarProperties = create<useNavbarPropertiesStore>((set) => ({
	isTransparent: false,
	isModalOpen: false,

	setTransparent: (value: boolean) => set({ isTransparent: value }),
	setModalOpen: (value: boolean) => set({ isModalOpen: value }),
}));
