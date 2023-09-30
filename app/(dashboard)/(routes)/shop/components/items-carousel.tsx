import CarouselItem from './carousel-item';
import coffe from '@/public/img/i_mono_brasile_1000.jpg';

function ItemsCarousel() {
  return (
    <section>
      <CarouselItem
        desc={
          'Brasile Aroma of ripe fruit. low acidity, sugarcane honey Full body.'
        }
        img={coffe}
        label={'Brasile'}
      />
    </section>
  );
}
export default ItemsCarousel;
