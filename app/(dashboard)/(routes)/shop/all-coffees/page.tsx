import Separator from '@/components/ui/separator';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import ProductsCollection from '../components/products-colection';

async function GroundCoffeePage() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });

  // Fetch data from different tables
  const { data: coffeeGrainsData, error: coffeeGrainsError } = await supabase
    .from('coffee-grains')
    .select('*');
  const { data: podsAndCapsulesData, error: podsAndCapsulesError } =
    await supabase.from('pods-and-capsules').select('*');
  const { data: groundCoffeeData, error: groundCoffeeError } = await supabase
    .from('ground-coffee')
    .select('*');

  if (coffeeGrainsError || podsAndCapsulesError || groundCoffeeError) {
    // Handle errors here, e.g., display an error message
    return <div>Error fetching data.</div>;
  }

  const allCoffeeData = [
    ...coffeeGrainsData,
    ...podsAndCapsulesData,
    ...groundCoffeeData,
  ];

  return (
    <section className="mt-[100px] flex flex-col items-center justify-center px-3 md:px-20">
      <section className="w-full space-y-3 max-w-[1100px]">
        <h1 className="font-playfair-display text-7xl">All Coffees</h1>
        <p>Home / Shop / All Coffees</p>
        <Separator className="bg-gray-600" />
      </section>
      <ProductsCollection filter={false} products={allCoffeeData} amount={false} />
    </section>
  );
}

export default GroundCoffeePage;
