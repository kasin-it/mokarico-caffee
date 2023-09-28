'use client';

import { useLoginModal } from '@/app/hooks/use-login-modal';
import { useNavbarProperties } from '@/app/hooks/use-navbar-properties';
import { useSearchModal } from '@/app/hooks/use-search-modal';
import { useArrowUpModal } from '@/app/hooks/use-arrow-up-modal';
import SocialmediaProviders from '@/components/ui/socialmedia-providers';
import AnimatedButton from '@/components/ui/animated-button';
import hero_img from '@/public/img/hero_img.jpg';
import story_img from '@/public/img/story_img.jpg';
import origini_svg from '@/public/svg/origini.svg';
import miscele_svg from '@/public/svg/miscele.svg';
import qualita_svg from '@/public/svg/qualita.svg';
import bioworld_svg from '@/public/svg/bioworld.svg';
import cups_img from '@/public/img/cups.jpg';
import home_office_img from '@/public/img/home_office.jpg';
import story_sm_img from '@/public/img/story_img_sm.png';

import Image from 'next/image';
import { useEffect, useLayoutEffect } from 'react';
import { ArrowDownCircleIcon } from 'lucide-react';
import Link from 'next/link';

function Home() {
  const searchModal = useSearchModal();
  const loginModal = useLoginModal();
  const navbarProperties = useNavbarProperties();
  const arrowUp = useArrowUpModal();

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const screanHeight = window.scrollY;

      const isTop = screanHeight === 0;

      if (isTop) {
        arrowUp.onClose();
      } else if (!isTop) {
        arrowUp.onOpen();
      }

      navbarProperties.setisTransparent(
        isTop && !(loginModal.isOpen || searchModal.isOpen),
      );
    };

    // Manually trigger the scroll event once after the component is mounted
    handleScroll();

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup the scroll event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [searchModal.isOpen, loginModal.isOpen]);

  return (
    <>
      {/* HERO */}
      <section className="z-50 flex h-full w-full items-center justify-center">
        <div className="absolute left-0 hidden h-full w-[50%] md:block"></div>
        <div className="absolute right-0 h-full w-full bg-blue-200 md:w-[50%]">
          <video
            className="h-full w-full object-cover opacity-80"
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Use the appropriate URL to the video file */}
            <source src="/video/beans.mp4" type="video/mp4" />
            {/* Add more <source> elements for other video formats if necessary */}
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="absolute left-0 pl-12 z-30">
          <h1 className="font-playfair-display text-[5vw] leading-[1] hidden md:block text-black">
            The Stylish
            <br /> coffee
          </h1>
          <br />
          <p className="text-lg hidden xl:block 2xl:ml-0 w-[310px] font-normal leading-[1.5] 2xl:w-[400px]">
            A cup of coffee lasts only a moment, but it is that moment that
            makes your day better.
          </p>
          <AnimatedButton
            childrenClassName="text-white md:text-black"
            secoundChildren={
              <ArrowDownCircleIcon className="rotate-[-90deg] text-white" />
            }
            className="rotate-90 hidden md:block lg:left-[10px] md:left-[-60px] top-[190px] w-[150px]"
            width={160}
            // height={64} NOT working for now
          >
            BROWSE
          </AnimatedButton>
        </div>
        <div className="z-20 flex flex-col justify-center items-center">
          <h1 className="text-6xl text-white font-playfair-display left-[130px] top-[-70px] text-center md:hidden translate-y-6">
            The Stylish
            <br /> coffee
          </h1>
          <Image
            src={hero_img}
            alt="hero"
            width={hero_img.width}
            height={hero_img.height}
            className="px-11 md:px-0"
          />
          <AnimatedButton
            childrenClassName="text-white md:text-black"
            secoundChildren={
              <ArrowDownCircleIcon className="rotate-[-90deg] text-white" />
            }
            className="rotate-90 md:hidden bottom-[-100px] w-[150px]"
            width={160}
            // height={64} NOT working for now
          >
            BROWSE
          </AnimatedButton>
        </div>
        <div className="absolute right-11 bottom-[130px] hidden xl:block">
          <SocialmediaProviders className="text-white" />
        </div>
      </section>
      {/* STORY SECTION */}
      <section className="relative mt-11 flex justify-center">
        <Image
          src={story_img}
          alt="story"
          width={story_img.width / 2}
          height={story_img.height / 2}
          className="hidden lg:block"
        />
        <article className="flex flex-col">
          <article className="ml-5 mt-11 space-y-5">
            <div className="relative">
              <Image
                src={story_sm_img}
                alt="story"
                width={story_sm_img.width}
                height={story_sm_img.height}
                className="lg:hidden absolute bottom-[-200px] z-[-20]"
              />
            </div>
            <h1 className="text-5xl font-playfair-display pl-8 sm:pl-0">
              A century <br /> long story
            </h1>
            <p className="pl-11 sm:pl-0">
              Where tradition and quality maintain <br /> their values over
              time.
            </p>
          </article>
          <section className="flex flex-row">
            <div className="flex flex-col border-r">
              <Link
                href={'/'}
                className="group flex h-[200px] w-[260px] flex-col items-center justify-end pb-12 border-b"
              >
                <Image
                  src={origini_svg}
                  alt="origini"
                  className="group-hover:opacity-30"
                />
                <AnimatedButton width={140}>COMPANY</AnimatedButton>
              </Link>
              <Link
                href={'/'}
                className="group flex h-[200px] w-[260px] flex-col items-center justify-end  pb-12 "
              >
                <Image
                  src={qualita_svg}
                  alt="qualita"
                  className="group-hover:opacity-30"
                />
                <AnimatedButton width={140}>QUALITY</AnimatedButton>
              </Link>
            </div>
            <div className="flex flex-col relative">
              <Link
                href={'/'}
                className="group flex h-[200px] w-[260px] flex-col items-center justify-end pb-12  border-b"
              >
                <Image
                  src={miscele_svg}
                  alt="miscele"
                  className="group-hover:opacity-30"
                />
                <AnimatedButton width={140}>BLENDS</AnimatedButton>
              </Link>
              <Link
                href={'/'}
                className="group flex h-[200px] w-[260px] flex-col items-center justify-end pb-12"
              >
                <Image
                  src={bioworld_svg}
                  alt="bioworld"
                  className="group-hover:opacity-30"
                />
                <AnimatedButton width={140}>BIO WORLD</AnimatedButton>
              </Link>
              <span className="absolute text-xs right-[-60px] top-[180px] rotate-90 font-bold tracking-widest hidden md:block">
                1936-2018
              </span>
            </div>
          </section>
        </article>
      </section>

      <section className="w-full items-center justify-center pb-28 pt-20 hidden lg:flex flex-col xl:flex-row mx-auto xl:translate-x-[-60px]">
        <Link
          href={'/'}
          className="relative group top-[100px] right-[200px] xl:right-0  mr-[250px]"
        >
          <Image
            src={cups_img}
            alt="cups"
            width={cups_img.width}
            height={cups_img.height}
          />
          <div className="absolute right-[-200px] top-[30%]">
            <h2
              className={
                'group-hover:text-orange-600 text-black text-4xl font-playfair-display ml-[100px] sm:pl-0 transition duration-500'
              }
            >
              For your <br /> Businness
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
        <Link href={'/'} className="relative group right-[-150px] xl:right-0 ">
          <Image
            src={home_office_img}
            alt="cups"
            width={home_office_img.width}
            height={home_office_img.height}
          />
          <div className="absolute right-[-200px] top-[30%]">
            <h2
              className={
                'group-hover:text-orange-600 text-black text-4xl font-playfair-display ml-[100px] sm:pl-0 transition duration-500'
              }
            >
              Home & <br /> Office
            </h2>
            <AnimatedButton
              childrenClassName="justify-end pe-10"
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
          src={cups_img}
          alt="cups"
          width={cups_img.width}
          height={cups_img.height}
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
          src={home_office_img}
          alt="cups"
          width={home_office_img.width}
          height={home_office_img.height}
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
    </>
  );
}
export default Home;
