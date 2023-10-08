'use client';

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
import graph from '@/public/img/graph-chicchi.png';
import Link from 'next/link';
import { ArrowRightCircle } from 'lucide-react';

function ShopPage() {
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/5 h-screen relative">
          <ImageZoom />
          <article className="absolute left-1/4 top-1/3 sm:left-1/4 space-y-10 text-center sm:text-start">
            <p className="text-white text-xl">Monorigine coffee</p>
            <h1 className="text-white text-5xl md:text-[5vw] font-playfair-display leading-none text-center sm:text-left">
              Every country, <br /> flavors to talk <br /> about
            </h1>
            <AnimatedButton
              childrenClassName="text-white"
              className="w-[200px] absolute left-[15%] sm:left-0 z-30"
              secoundChildrenClassName=""
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              DISCOVER MONO
            </AnimatedButton>
          </article>
          <AnimatedButton
            childrenClassName="text-white"
            className="w-[130px] absolute left-[38%] sm:left-0 bottom-32 border-b-white rotate-90 z-30 transition"
            secoundChildrenClassName="text-black bg-white"
            secoundChildren={<ArrowRightCircle />}
          >
            SCORRI
          </AnimatedButton>
        </div>
        <article className="w-full flex lg:w-2/5 mt-7 lg:mt-[190px] justify-center">
          <ItemsCarousel />
        </article>
      </section>

      <section className="flex items-center justify-center">
        <article className="flex flex-col lg:flex-row lg:space-x-12 space-y-10 items-center lg:items-end justify-center my-16 w-full">
          <div className="flex  items-center space-x-5">
            <Image
              src={express}
              alt="coffe"
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[250px] text-2xl"
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              Pods and Capsules
            </AnimatedButton>
          </div>
          <div className="flex  items-center space-x-5">
            <Image
              src={grani}
              alt="coffe"
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[200px]  text-2xl"
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              Coffee Grains
            </AnimatedButton>
          </div>
          <div className="flex tems-center space-x-5">
            <Image
              src={maciento}
              alt="coffe"
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />

            <AnimatedButton
              childrenClassName="font-playfair-display px-1"
              className="w-[200px] text-2xl"
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              Ground Coffee
            </AnimatedButton>
          </div>
        </article>
      </section>

      <section
        className={'flex flex-col items-center justify-center space-y-12'}
      >
        <article className="flex flex-col-reverse lg:flex-row lg:items-start items-center">
          <Image
            src={rainforest}
            height={rainforest.height}
            width={rainforest.width}
            alt={''}
            className="mt-5"
          />
          <article className="w-full lg:w-1/2  px-10 pt-10 max-w-2xl">
            <h2 className="text-5xl lg:text-[4vw] font-playfair-display">
              Rainforest
            </h2>
            <p className="text-lg text-gray-600/90">
              Eines unserer Topseller jetzt auch Rainforest Alliance
              zertifiziert. Jeder Tropf von RFA Columbia trägt zum Schutz der
              tropischen Wälder und Menschen bei.
            </p>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
              className="w-[150px]"
            >
              DISCOVER
            </AnimatedButton>
          </article>
        </article>
        <article className="flex flex-col items-center lg:flex-row lg:items-start">
          <article className="w-full lg:w-1/2 px-10 pt-10 space-y-5 max-w-2xl">
            <h2 className="text-5xl lg:text-[4vw] font-playfair-display leading-none">
              Discover our <br /> organic soul.
            </h2>
            <p className="text-lg text-gray-600/90">
              Mokarico has chosen to make the most of its BIO line, applying the
              principles of respect for the ecosystem in search of a coffee that
              delivers authentic flavors and true aromas
            </p>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
              className="w-[150px]"
            >
              DISCOVER
            </AnimatedButton>
          </article>
          <Image
            src={biologico}
            height={biologico.height}
            width={biologico.width}
            alt={''}
            className="mt-5"
          />
        </article>

        <section className="w-full items-center justify-center pb-24 hidden relative lg:flex flex-col xl:flex-row lg:translate-x-[110px] xl:translate-x-0">
          <Image
            src={graph}
            height={graph.height}
            width={graph.width}
            className="absolute left-0 bottom-0 hidden xl:block"
            alt="branch"
          />
          <Link
            href={'/'}
            className="relative group top-[100px] right-[200px] xl:right-0  mr-[350px]"
            aria-label="home"
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
                className="w-[260px]"
                secoundChildren={<ArrowRightCircle className="text-white" />}
              >
                DISCOVER
              </AnimatedButton>
            </div>
          </Link>
          <Link
            href={'/'}
            className="relative group right-[-150px] xl:right-0 "
            aria-label="home"
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
                className="w-[260px]"
                secoundChildren={<ArrowRightCircle className="text-white" />}
              >
                SHOP ONLINE
              </AnimatedButton>
            </div>
          </Link>
        </section>

        <section className="w-full px-5 pb-12 flex lg:hidden flex-col space-y-6 justify-center items-center">
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
              className="w-[260px]"
              secoundChildren={<ArrowRightCircle className="text-white" />}
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
              className="w-[260px]"
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              DISCOVER
            </AnimatedButton>
          </div>
        </section>
      </section>

      <section className="lg:flex pb-24 hidden justify-center items-start">
        <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
          <Image src={assistenza} alt={''} />
          <h3 className="text-3xl font-playfair-display">
            Available for you <br /> to pucharse
          </h3>
          <AnimatedButton
            secoundChildren={<ArrowRightCircle className="text-white" />}
          >
            CONTACTS
          </AnimatedButton>
        </article>{' '}
        <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
          <Image src={qualita} alt={''} />
          <h3 className="text-3xl font-playfair-display">
            Choose the <br /> quality of real <br /> Italian espresso <br />{' '}
            coffee
          </h3>
          <AnimatedButton
            secoundChildren={
              <ArrowRightCircle className="text-white w-[150px]" />
            }
          >
            QUALITY
          </AnimatedButton>
        </article>{' '}
        <article className="lg:flex flex-col hidden border-r px-8 space-y-6">
          <Image
            src={siamo}
            alt={''}
            width={0}
            height={0}
            style={{ width: '50px', height: 'auto' }}
          />
          <h3 className="text-3xl font-playfair-display">
            Artisan roasting <br /> since 1936
          </h3>
          <AnimatedButton
            secoundChildren={<ArrowRightCircle className="text-white" />}
          >
            ABOUT US
          </AnimatedButton>
        </article>{' '}
        <article className="lg:flex flex-col hidden px-8 space-y-6">
          <Image
            src={degustazione}
            alt={''}
            width={0}
            height={0}
            style={{ width: '50px', height: 'auto' }}
          />
          <h3 className="text-3xl font-playfair-display">
            Becouse <br /> Mokarico is <br /> different from the <br />
            other brands
          </h3>
          <AnimatedButton
            secoundChildren={<ArrowRightCircle className="text-white" />}
          >
            DISCOVER
          </AnimatedButton>
        </article>
      </section>

      <section className="flex pb-24 lg:hidden justify-center items-start">
        <div className="border-r space-y-6 w-1/2">
          <article className="lg:flex flex-col px-8 space-y-6">
            <Image
              src={assistenza}
              alt={''}
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <h3 className="text-3xl font-playfair-display">
              Available for you to pucharse
            </h3>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              CONTACTS
            </AnimatedButton>
          </article>
          <article className="lg:flex flex-col px-8 space-y-6">
            <Image
              src={siamo}
              alt={''}
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <h3 className="text-3xl font-playfair-display">
              Artisan roasting since 1936
            </h3>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              QUALITY
            </AnimatedButton>
          </article>
        </div>
        <div className="space-y-6 w-1/2">
          <article className="lg:flex flex-col px-8 space-y-6">
            <Image
              src={qualita}
              alt={''}
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <h3 className="text-3xl font-playfair-display">
              Choose the quality of real Italian espresso coffee
            </h3>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              ABOUT US
            </AnimatedButton>
          </article>
          <article className="lg:flex flex-col px-8 space-y-6">
            <Image
              src={degustazione}
              alt={''}
              width={0}
              height={0}
              style={{ width: '50px', height: 'auto' }}
            />
            <h3 className="text-3xl font-playfair-display">
              Becouse Mokarico is different from the other brands
            </h3>
            <AnimatedButton
              secoundChildren={<ArrowRightCircle className="text-white" />}
            >
              DISCOVER
            </AnimatedButton>
          </article>
        </div>
      </section>
    </>
  );
}
export default ShopPage;
