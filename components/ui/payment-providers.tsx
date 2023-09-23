import Image from "next/image";
import visa from "@/public/svg/visa.svg";
import paypal from "@/public/svg/paypal.svg";
import mastercard from "@/public/svg/mastercard.svg";
import maestro from "@/public/svg/maestro.svg";
import cartaCredito from "@/public/svg/carta-credito.svg";
import bonifico from "@/public/svg/bonifico.svg";
import { cn } from "@/lib/utils";

interface PaymentsProvidersProps {
	className?: string;
	size?: number;
}

function PaymentsProviders({ className, size = 20 }: PaymentsProvidersProps) {
	const providers = [
		{
			svg: visa,
			alt: "visa",
		},
		{
			svg: maestro,
			alt: "mastero",
		},
		{
			svg: mastercard,
			alt: "mastercard",
		},
		{
			svg: cartaCredito,
			alt: "cartaCredito",
		},
		{
			svg: paypal,
			alt: "paypal",
		},
		{
			svg: bonifico,
			alt: "bonifico",
		},
	];
	return (
		<article className={cn("flex space-x-4", className)}>
			{providers.map((provider, index) => (
				<div className="relative w-12 h-12 items-center flex" key={index}>
					<Image
						width={provider.svg.width}
						height={provider.svg.height}
						src={provider.svg}
						alt={provider.alt}
					/>
				</div>
			))}
		</article>
	);
}
export default PaymentsProviders;
