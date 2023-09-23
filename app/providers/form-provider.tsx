"use client";

import { CartModal } from "@/components/modals/cart-modal";
import { LoginModal } from "@/components/modals/login-modal";
import { MenuModal } from "@/components/modals/menu-modal";
import { SearchModal } from "@/components/modals/search-modal";
import { useEffect, useState } from "react";

import React from "react";

const FormProvider = () => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

	return (
		<>
			<SearchModal />
			<LoginModal />
		</>
	);
};

export default FormProvider;
