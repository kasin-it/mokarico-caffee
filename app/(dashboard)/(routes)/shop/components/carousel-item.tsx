import Image, { StaticImageData } from 'next/image';
import AddToCartButton from '@/components/ui/add-to-cart-button';

interface CarouselItemProps {
  desc: string;
  img: StaticImageData;
  label: string;
}

function CarouselItem({ desc, img, label }: CarouselItemProps) {
  return (
    <article className="flex flex-col text-center justify-center items-center break-words w-[377px] space-y-3">
      <Image src={img} alt="coffe" width={img.width} height={img.height} />
      <h3 className="text-4xl font-playfair-display">{label}</h3>
      <p className="text-md text-gray-500/90">{desc}</p>
      <AddToCartButton />
    </article>
  );
}
export default CarouselItem;
