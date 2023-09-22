"use client";

import { CartModal } from "@/components/cart-modal";
import { MenuModal } from "@/components/menu-modal";
import { useEffect, useState } from "react";

import React from "react";

const ModalProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<MenuModal />
			<CartModal />
		</>
	);
};

export default ModalProvider;
