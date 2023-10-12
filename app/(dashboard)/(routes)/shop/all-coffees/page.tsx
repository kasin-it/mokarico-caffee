import Separator from '@/components/ui/separator';
// import supabase from '@/config/supabaseClient';
import ProductsCollection from '../components/products-colection';

function GroundCoffeePage() {

  return (
    <section className="mt-[100px] flex flex-col items-center justify-center px-3 md:px-20">
      <section className="w-full space-y-3 max-w-[1100px]">
        <h1 className="font-playfair-display text-7xl">All Coffees</h1>
        <p>Home / Shop / All Coffees</p>
        <Separator className="bg-gray-600" />
      </section>
      <ProductsCollection filter={true} />
    </section>
  );
}
export default GroundCoffeePage;
