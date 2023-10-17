import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import ProductDetails from '@/components/product-details';
import { redirect } from 'next/navigation';

async function page({ params }: { params: { grainsId: string } }) {
  const getProduct = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
      cookies: () => cookieStore,
    });
    const { data } = await supabase
      .from('coffee-grains')
      .select('*')
      .eq('id', params.grainsId)
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
