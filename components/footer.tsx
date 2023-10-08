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

import regione from '@/public/svg/por-creo-regione-toscana.svg';
import toscana from '@/public/svg/regione-toscana.svg';
import repubblica from '@/public/svg/repubblica-italiana.svg';
import unione from '@/public/svg/unione-europea.svg';

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
    <div className="flex justify-center w-full">
      <footer className="max-w-[1140px] overflow-hidden">
        <Separator className="max-w-[1140px]" />
        <section className={'py-6  px-6'}>
          <h1 className="text-xl font-playfair-display">
            Certifications are an appropriate reward for our quality{' '}
          </h1>
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
              <Image
                src={biologico.src}
                width={60}
                height={60}
                alt="biologico"
              />
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
              id="email1"
              className={
                'mb-7 w-full border-b-2 border-b-gray-600 p-3 outline-none'
              }
              placeholder="Enter your email address"
              required
            />
            <div className={'mb-4 flex w-full flex-row justify-start'}>
              <input
                type="checkbox"
                id="privacyCheckbox"
                className="cursor-pointer"
              />
              <label
                htmlFor="privacyCheckbox"
                className="ms-4 items-start text-sm"
              >
                Accept our{' '}
                <a href="#" className="text-gray-600 hover:text-orange-600">
                  Privacy Policy
                </a>
              </label>
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
                title={route.title}
                key={index}
                id={`acordion-${index}`}
              >
                <>
                  {route.routes.map((subRoute, subIndex) => (
                    <Link
                      href={subRoute.href}
                      className="text-black hover:text-orange-600 py-2 text-sm ps-5 border-t block"
                      key={subIndex}
                    >
                      {subRoute.label}
                    </Link>
                  ))}
                </>
              </Accordion>
            ))}
          </section>
        </section>
        <Separator className="max-w-[1140px]" />
        <article className="p-5">
          <Headphones className="text-orange-600 me-3 h-12" />
          We are available to answer any query by phone from Mon - Fri 9:00
          -12:30 and 14:00 - 17:30 at{' '}
          <span className="font-bold mx-2"> 055 849 5085 </span> or email at
          <a
            className="font-bold hover:text-orange-600 mx-2"
            href="mailto:info@mokarico.com"
          >
            info@mokarico.com
          </a>
        </article>
        <Separator />
        <article className="grid grid-cols-1 md:grid-cols-2 p-5">
          <section className="flex p-2 space-x-3">
            <Link href={'#'} className={'text-black hover:text-orange-600'}>
              Enviroment Respec
            </Link>
            <Link href={'#'} className={'text-black hover:text-orange-600'}>
              Terms and Conditions
            </Link>
            <Link href={'#'} className={'text-black hover:text-orange-600'}>
              Privacy
            </Link>
          </section>
          <p>
            A.D.A. Srl - Via del Bagnone, 24 - 50032 Borgo San Lorenzo - PI:
            06334730485 - Powered by Ecommerce Therapy Web Agency Firenze
          </p>
        </article>{' '}
        <Separator />
        <article className="grid grid-cols-1 md:grid-cols-2 p-5">
          <span className="word-wrap">
            MOKAR - Investimento nella realizzazione di un nuovo impianto di
            torrefazione caffè scalabile per piccole produzioni, per affrontare
            nuovi mercati e superare le difficoltà di sviluppo in questo settore
            dovute alla pandemia Covid-19 Progetto co-finanziato dal POR FESR
            Toscana 2014-2020 ASSE – AZIONE MOK-ACT - Mokarico:
            internationalisation strategy for a historic Tuscan coffee roasting
            in the areas of China and Taiwan” Project co-financed by the POR
            FESR Tuscany 2014-2020 AXIS III - ACTION 3.4.2 sub a)
          </span>
          <section className="flex p-5 space-x-5">
            <Image
              src={regione.src}
              alt={''}
              width={0}
              height={0}
              style={{ width: `${regione.width / 2.5}px`, height: 'auto' }}
            />
            <Image
              src={toscana.src}
              alt={''}
              width={0}
              height={0}
              style={{ width: `${toscana.width / 2.5}px`, height: 'auto' }}
            />
            <Image
              src={repubblica.src}
              alt={''}
              width={0}
              height={0}
              style={{ width: `${repubblica.width / 2.5}px`, height: 'auto' }}
            />
            <Image
              src={unione.src}
              alt={''}
              width={0}
              height={0}
              style={{ width: `${unione.width / 2.5}px`, height: 'auto' }}
            />
          </section>
        </article>
      </footer>
    </div>
  );
}
export default Footer;
