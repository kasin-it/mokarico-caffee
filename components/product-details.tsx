import { formatter } from '@/lib/utils';
import { Product } from '@/types';
import Image from 'next/image';
import ProductDetailsMenu from './product-details-menu';

interface ProductDetailsProps {
  product: Product;
}

function ProductDetails({ product }: ProductDetailsProps) {
  return (
    <div className="mt-[100px] flex flex-col md:flex-row w-full justify-center items-center mb-11">
      <Image src={product.image} alt="image" width={600} height={600} loading='eager' quality={100} />

      <section className="space-y-4">
        <h1 className="text-5xl font-playfair-display">{product.label}</h1>
        <p>
          {product.type ? product.type : ''}{' '}
          {product.quantity ? `${product.quantity}pcs` : `${product.grammage}g`}
        </p>
        <p className="text-sm">{product.desc}</p>

        <p className="text-2xl">{formatter.format(product.price)}</p>

        <ProductDetailsMenu product={product} />
      </section>
    </div>
  );
}
export default ProductDetails;
