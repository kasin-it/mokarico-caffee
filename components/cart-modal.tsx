"use client";

import * as z from "zod";

import React, { useState } from "react";
import { useCartModal } from "@/app/hooks/use-cart-modal";
import Modal from "./ui/modal";

export const CartModal = () => {
	const cartModal = useCartModal();

	return (
		<Modal isOpen={cartModal.isOpen} onClose={cartModal.onClose}>
			<div className="space-y-4 py-2 pb-4 bg-white">cart</div>
		</Modal>
	);
};
