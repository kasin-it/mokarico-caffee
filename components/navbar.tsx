'use client';

import logo from 'public/logo/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { useMenuModal } from '@/app/hooks/use-menu-modal';
import { useCartModal } from '@/app/hooks/use-cart-modal';
import { useSmallMenuModal } from '@/app/hooks/use-small-menu-modal';
import { useSearchModal } from '@/app/hooks/use-search-modal';
import { useLoginModal } from '@/app/hooks/use-login-modal';
import { useNavbarProperties } from '@/app/hooks/use-navbar-properties';
import useCart from '@/app/hooks/use-cart';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const navbarProperties = useNavbarProperties();
  const menuModal = useMenuModal();
  const smallMenuModal = useSmallMenuModal();
  const cartModal = useCartModal();
  const searchModal = useSearchModal();
  const loginModal = useLoginModal();
  const cart = useCart();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <nav
      className={cn(
        'fixed left-0 top-0 z-50 flex w-full items-center justify-between px-4 py-3 transition-colors duration-200',
        navbarProperties.isTransparent
          ? 'bg-transparent text-white'
          : 'bg-white text-black drop-shadow-sm',
      )}
    >
      <button
        onClick={smallMenuModal.onOpen}
        className={cn(
          `flex flex-row items-center px-4 py-3 lg:hidden`,
          navbarProperties.isTransparent
            ? 'text-white md:text-black'
            : 'text-black',
        )}
        aria-label="menu button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className={'h-7 w-7'}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 9h16.5m-16.5 6.75h16.5"
          />
        </svg>
      </button>
      <div className={'w-[140px] lg:w-[200px]'}>
        <Link href={'/'}>
          <Image
            src={logo}
            alt="logo"
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </Link>
      </div>

      {/* SEARCH */}
      <section className={'flex items-center'}>
        <section className={'flex space-x-5 px-0 pr-2 lg:px-8'}>
          <button
            onClick={searchModal.toggle}
            className={'hidden cursor-pointer lg:block'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className={
                'h-7 w-7 transition duration-150 hover:text-orange-500'
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>

          {/* ACCOUNT */}
          <button
            onClick={loginModal.toggle}
            className={'hidden cursor-pointer lg:block'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className={
                'h-7 w-7 transition duration-150 hover:text-orange-500'
              }
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>

          {/* CART */}

          <button onClick={cartModal.onOpen} className={'cursor-pointer'}>
            <div className={'relative'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                className={
                  'h-7 w-7 transition duration-150 hover:text-orange-500'
                }
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <div
                className={
                  'absolute left-5 top-4 rounded-full bg-orange-500 px-1 text-xs text-white'
                }
              >
                {cart.items.length}
              </div>
            </div>
          </button>
        </section>

        {/* MENU BUTTON */}
        <button
          onClick={menuModal.onOpen}
          className={cn(
            `hidden rounded-full outline lg:block items-center px-4 py-3 outline-2 duration-300 ease-out hover:bg-orange-500 hover:text-white hover:outline-none hover:outline-offset-0 hover:outline-orange-500`,
            navbarProperties.isTransparent ? 'outline-white' : 'outline-black',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.2}
            stroke="currentColor"
            className={'h-7 w-7'}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
