import { cn } from "@/lib/utils";

interface ModalProps {
	isOpen: boolean;
	onClose?: () => void;
	className?: string;
	overlayClassName?: string;

	children?: React.ReactNode;
	// horizontal?: "start" | "center" | "end";
	// vertical?: "start" | "center" | "end";
}

const Modal: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
	className,
	overlayClassName,
	// horizontal = "center",
	// vertical = "center",
}) => {
	const onClick = () => {
		onClose && onClose();
	};

	return (
		<div
			className={cn(
				"fixed inset-0 flex z-50 h-full w-full",
				isOpen ? "" : "hidden",
				className
				// `items-${horizontal}`,
				// `justify-${vertical}`
			)}
		>
			<div
				className={cn(
					"modal-overlay fixed inset-0 bg-black opacity-50",
					overlayClassName
				)}
				onClick={onClick}
			></div>
			{children}
		</div>
	);
};

export default Modal;
