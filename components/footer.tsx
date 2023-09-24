import miscele_svg from '@/public/svg/miscele.svg';
import Image from 'next/image';
import Separator from './ui/separator';
import Link from 'next/link';
import { Headphones, Mail } from 'lucide-react';
import AnimatedButton from './ui/animated-button';

function Footer() {
  const Routes = [
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
    <footer>
      <Separator />
      <section className={'py-6'}>
        <h3>Certifications are an appropriate reward for our quality </h3>
        <article className={'flex space-x-5 px-11'}>
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />{' '}
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />{' '}
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />
        </article>{' '}
        <article className={'flex space-x-5 px-11'}>
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />{' '}
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />{' '}
          <Image
            src={miscele_svg}
            alt="miscele"
            height={miscele_svg.height}
            width={miscele_svg.width}
          />
        </article>
      </section>
      <Separator />
      <section className={'grid grid-cols-1 py-10 md:grid-cols-2'}>
        <form className={'w-[360px]'}>
          Keep up to date with us
          <input
            type="email"
            className={
              'mb-7 w-full border-b-2 border-b-gray-600 p-3 outline-none'
            }
            placeholder="Email*"
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
      </section>
      <Separator />
      <article>
        <Headphones />
        We are available to answer any query by phone from Mon - Fri 9:00 -12:30
        and 14:00 - 17:30 at 055 849 5085 or email at info@mokarico.com
      </article>
      <Separator />
      <article></article>
    </footer>
  );
}
export default Footer;
