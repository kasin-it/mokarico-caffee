import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ProductDetails from '@/components/product-details';
import { redirect } from 'next/navigation';

async function page({ params }: { params: { podsId: string } }) {
  const getProduct = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
      cookies: () => cookieStore,
    });
    const { data } = await supabase
      .from('pods-and-capsules')
      .select('*')
      .eq('id', params.podsId)
      .single();

    if (!data) {
      return null;
    }

    return data;
  };

  const data = await getProduct();

  if (!data) {
    redirect('/');
    return null;
  }

  return <ProductDetails product={data} />;
}
export default page;
