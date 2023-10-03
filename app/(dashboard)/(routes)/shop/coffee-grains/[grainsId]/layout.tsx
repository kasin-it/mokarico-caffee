import { redirect } from 'next/navigation';
import supabase from '@/config/supabaseClient';

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { grainsId: string };
}) {
  const getProduct = async () => {
    const { data, error } = await supabase
      .from('coffee-grains')
      .select('id')
      .eq('id', params.grainsId)
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  };

  const product = await getProduct();

  if (!product) {
    redirect('/');
    return null;
  }

  return <>{children}</>;
}
