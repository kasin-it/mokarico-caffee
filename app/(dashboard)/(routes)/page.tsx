"use client";

import { useLoginModal } from "@/app/hooks/use-login-modal";
import { useNavbarProperties } from "@/app/hooks/use-navbar-properties";
import { useSearchModal } from "@/app/hooks/use-search-modal";
import { useArrowUpModal } from "@/app/hooks/use-arrow-up-modal";
import SocialmediaProviders from "@/components/ui/socialmedia-providers";
import AnimatedButton from "@/components/ui/animated-button";
import hero_img from "@/public/img/hero_img.jpg";
import story_img from "@/public/img/story_img.jpg";
import origini_svg from "@/public/svg/origini.svg";
import miscele_svg from "@/public/svg/miscele.svg";
import qualita_svg from "@/public/svg/qualita.svg";
import bioworld_svg from "@/public/svg/bioworld.svg";

import Image from "next/image";
import { useLayoutEffect } from "react";
import { ArrowDownCircleIcon } from "lucide-react";
import Link from "next/link";

function Home() {
	const searchModal = useSearchModal();
	const loginModal = useLoginModal();
	const navbarProperties = useNavbarProperties();
	const arrowUp = useArrowUpModal();

	useLayoutEffect(() => {
		// Function to handle scroll events
		const handleScroll = () => {
			// Check if the current scroll position is at the top
			const isTop = window.scrollY === 0;

			if (isTop && arrowUp.isOpen) {
				arrowUp.onClose();
			} else if (!isTop && !arrowUp.isOpen) {
				arrowUp.onOpen();
			}

			navbarProperties.setisTransparent(
				isTop && !(loginModal.isOpen || searchModal.isOpen)
			);
		};

		// Manually trigger the scroll event once after the component is mounted
		handleScroll();

		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the scroll event listener on unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [searchModal.isOpen, loginModal.isOpen]);

	return (
		<>
			<section className="flex items-center justify-center h-full w-full">
				<div className="hidden md:block w-[50%] h-full absolute left-0"></div>
				<div className="w-full md:w-[50%] h-full absolute right-0 bg-blue-200">
					<video
						className="h-full w-full object-cover opacity-80"
						autoPlay
						loop
						muted
						playsInline
					>
						{/* Use the appropriate URL to the video file */}
						<source src="/video/beans.mp4" type="video/mp4" />
						{/* Add more <source> elements for other video formats if necessary */}
						Your browser does not support the video tag.
					</video>
				</div>

				<div className="absolute left-0">
					<h1>
						The Stylish
						<br /> coffee
					</h1>
					<br />
					<p>
						A cup of coffee lasts only a moment, but it is that moment that
						makes your day better.
					</p>
					<AnimatedButton
						secoundChildren={
							<ArrowDownCircleIcon className="rotate-[-90deg] text-white" />
						}
						className="rotate-90"
						width={140}
						// height={64} NOT working for now
					>
						BROWSE
					</AnimatedButton>
				</div>
				<div className="z-20 flex">
					<Image
						src={hero_img}
						alt="hero"
						width={hero_img.width}
						height={hero_img.height}
					/>
				</div>
				<div className="absolute right-0">
					<SocialmediaProviders className="text-white" />
				</div>
			</section>
			<section className="mt-11 flex justify-center relative">
				<Image
					src={story_img}
					alt="story"
					width={story_img.width / 2}
					height={story_img.height / 2}
				/>
				<article className="flex flex-col">
					<h1 className="text-7xl">
						A century <br /> long story
					</h1>
					<p>
						Where tradition and quality maintain <br /> their values over time.
					</p>
					<section className="grid grid-cols-2">
						{/* <article className="w-[200px]">
						</article>
						<article className="w-[200px]">
						</article>
						<article className="w-[200px]">
						</article>
						<article className="w-[200px]">
					</article> */}
						<Link
							href={"/"}
							className="w-[200px] h-[200px] flex justify-end pb-12 items-center flex-col group"
						>
							<Image
								src={origini_svg}
								alt="origini"
								className="group-hover:opacity-30"
							/>
							<AnimatedButton width={140}>COMPANY</AnimatedButton>
						</Link>
						<Link
							href={"/"}
							className="w-[200px] h-[200px] flex justify-end pb-12 items-center flex-col border-l border-b group"
						>
							<Image
								src={miscele_svg}
								alt="miscele"
								className="group-hover:opacity-30"
							/>
							<AnimatedButton width={140}>BLENDS</AnimatedButton>
						</Link>
						<Link
							href={"/"}
							className="w-[200px] h-[200px] flex justify-end pb-12 items-center flex-col border-r border-t group"
						>
							<Image
								src={qualita_svg}
								alt="qualita"
								className="group-hover:opacity-30"
							/>
							<AnimatedButton width={140}>QUALITY</AnimatedButton>
						</Link>
						<Link
							href={"/"}
							className="w-[200px] h-[200px] flex justify-end pb-12 items-center flex-col group"
						>
							<Image
								src={bioworld_svg}
								alt="bioworld"
								className="group-hover:opacity-30"
							/>
							<AnimatedButton width={140}>BIO WORLD</AnimatedButton>
						</Link>
					</section>
					<span className="absolute right-[80px] rotate-90 top-[370px]">
						1936-2018
					</span>
				</article>
			</section>
			<section>
				
			</section>
		</>
	);
}
export default Home;
