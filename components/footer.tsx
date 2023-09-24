import miscele_svg from "@/public/svg/miscele.svg";
import Image from "next/image";
import Separator from "./ui/separator";
import Link from "next/link";
import { Headphones } from "lucide-react";

function Footer() {
	return (
		<footer>
			<Separator />
			<section className="py-6">
				<h3>Certifications are an appropriate reward for our quality </h3>
				<article className="flex space-x-5 px-11">
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>{" "}
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>{" "}
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>
				</article>{" "}
				<article className="flex space-x-5 px-11">
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>{" "}
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>{" "}
					<Image
						src={miscele_svg}
						alt="miscele"
						height={miscele_svg.height}
						width={miscele_svg.width}
					/>
				</article>
			</section>
			<Separator />
			<section className="grid grid-cols-1 md:grid-cols-2">
				<article>
					<form>form</form>
					<article className="grid grid-cols-1 md:grid-cols-4">
						<ul>
							<li>Shop Online</li>
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>
						</ul>{" "}
						<ul>
							<li>Shop Online</li>
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>
						</ul>{" "}
						<ul>
							<li>Shop Online</li>
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>
						</ul>{" "}
						<ul>
							<li>Shop Online</li>
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>{" "}
							<li>
								<Link href={"/"}>Home shop</Link>
							</li>
						</ul>
					</article>
				</article>
			</section>
			<Separator />
			<article>
				<Headphones />
				We are available to answer any query by phone from Mon - Fri 9:00 -12:30
				and 14:00 - 17:30 at 055 849 5085 or email at info@mokarico.com
			</article>
			<Separator />
            <article>

            </article>
		</footer>
	);
}
export default Footer;
