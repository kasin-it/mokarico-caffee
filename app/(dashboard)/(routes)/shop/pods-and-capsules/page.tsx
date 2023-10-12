import Separator from '@/components/ui/separator';
import ProductsCollection from '../components/products-colection';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

async function PodsAndCapsulesPage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const { data } = await supabase.from('pods-and-capsules').select('*');

  return (
    <section className="mt-[100px] flex flex-col items-center justify-center px-3 md:px-20">
      <section className="w-full space-y-3 max-w-[1100px]">
        <h1 className="font-playfair-display text-7xl">
          Pods and <br /> Capsules
        </h1>
        <p>Home / Shop / Pods and Capsules</p>
        <Separator className="bg-gray-600" />
      </section>
      <ProductsCollection products={data} />
    </section>
  );
}
export default PodsAndCapsulesPage;
