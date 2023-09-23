"use client";

import Modal from "../ui/modal";
import { Search, Triangle, X } from "lucide-react";
import DefaultButton from "../ui/default-button";
import { useLoginModal } from "@/app/hooks/use-login-modal";
import { useState } from "react";
import Link from "next/link";

export const LoginModal = () => {
	const loginModal = useLoginModal();

	const [isLoginPage, setIsLoginPage] = useState(true);

	const handleLoginPageToggle = (
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setIsLoginPage((prev) => !prev);
	};

	return (
		<Modal
			isOpen={loginModal.isOpen}
			// onClose={loginModal.onClose}
			overlayClassName="h-0 w-0"
			className="z-40 top-[82px]"
		>
			<div className="space-y-4 pb-4 bg-white h-full z-40 w-full px-12 py-10 absolute flex flex-col items-center">
				<div className="flex flex-col items-center w-[400px]">
					<div className="flex-row items-center text-3xl">
						<button
							className={`mt-4 px-4 py-2 mb-10 ${
								isLoginPage ? "text-orange-600" : "text-slate-700 opacity-50"
							} `}
							disabled={isLoginPage}
							onClick={handleLoginPageToggle}
						>
							Login
						</button>
						<button
							className={`mt-4 px-4 py-2 ${
								!isLoginPage ? "text-orange-600" : "text-black opacity-50"
							} `}
							disabled={!isLoginPage}
							onClick={handleLoginPageToggle}
						>
							Register
						</button>
					</div>

					{isLoginPage ? (
						<form>
							<input
								type="text"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder="Email"
							/>
							<input
								type="password"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder="Password"
							/>
							<div className="flex items-center justify-between flex-row w-full">
								<Link
									href={"#"}
									className="text-gray-500 hover:text-orange-600"
								>
									<span className="text-md">Forgot Your Password?</span>
								</Link>
								<button className="bg-orange-600 text-white py-3 px-6 items-center">
									<span>LOGIN</span>
								</button>
							</div>
						</form>
					) : (
						<form>
							<div className="flex justify-between p-0 m-0  w-full">
								<input
									type="text"
									className=" mb-7 p-3 w-[190px] border border-gray-600/20 outline-none"
									placeholder="First Name"
								/>
								<input
									type="text"
									className=" mb-7 p-3 w-[190px] border border-gray-600/20 outline-none"
									placeholder="Last Name"
								/>
							</div>
							<input
								type="email"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder="Email*"
								required
							/>
							<input
								type="password"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder="Password*"
								required
							/>
							<input
								type="password"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder="Repeat Password*"
								required
							/>

							<span className="text-sm mb-4">
								Please type the letters and numbers below
								<span className="text-orange-600">*</span>
							</span>
							<input
								type="text"
								className=" mb-7 p-3 w-full border border-gray-600/20 outline-none"
								placeholder=""
								required
							/>

							<div className="flex flex-row justify-start w-full mb-4">
								<input type="checkbox" />

								<span className="ms-4 text-sm items-start">
									Accept our{" "}
									<Link
										href={"#"}
										className="text-gray-600 hover:text-orange-600"
									>
										Privacy Policy
									</Link>
								</span>
							</div>

							{/* IMPLEMENT SYMBOLS */}
							<button className="bg-orange-600 text-white py-3 px-6 items-center w-full">
								<span>REGISTER</span>
							</button>
						</form>
					)}
				</div>
			</div>
		</Modal>
	);
};
