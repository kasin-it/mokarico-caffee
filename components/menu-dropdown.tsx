import { useState } from "react";
import Link from "next/link";

type DropdownItem = {
	label: string;
	href: string;
	items?: DropdownItem[];
};

type MenuDropdownProps = {
	dropdownName: string;
	itemsList: DropdownItem[];
	bigLabel?: boolean;
};

function MenuDropdown(props: MenuDropdownProps) {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const { dropdownName, itemsList, bigLabel } = props;

	const toggleDropdown = () => {
		setIsDropdownOpen((prev) => !prev);
	};

	return (
		<>
			<div className="flex justify-between flex-row w-full items-center">
				<Link
					href="#"
					className={`hover:text-orange-600 ${
						bigLabel ? "text-4xl" : "text-2xl"
					}`}
				>
					{dropdownName}
				</Link>
				<button
					type="button"
					className="flex items-center group text-5xl hover:text-orange-600"
					onClick={toggleDropdown}
				>
					{/* Dropdown indicator */}
					{isDropdownOpen ? <span className="text-orange-600">-</span> : "+"}
				</button>
			</div>
			<ul
				className={`mt-2 ms-5 space-y-2 rounded-lg text-2xl transition-all duration-300 ease-in-out ${
					isDropdownOpen ? "max-h-[1000vh] opacity-100" : "max-h-0 opacity-0"
				} overflow-hidden ${isDropdownOpen ? "block" : "hidden"}`}
			>
				{itemsList.map((item, index) => (
					<li key={index}>
						{item.items ? (
							<MenuDropdown
								dropdownName={item.label}
								itemsList={item.items}
								bigLabel={false} // Pass the value of bigLabel to nested dropdown
							/>
						) : (
							<Link href={item.href} className="hover:text-orange-600">
								{item.label}
							</Link>
						)}
					</li>
				))}
			</ul>
		</>
	);
}

export default MenuDropdown;
