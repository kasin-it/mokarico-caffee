import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps {
	className?: string;
	width?: number;
	height?: number;
	children?: React.ReactNode;
	secoundChildren?: React.ReactNode;
}

function AnimatedButton({
	className,
	width,
	height,
	children,
	secoundChildren,
}: AnimatedButtonProps) {
	return (
		<button
			className={cn(
				"group relative overflow-hidden", // overflow-hidden
				width ? `w-[${width}px]` : "w-[300px]",
				height ? `h-[${height}px]` : "h-[60px]"
			)}
		>
			<div
				className={cn(
					"absolute w-full h-full flex items-center justify-center transition duration-300 top-0 left-0 z-20",
					height
						? `group-hover:translate-y-[-${2 * height}px]`
						: "group-hover:translate-y-[-60px]"
				)}
			>
				{children}
			</div>
			<div
				className={cn(
					"absolute w-full h-full bg-red-600/30 flex items-center justify-center transition duration-500 left-0",
					height
						? `group-hover:translate-y-[-${height}px] top-[${4 * height}px]`
						: "group-hover:translate-y-[-120px] top-[100px]"
				)}
			/>
			<div
				className={cn(
					"absolute w-full h-full bg-red-600 flex items-center justify-center transition duration-500 top-0 left-0 z-19",
					height
						? `group-hover:translate-y-[-${4 * height}px] top-[${4 * height}px]`
						: "group-hover:translate-y-[-140px] top-[140px]"
				)}
			>
				{secoundChildren}
			</div>
		</button>
	);
}
export default AnimatedButton;
