import { cn } from "@/lib/utils";
import React from "react";

interface AnimatedButtonProps {
	className?: string;
	width?: number;
	height?: number;
	children?: React.ReactNode;
	childrenClassName?: string;
	secoundChildren?: React.ReactNode;
}

function AnimatedButton({
	className,
	width,
	height,
	children,
	childrenClassName,
	secoundChildren,
}: AnimatedButtonProps) {
	return (
		<button
			className={cn(
				"group/btn relative overflow-hidden border-b-[3px] border-b-orange-600 hover:bg-orange-600 duration-700",
				width ? `w-[${width}px]` : "w-[300px]",
				height ? `h-[${height}px]` : "h-[64px]",
				className
			)}
		>
			<div
				className={cn(
					"absolute w-full h-full flex items-center justify-center transition duration-400 top-0 left-0 z-20 font-semibold",
					height
						? `group-hover/btn:translate-y-[-${height}px]`
						: "group-hover/btn:translate-y-[-64px]",
					childrenClassName
				)}
			>
				{children}
			</div>
			<div
				className={cn(
					"absolute w-full h-full bg-red-600 flex items-center justify-center transition duration-300 top-0 left-0 z-19 delay-75",
					height
						? `group-hover/btn:translate-y-[-${2 * height}px] top-[${Math.round(
								2 * height
						  )}px]`
						: "group-hover/btn:translate-y-[-102px] top-[102px]"
				)}
			>
				{secoundChildren}
			</div>
		</button>
	);
}
export default AnimatedButton;
