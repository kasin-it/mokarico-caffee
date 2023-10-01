import ImageZoom from '@/app/(dashboard)/(routes)/shop/components/image-zoom';
import AnimatedButton from '@/components/ui/animated-button';
import ItemsCarousel from './components/items-carousel';
import Image from 'next/image';

import express from '@/public/svg/i-cialde-capsule.svg';
import grani from '@/public/svg/i-grani.svg';
import maciento from '@/public/svg/i-macinato.svg';

import assistenza from '@/public/svg/i-assistenza.svg';
import degustazione from '@/public/svg/i-degustazione.svg';
import siamo from '@/public/svg/i-chi-siamo.svg';
import qualita from '@/public/svg/i-qualita.svg';

import rainforest from '@/public/img/rainforest.png';
import biologico from '@/public/img/caffe-biologico-italiano.jpg';
import mokka from '@/public/img/caffe-moka.jpg';
import scrivania from '@/public/img/caffe-scrivania-lavoro.jpg';
import Link from 'next/link';

function ShopPage() {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 h-screen relative">
          <ImageZoom />
          <article className="absolute top-1/3 left-1/4 space-y-10">
            <p className="text-white text-xl">Monorigine coffee</p>
            <h1 className="text-white text-[5vw] font-playfair-display leading-none">
              Every country, <br /> flavors to talk <br /> about
            </h1>
            <AnimatedButton
              childrenClassName="text-white"
              secoundChildren
              className="w-[200px] absolute left-0 z-30"
              secoundChildrenClassName=""
            >
              DISCOVER MONO
            </AnimatedButton>
          </article>
          <AnimatedButton
            childrenClassName="text-white"
            secoundChildren
            className="w-[130px] absolute left-0 bottom-32 border-b-white rotate-90 z-30"
            secoundChildrenClassName="text-black bg-white"
          >
            SCORRI
          </AnimatedButton>
        </div>
        <article className="w-full lg:w-2/5 mt-[190px]">
          <ItemsCarousel />
        </article>
      </section>
      <section className="flex items-center justify-center">
        <article className="flex flex-col lg:flex-row space-x-4 space-y-10 items-center justify-center mt-16">
          <div className="flex flex-col lg:flex-row items-center">
            <Image src={express} alt="coffe" width={50} height={50} />
            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[250px]  text-2xl"
            >
              Pods and Capsules
            </AnimatedButton>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <Image src={grani} alt="coffe" width={50} height={50} />
            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[200px]  text-2xl"
            >
              Coffee Grains
            </AnimatedButton>
          </div>
          <div className="flex flex-col lg:flex-row items-center">
            <Image src={maciento} alt="coffe" width={50} height={50} />

            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[200px] text-2xl"
            >
              Ground Coffee
            </AnimatedButton>
          </div>
        </article>
      </section>
      <section
        className={'flex flex-col items-center justify-center space-y-24 pt-24'}
      >
        <article className="flex flex-col-reverse lg:flex-row lg:items-start items-center">
          <Image
            src={rainforest}
            height={rainforest.height}
            width={rainforest.width}
            alt={''}
          />
          <article className="w-full lg:w-1/2  px-10 py-10 max-w-2xl">
            <h2 className="text-[4vw] font-playfair-display">Rainforest</h2>
            <p className="text-lg text-gray-600/90">
              Eines unserer Topseller jetzt auch Rainforest Alliance
              zertifiziert. Jeder Tropf von RFA Columbia trägt zum Schutz der
              tropischen Wälder und Menschen bei.
            </p>
            <AnimatedButton className="w-[150px]">DISCOVER</AnimatedButton>
          </article>
        </article>
        <article className="flex flex-col items-center lg:flex-row lg:items-start">
          <article className="w-full lg:w-1/2 px-10 py-10 space-y-5 max-w-2xl">
            <h2 className="text-[4vw] font-playfair-display leading-none">
              Discover our <br /> organic soul.
            </h2>
            <p className="text-lg text-gray-600/90">
              Mokarico has chosen to make the most of its BIO line, applying the
              principles of respect for the ecosystem in search of a coffee that
              delivers authentic flavors and true aromas
            </p>
            <AnimatedButton className="w-[150px]">DISCOVER</AnimatedButton>
          </article>
          <Image
            src={biologico}
            height={biologico.height}
            width={biologico.width}
            alt={''}
          />
        </article>
        <section className="w-full items-center justify-center pb-28 pt-20 hidden lg:flex flex-col xl:flex-row mx-auto lg:translate-x-[110px] xl:translate-x-0">
          <Link
            href={'/'}
            className="relative group top-[100px] right-[200px] xl:right-0  mr-[350px]"
          >
            <Image
              src={mokka}
              alt="cups"
              width={mokka.width}
              height={mokka.height}
            />
            <div className="absolute right-[-180px] top-[30%]">
              <h2
                className={
                  'group-hover:text-orange-600 text-black text-4xl font-playfair-display ml-[100px] sm:pl-0 transition duration-500'
                }
              >
                For your <br /> home
              </h2>
              <AnimatedButton
                childrenClassName="justify-end pe-10"
                width={260}
                className="w-[260px]"
              >
                DISCOVER
              </AnimatedButton>
            </div>
          </Link>
          <Link
            href={'/'}
            className="relative group right-[-150px] xl:right-0 "
          >
            <Image
              src={scrivania}
              alt="cups"
              width={scrivania.width}
              height={scrivania.height}
            />
            <div className="absolute left-[-120px] top-[30%]">
              <h2
                className={
                  'group-hover:text-orange-600 text-black text-4xl font-playfair-display mr-[100px] sm:pl-0 transition duration-500'
                }
              >
                For the <br /> office
              </h2>
              <AnimatedButton
                childrenClassName="justify-start ps-10"
                width={260}
                className="w-[260px]"
              >
                SHOP ONLINE
              </AnimatedButton>
            </div>
          </Link>
        </section>

        <section className="w-full px-5 flex lg:hidden flex-col space-y-6 justify-center items-center py-11">
          <Image
            src={mokka}
            alt="cups"
            width={mokka.width}
            height={mokka.height}
          />
          <div className="flex flex-col justify-center items-center">
            <h2
              className={
                'group-hover:text-orange-600 text-black text-4xl font-playfair-display transition duration-500'
              }
            >
              For your Businness
            </h2>
            <AnimatedButton
              childrenClassName="justify-center"
              width={260}
              className="w-[260px]"
            >
              DISCOVER
            </AnimatedButton>
          </div>
          <Image
            src={scrivania}
            alt="cups"
            width={scrivania.width}
            height={scrivania.height}
          />
          <div className="flex flex-col justify-center items-center">
            <h2
              className={
                'group-hover:text-orange-600 text-black text-4xl font-playfair-display transition duration-500'
              }
            >
              Home & Office
            </h2>
            <AnimatedButton
              childrenClassName="justify-center"
              width={260}
              className="w-[260px]"
            >
              DISCOVER
            </AnimatedButton>
          </div>
        </section>

        <section className="lg:flex pb-24 hidden">
          <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
            <Image src={assistenza} alt={''} />
            <h3 className="text-3xl font-playfair-display">
              Available for you <br /> to pucharse
            </h3>
            <AnimatedButton>CONTACTS</AnimatedButton>
          </article>{' '}
          <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
            <Image src={qualita} alt={''} />
            <h3 className="text-3xl font-playfair-display">
              Choose the <br /> quality of real <br /> Italian espresso <br />{' '}
              coffee
            </h3>
            <AnimatedButton>CONTACTS</AnimatedButton>
          </article>{' '}
          <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
            <Image src={siamo} alt={''} />
            <h3 className="text-3xl font-playfair-display">
              Artisan roasting <br /> since 1936
            </h3>
            <AnimatedButton>CONTACTS</AnimatedButton>
          </article>{' '}
          <article className="lg:flex flex-col hidden px-8 space-y-6">
            <Image src={degustazione} alt={''} />
            <h3 className="text-3xl font-playfair-display">
              Becouse <br /> Mokarico is <br /> different from the <br />
              other brands
            </h3>
            <AnimatedButton>CONTACTS</AnimatedButton>
          </article>
        </section>

        <section className="flex pb-24 lg:hidden">
          <div className="border-r space-y-6 w-1/2">
            <article className="lg:flex flex-col px-8 space-y-6">
              <Image src={assistenza} alt={''} />
              <h3 className="text-3xl font-playfair-display">
                Available for you to pucharse
              </h3>
              <AnimatedButton>CONTACTS</AnimatedButton>
            </article>
            <article className="lg:flex flex-col px-8 space-y-6">
              <Image src={siamo} alt={''} />
              <h3 className="text-3xl font-playfair-display">
                Artisan roasting since 1936
              </h3>
              <AnimatedButton>CONTACTS</AnimatedButton>
            </article>
          </div>
          <div className="space-y-6 w-1/2">
            <article className="lg:flex flex-col px-8 space-y-6">
              <Image src={qualita} alt={''} />
              <h3 className="text-3xl font-playfair-display">
                Choose the quality of real Italian espresso coffee
              </h3>
              <AnimatedButton>CONTACTS</AnimatedButton>
            </article>
            <article className="lg:flex flex-col px-8 space-y-6">
              <Image src={degustazione} alt={''} />
              <h3 className="text-3xl font-playfair-display">
                Becouse Mokarico is different from the other brands
              </h3>
              <AnimatedButton>CONTACTS</AnimatedButton>
            </article>
          </div>
        </section>
      </section>
    </>
  );
}
export default ShopPage;
