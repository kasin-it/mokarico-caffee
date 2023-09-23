import Image from "next/image";

import { cn } from "@/lib/utils";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

interface SocialmediaProvidersProps {
	className?: string;
	size?: number;
}

function SocialmediaProviders({
	className,
	size = 20,
}: SocialmediaProvidersProps) {
	const providers = [
		{
			svg: <Facebook size={size} />,
		},
		{
			svg: <Linkedin size={size} />,
		},
		{
			svg: <Instagram size={size} />,
		},
		{
			svg: <Youtube size={size} />,
		},
		{
			svg: <Twitter size={size} />,
		},
	];
	return (
		<article className={cn("flex space-x-8", className)}>
			{providers.map((provider, index) => (
				<div className="relative w-7 h-7 items-center flex" key={index}>
					<Link
						href={"/"}
						className="hover:text-orange-600 transition duration-200"
					>
						{provider.svg}
					</Link>
				</div>
			))}
		</article>
	);
}
export default SocialmediaProviders;
