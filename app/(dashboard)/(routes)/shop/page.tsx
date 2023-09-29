import ImageZoom from '@/app/(dashboard)/(routes)/shop/components/image-zoom';
import AnimatedButton from '@/components/ui/animated-button';

function ShopPage() {
  return (
    <>
      <section className="">
        <div className="w-full lg:w-3/5 h-screen relative">
          <ImageZoom />
          <article className="absolute top-1/3 left-1/4 space-y-10">
            <p className="text-white text-xl">Monorigine coffee</p>
            <h1 className="text-white text-9xl font-playfair-display">
              Every country, <br /> flavors to talk <br /> about
            </h1>
            <AnimatedButton
              childrenClassName="text-white"
              className="w-[200px]"
            >
              DISCOVER MONO
            </AnimatedButton>
          </article>
          <AnimatedButton
            childrenClassName="text-white"
            secoundChildren
            className="w-[130px] absolute left-0 bottom-32 border-b-white rotate-90"
            secoundChildrenClassName="text-black bg-white"
          >
            SCORRI
          </AnimatedButton>
        </div>
      </section>
    </>
  );
}
export default ShopPage;
