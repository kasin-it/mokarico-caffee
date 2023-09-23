import Navbar from "@/components/navbar";
import FormProvider from "../providers/form-provider";

function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Navbar />
			<FormProvider />
			{children}
		</>
	);
}
export default DashboardLayout;
