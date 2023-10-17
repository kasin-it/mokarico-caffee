import Separator from '@/components/ui/separator';
import ProductsCollection from '../components/products-colection';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

async function GroundCoffeePage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const { data } = await supabase.from('ground-coffee').select('*');


  return (
    <section className="mt-[100px] flex flex-col items-center justify-center px-3 md:px-20">
      <section className="w-full space-y-3 max-w-[1100px]">
        <h1 className="font-playfair-display text-7xl">Ground Coffee</h1>
        <p>Home / Shop / Ground Coffee</p>
        <Separator className="bg-gray-600" />
      </section>
      {data ? <ProductsCollection products={data} /> : 'Something went wrong.'}
    </section>
  );
}
export default GroundCoffeePage;
