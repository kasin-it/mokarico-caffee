import Navbar from "@/components/navbar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
}
export default DashboardLayout;
