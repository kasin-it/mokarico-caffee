import { cn } from "@/lib/utils";

interface DefaultButtonProps {
	className?: string;
	width?: string;
	height?: string;
	children?: React.ReactNode;
	onClick?: () => void;
}

function DefaultButton({
	className,
	width,
	height, // Corrected to height
	children,
	onClick = () => {},
}: DefaultButtonProps) {
	return (
		<button
			className={cn(
				"text-center bg-orange-600 hover:opacity-80 text-white font-bold text-sm",
				width ? `w-${width}` : "w-96", // Corrected to width
				height ? `h-${height}` : "h-12", // Corrected to height
				className
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default DefaultButton;
