import { create } from 'zustand';

interface useNavbarPropertiesStore {
	isTransparent: boolean;
	isFormUsed: boolean;
	onCloseCurrentForm: () => void;
	setisTransparent: (value: boolean) => void;
	setisFormUsed: (value: boolean) => void;
	setOnCloseCurrentForm: (onClose: () => void) => void;
}

export const useNavbarProperties = create<useNavbarPropertiesStore>((set) => ({
	isTransparent: false,
	isFormUsed: false,
	onCloseCurrentForm: () => {}, // A placeholder function
	setisTransparent: (value: boolean) => set({ isTransparent: value }),
	setisFormUsed: (value: boolean) => set({ isFormUsed: value }),
	setOnCloseCurrentForm: (onClose: () => void) =>
		set({ onCloseCurrentForm: onClose }),
}));
