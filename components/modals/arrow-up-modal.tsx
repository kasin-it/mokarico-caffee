import { LucideArrowUpRight } from "lucide-react";

function ArrowUpModal() {
	return (
		<div
			className="fixed right-10 bottom-10 z-50 flex items-center justify-center border bg-transparent  w-[50px] h-[50px] hover:bg-black rounded-xl cursor-pointer duration-400 text-black/30 border-black/30 hover:text-white rotate-[-90deg] transition duration-500"
			onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
			role="button"
			tabIndex={0}
			aria-label="Scroll to top"
			title="Scroll to top"
		>
			<LucideArrowUpRight size={20} className="rotate-45 " />
		</div>
	);
}
export default ArrowUpModal;
