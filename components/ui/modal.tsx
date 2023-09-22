import React from "react";
import { cn } from "@/lib/utils";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const onChange = () => {
		onClose();
	};

	return (
		<div
			className={cn(
				isOpen
					? "fixed inset-0 flex items-center justify-center z-50"
					: "hidden"
			)}
			onClick={onChange}
		>
			<div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>

			<div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50">
				<div className="modal-content py-4 text-left px-6">
					<div className="modal-body">{children}</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
