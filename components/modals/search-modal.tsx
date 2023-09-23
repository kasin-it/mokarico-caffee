"use client";

import Modal from "../ui/modal";
import { Search, Triangle, X } from "lucide-react";
import DefaultButton from "../ui/default-button";
import { useSearchModal } from "@/app/hooks/use-search-modal";

export const SearchModal = () => {
	const searchModal = useSearchModal();

	return (
		<Modal
			isOpen={searchModal.isOpen}
			onClose={searchModal.onClose}
			overlayClassName="top-[82px]"
			className="top-[82px] z-40"
		>
			<div className="space-y-4 pb-4 bg-white h-[400px] z-40 w-full px-12 py-10 absolute flex flex-col items-center justify-center">
				<section className="text-5xl text-gray-600 opacity-50 py-5 pb-10">
					What are you looking for?
				</section>
				<form className="w-full">
					<label
						htmlFor="search"
						className="mb-2 text-lg font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="flex justify-center">
						<div className="relative w-[60%]">
							<input
								type="search"
								id="search"
								className="block w-full p-4 text-sm border border-gray-500/70 ring-0 outline-none"
								placeholder="Search"
								required
							/>
							<button
								type="submit"
								className="text-gray-500/50 absolute right-8 top-5 "
							>
								<Triangle className="rotate-90" size={15} />
							</button>
						</div>
					</div>
				</form>
			</div>
		</Modal>
	);
};
