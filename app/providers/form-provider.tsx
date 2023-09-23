"use client";

import { CartModal } from "@/components/modals/cart-modal";
import { MenuModal } from "@/components/modals/menu-modal";
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

	return <>x</>;
};

export default FormProvider;
