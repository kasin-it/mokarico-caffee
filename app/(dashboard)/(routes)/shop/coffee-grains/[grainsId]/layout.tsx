import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

export default async function ProductLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { grainsId: string };
}) {
  const getProduct = async () => {
    const cookieStore = cookies();
    const supabase = createServerComponentClient({
      cookies: () => cookieStore,
    });
    const { data } = await supabase
      .from('coffee-grains')
      .select('id')
      .eq('id', params.grainsId)
      .single();

    if (!data) {
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
