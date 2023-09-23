"use client";

import { CartModal } from "@/components/modals/cart-modal";
import { MenuModal } from "@/components/modals/menu-modal";
import { SmallMenuModal } from "@/components/modals/small-menu-modal";
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
			<SmallMenuModal />
		</>
	);
};

export default ModalProvider;
