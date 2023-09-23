"use client";

import { useLoginModal } from "@/app/hooks/use-login-modal";
import { useNavbarProperties } from "@/app/hooks/use-navbar-properties";
import { useSearchModal } from "@/app/hooks/use-search-modal";
import Image from "next/image";
import { useLayoutEffect } from "react";
import hero_img from "@/public/img/hero_img.jpg";
import SocialmediaProviders from "@/components/ui/socialmedia-providers";
import AnimatedButton from "@/components/ui/animated-button";

function Home() {
	const searchModal = useSearchModal();
	const loginModal = useLoginModal();
	const navbarProperties = useNavbarProperties();

	useLayoutEffect(() => {
		// Function to handle scroll events
		const handleScroll = () => {
			// Check if the current scroll position is at the top
			const isTop = window.scrollY === 0;
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
					A cup of coffee lasts only a moment, but it is that moment that makes
					your day better.
				</p>
				<AnimatedButton>BROWSE</AnimatedButton>
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
	);
}
export default Home;
