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

import Image from 'next/image';
import { useLayoutEffect } from 'react';
import { ArrowDownCircleIcon } from 'lucide-react';
import Link from 'next/link';

function Home() {
  const searchModal = useSearchModal();
  const loginModal = useLoginModal();
  const navbarProperties = useNavbarProperties();
  const arrowUp = useArrowUpModal();

  useLayoutEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Check if the current scroll position is at the top
      const isTop = window.scrollY === 0;

      if (isTop && arrowUp.isOpen) {
        arrowUp.onClose();
      } else if (!isTop && !arrowUp.isOpen) {
        arrowUp.onOpen();
      }

      navbarProperties.setisTransparent(
        isTop && !(loginModal.isOpen || searchModal.isOpen)
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
      <section className='z-50 flex h-full w-full items-center justify-center'>
        <div className='absolute left-0 hidden h-full w-[50%] md:block'></div>
        <div className='absolute right-0 h-full w-full bg-blue-200 md:w-[50%]'>
          <video
            className='h-full w-full object-cover opacity-80'
            autoPlay
            loop
            muted
            playsInline
          >
            {/* Use the appropriate URL to the video file */}
            <source src='/video/beans.mp4' type='video/mp4' />
            {/* Add more <source> elements for other video formats if necessary */}
            Your browser does not support the video tag.
          </video>
        </div>

        <div className='absolute left-0'>
          <h1>
            The Stylish
            <br /> coffee
          </h1>
          <br />
          <p>
            A cup of coffee lasts only a moment, but it is that moment that
            makes your day better.
          </p>
          <AnimatedButton
            secoundChildren={
              <ArrowDownCircleIcon className='rotate-[-90deg] text-white' />
            }
            className='rotate-90'
            width={140}
            // height={64} NOT working for now
          >
            BROWSE
          </AnimatedButton>
        </div>
        <div className='z-20 flex'>
          <Image
            src={hero_img}
            alt='hero'
            width={hero_img.width}
            height={hero_img.height}
          />
        </div>
        <div className='absolute right-0'>
          <SocialmediaProviders className='text-white' />
        </div>
      </section>
      <section className='relative mt-11 flex justify-center'>
        <Image
          src={story_img}
          alt='story'
          width={story_img.width / 2}
          height={story_img.height / 2}
        />
        <article className='flex flex-col'>
          <h1 className='text-7xl'>
            A century <br /> long story
          </h1>
          <p>
            Where tradition and quality maintain <br /> their values over time.
          </p>
          <section className='grid grid-cols-2'>
            {/* <article className="w-[200px]">
						</article>
						<article className="w-[200px]">
						</article>
						<article className="w-[200px]">
						</article>
						<article className="w-[200px]">
					</article> */}
            <Link
              href={'/'}
              className='group flex h-[200px] w-[200px] flex-col items-center justify-end pb-12'
            >
              <Image
                src={origini_svg}
                alt='origini'
                className='group-hover:opacity-30'
              />
              <AnimatedButton width={140}>COMPANY</AnimatedButton>
            </Link>
            <Link
              href={'/'}
              className='group flex h-[200px] w-[200px] flex-col items-center justify-end border-b border-l pb-12'
            >
              <Image
                src={miscele_svg}
                alt='miscele'
                className='group-hover:opacity-30'
              />
              <AnimatedButton width={140}>BLENDS</AnimatedButton>
            </Link>
            <Link
              href={'/'}
              className='group flex h-[200px] w-[200px] flex-col items-center justify-end border-r border-t pb-12'
            >
              <Image
                src={qualita_svg}
                alt='qualita'
                className='group-hover:opacity-30'
              />
              <AnimatedButton width={140}>QUALITY</AnimatedButton>
            </Link>
            <Link
              href={'/'}
              className='group flex h-[200px] w-[200px] flex-col items-center justify-end pb-12'
            >
              <Image
                src={bioworld_svg}
                alt='bioworld'
                className='group-hover:opacity-30'
              />
              <AnimatedButton width={140}>BIO WORLD</AnimatedButton>
            </Link>
          </section>
          <span className='absolute right-[80px] top-[370px] rotate-90'>
            1936-2018
          </span>
        </article>
      </section>
      <section className='flex w-full items-center justify-center pb-28 pt-20'>
        <article className='relative top-[100px] mr-[200px]'>
          <Image
            src={cups_img}
            alt='cups'
            width={cups_img.width}
            height={cups_img.height}
          />
          <div className='absolute right-[-100px] top-[50%]'>
            <h2>
              Four your <br /> Businness
            </h2>
            <AnimatedButton childrenClassName='justify-end pe-10' width={300}>
              DISCOVER
            </AnimatedButton>
          </div>
        </article>
        <article className='relative'>
          <Image
            src={home_office_img}
            alt='cups'
            width={home_office_img.width}
            height={home_office_img.height}
          />
          <div className='absolute right-[-100px] top-[50%]'>
            <h2>
              Four your <br /> Businness
            </h2>
            <AnimatedButton childrenClassName='justify-end pe-10' width={300}>
              DISCOVER
            </AnimatedButton>
          </div>
        </article>
      </section>
    </>
  );
}
export default Home;
