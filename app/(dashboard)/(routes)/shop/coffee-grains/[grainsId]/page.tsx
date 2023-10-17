import AddToCartForm from '../../../../../../components/product-details-menu';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Image from 'next/image';

import { formatter } from '@/lib/utils';
import ProductDetailsMenu from '../../../../../../components/product-details-menu';

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
    return null;
  }

  return <ProductDetailsMenu product={data} />;
}
export default page;
