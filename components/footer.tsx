'use client';

import miscele_svg from '@/public/svg/miscele.svg';
import Image from 'next/image';
import Separator from './ui/separator';
import Link from 'next/link';
import { Headphones, Mail } from 'lucide-react';
import AnimatedButton from './ui/animated-button';
import { useState } from 'react';

import biologico from '@/public/img/certificazione-biologico@2x.png';
import italiano from '@/public/img/espresso-italiano@2x.png';
import europe from '@/public/img/speciality-coffee-assn-of-europe@2x.png';
import cqy from '@/public/img/CQY.png';
import cqy2 from '@/public/img/9001.png';
import Accordion from './ui/accordion';

function Footer() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  // const badges = [
  //   {
  //     img: biologico,
  //     alt: 'biologico',
  //   },
  //   {
  //     img: italiano,
  //     alt: 'italiano',
  //   },
  //   {
  //     img: europe,
  //     alt: 'europe',
  //   },
  //   {
  //     img: cqy,
  //     alt: 'cqy',
  //   },
  //   {
  //     img: cqy2,
  //     alt: 'cqy2',
  //   },
  // ];

  const routes = [
    {
      title: 'Shop Online',
      routes: [
        {
          label: 'Home Shop',
          href: '#',
        },
        {
          label: 'All coffee',
          href: '#',
        },
        {
          label: 'Pods and Capsules',
          href: '#',
        },
        {
          label: 'Ground Coffee',
          href: '#',
        },
        {
          label: 'Coffee Grains',
          href: '#',
        },
        {
          label: 'Mono',
          href: '#',
        },
        {
          label: 'Merchandising',
          href: '#',
        },
      ],
    },
    {
      title: 'Assistance',
      routes: [
        {
          label: 'Shipping',
          href: '#',
        },
        {
          label: 'Return',
          href: '#',
        },
        {
          label: 'Payments',
          href: '#',
        },
        {
          label: 'Contacts',
          href: '#',
        },
      ],
    },
    {
      title: 'Coffee',
      routes: [
        {
          label: 'Blends',
          href: '#',
        },
        {
          label: 'Quality',
          href: '#',
        },
        {
          label: 'Organic',
          href: '#',
        },
      ],
    },
    {
      title: 'Business',
      routes: [
        {
          label: 'Company',
          href: '#',
        },
        {
          label: 'Choose Mokarico ',
          href: '#',
        },
        {
          label: 'Training Courses ',
          href: '#',
        },
      ],
    },
  ];

  return (
    <footer className="max-w-[1140px] ">
      <Separator className="max-w-[1140px]" />
      <section className={'py-6  px-6'}>
        <h3 className="text-xl font-playfair-display">
          Certifications are an appropriate reward for our quality{' '}
        </h3>
        <article className={'grid grid-cols-1 md:grid-cols-2 space-y-5'}>
          {/* {badges.map((badge, index) => (

            <Image
              src={badge.img.src}
              // width={badge.img.width}
              width={60}
              height={60}
              // height={badge.img.height}
              key={index}
              alt={badge.alt}
            />
          ))} */}

          <div className="flex space-x-7 h-[60px]">
            <Image src={biologico.src} width={60} height={60} alt="biologico" />
            <Image src={italiano.src} width={60} height={60} alt="italiano" />
            <Image src={europe.src} width={60} height={60} alt="europe" />
          </div>
          <div className="flex space-x-7 h-[60px]">
            <p>Certified quality and environmental management system </p>
            <Image src={cqy.src} width={60} height={60} alt="cqy" />
            <Image src={cqy2.src} width={60} height={60} alt="cqy2" />
          </div>
        </article>
      </section>
      <Separator className="max-w-[1140px]" />
      <section
        className={
          'flex flex-col lg:flex-row py-10 px-11 xxl:px-0 justify-center'
        }
      >
        <form className={'w-full lg:w-[600px]'}>
          Keep up to date with us
          <input
            type="email"
            className={
              'mb-7 w-full border-b-2 border-b-gray-600 p-3 outline-none'
            }
            placeholder="Enter your email address"
            required
          />
          <div className={'mb-4 flex w-full flex-row justify-start'}>
            <input type="checkbox" />

            <span className={'ms-4 items-start text-sm'}>
              Accept our{' '}
              <Link
                href={'#'}
                className={'text-gray-600 hover:text-orange-600'}
              >
                Privacy Policy
              </Link>
            </span>
          </div>
          <AnimatedButton
            className={'border-2 border-orange-600'}
            secoundChildren={<Mail className={'text-white'} />}
          >
            SUBSCRIBE
          </AnimatedButton>
        </form>
        <section
          className={'hidden lg:flex justify-between w-full px-11 max-w-5xl'}
        >
          {routes.map((route, index) => (
            <article key={index}>
              <h5>{route.title}</h5>
              <ul className={''}>
                {route.routes.map(
                  (
                    subRoute,
                    subIndex, // Use a different variable name for the nested map
                  ) => (
                    <li key={subIndex}>
                      <Link href={subRoute.href} className={'text-gray-600'}>
                        {subRoute.label}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </article>
          ))}
        </section>
        <section className="lg:hidden">
          {routes.map((route, index) => (
            <Accordion
              children={
                <>
                  {route.routes.map((subRoute) => (
                    <div className="text-black hover:text-orange-600 py-5 text-sm ps-5 border-t">
                      <Link href={subRoute.href}>{subRoute.label}</Link>
                    </div>
                  ))}
                </>
              }
              title={route.title}
              id={index}
            />
          ))}
        </section>
      </section>
      <Separator className="max-w-[1140px]" />
      <article>
        <Headphones />
        We are available to answer any query by phone from Mon - Fri 9:00 -12:30
        and 14:00 - 17:30 at 055 849 5085 or email at info@mokarico.com
      </article>
      <Separator />
    </footer>
  );
}
export default Footer;
