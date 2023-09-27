import Navbar from '@/components/navbar';
import FormProvider from '../providers/form-provider';
import Footer from '@/components/footer';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <FormProvider />
      {children}
      <Footer />
    </>
  );
}
export default DashboardLayout;
