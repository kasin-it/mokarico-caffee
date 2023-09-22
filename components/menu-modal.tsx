"use client";

import * as z from "zod";

import React, { useState } from "react";
import { useMenuModal } from "@/app/hooks/use-menu-modal";
import Modal from "./ui/modal";

export const MenuModal = () => {
	const menuModal = useMenuModal();

	return (
		<Modal isOpen={menuModal.isOpen} onClose={menuModal.onClose}>
			<div className="space-y-4 py-2 pb-4 bg-white">menu</div>
		</Modal>
	);
};
