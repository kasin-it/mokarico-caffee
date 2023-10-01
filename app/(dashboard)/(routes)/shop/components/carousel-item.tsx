import Image, { StaticImageData } from 'next/image';
import AddToCartButton from '@/components/ui/add-to-cart-button';
import { cn } from '@/lib/utils';
import { Link } from 'lucide-react';

interface CarouselItemProps {
  desc: string;
  img: StaticImageData;
  label: string;
  active?: boolean;
}

function CarouselItem({ desc, img, label, active = false }: CarouselItemProps) {
  return (
    <Link
      className={cn(
        'flex flex-col text-center justify-center items-center break-words w-[377px] space-y-3 transition',
        active ? 'scale-105' : 'opacity-50',
      )}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      onClick={disableDragClick}
    >
      <Image src={img} alt="coffe" width={img.width} height={img.height} />
      <h3 className="text-4xl font-playfair-display">{label}</h3>
      <p className="text-md text-gray-500/90">{desc}</p>
      <AddToCartButton />
    </article>
  );
}
export default CarouselItem;
