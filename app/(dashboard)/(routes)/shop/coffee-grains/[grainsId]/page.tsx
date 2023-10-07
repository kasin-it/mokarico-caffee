import supabase from '@/config/supabaseClient';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import Image from 'next/image';
import Gallery from '../../components/gallery';
import DefaultButton from '@/components/ui/default-button';
import AddToCartForm from '../../forms/add-to-cart-from';

async function page() {
  const getProduct = async () => {
    const { data, error } = await supabase
      .from('coffee-grains')
      .select()
      .eq('id', '30dd5631-507f-4039-81ef-5903eed8179a')
      .single();

    if (error) {
      console.error('Error fetching product:', error);
      return null;
    }

    return data;
  };

  const data = await getProduct();

  return (
    <div className="mt-[200px] flex">
      <Gallery images={data.gallery} />

      <section>
        <h3>{data.label}</h3>
        <p>ROASTED IN BEANS 1kg</p>
        <p>desc</p>

        <AddToCartForm productId={data} />
      </section>
    </div>
  );
}
export default page;
