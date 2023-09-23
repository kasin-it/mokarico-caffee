"use client";

import { useSmallMenuModal } from "@/app/hooks/use-small-menu-modal";
import Modal from "../ui/modal";
import { Search, UserCircle, X } from "lucide-react";
import DefaultButton from "../ui/default-button";
import MenuDropdown from "../menu-dropdown";
import Link from "next/link";
import Separator from "../ui/separator";
import { Input } from "postcss";

export const SmallMenuModal = () => {
	const smallMenuModal = useSmallMenuModal();

	const shopItemsList = [
		{ label: "All Coffees", href: "#" },
		{ label: "Rainforest", href: "#" },
		{ label: "Bio", href: "#" },
		{ label: "Ground Coffee", href: "#" },
		{
			label: "Pods and Capsules",
			href: "#",
			items: [
				{ label: "Capsule Fap", href: "#" },
				{ label: "Capsule Compatibili Nespresso", href: "#" },
				{ label: "Cialde in carta", href: "#" },
			],
		},
		{ label: "Coffe Grains", href: "#" },
		{ label: "Mono", href: "#" },
		{ label: "La casa del caffe", href: "#" },
		{
			label: "Merchandising",
			href: "#",
			items: [
				{ label: "Tazzine espresso", href: "#" },
				{ label: "Tazzine capuccino", href: "#" },
				{ label: "Mug", href: "#" },
				{ label: "Bicchieri vetro", href: "#" },
			],
		},
	];

	const assistanceItemsList = [
		{ label: "Shipping", href: "#" },
		{ label: "Return", href: "#" },
		{ label: "Payments", href: "#" },
		{ label: "Contacts", href: "#" },
	];
	const coffeItemsList = [
		{ label: "Blends", href: "#" },
		{ label: "Quality", href: "#" },
		{ label: "Organic", href: "#" },
	];
	const businessItemsList = [
		{ label: "Company", href: "#" },
		{ label: "Choose Mokarico", href: "#" },
		{ label: "Training Courses", href: "#" },
	];

	return (
		<Modal isOpen={smallMenuModal.isOpen} onClose={smallMenuModal.onClose}>
			<div className="space-y-4 pb-4 bg-white h-full z-50 w-full sm:w-[475px] px-6 py-10 absolute left">
				<X
					size={34}
					className="opacity-50 hover:opacity-80 hover:text-orange-600 cursor-pointer text-gray-600"
					onClick={smallMenuModal.onClose}
				/>

				<form>
					<label
						htmlFor="search"
						className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
					>
						Search
					</label>
					<div className="relative">
						<input
							type="search"
							id="search"
							className="block w-full p-3 text-sm border ring-0 outline-none"
							placeholder="Search"
							required
						/>
						<button
							type="submit"
							className="text-gray-500/50 absolute right-2.5 top-3 "
						>
							<Search size={22} />
						</button>
					</div>
				</form>

				<div className="block w-full space-y-2 pb-11">
					<Link href={"#"} className="text-orange-600 text-2xl">
						Home
					</Link>
					<Separator />
					<MenuDropdown
						dropdownName="Shop"
						itemsList={shopItemsList}
						bigLabel={true}
						sizeBig="2xl"
						sizeSmall="xl"
					/>
					<Separator />

					<MenuDropdown
						dropdownName="Assistance"
						itemsList={assistanceItemsList}
						bigLabel={true}
						sizeBig="2xl"
						sizeSmall="xl"
					/>
					<Separator />

					<MenuDropdown
						dropdownName="Coffe"
						itemsList={coffeItemsList}
						bigLabel={true}
						sizeBig="2xl"
						sizeSmall="xl"
					/>
					<Separator />

					<MenuDropdown
						dropdownName="Business"
						itemsList={businessItemsList}
						bigLabel={true}
						sizeBig="2xl"
						sizeSmall="xl"
					/>
					<Separator />
				</div>
				<Link href={"#"} className=" text-2xl flex justify-between">
					<p>Login</p>
					<UserCircle />
				</Link>
				<Separator />
				{/* IMPLEMENT CHANGING LANG */}
				<Separator />
			</div>
		</Modal>
	);
};
