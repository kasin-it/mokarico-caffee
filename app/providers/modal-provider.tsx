"use client"

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import React from 'react';

const ModalProvider = () => {
  const DynamicMenuModal = dynamic(
    () => import('@/components/modals/menu-modal').then((mod) => mod.MenuModal),
    {
      ssr: false,
    },
  );

  const DynamicArrowUpModal = dynamic(
    () =>
      import('@/components/modals/arrow-up-modal').then((mod) => mod.default),
    {
      ssr: false,
    },
  );

  const DynamicFilterModal = dynamic(
    () => import('@/components/modals/filter-modal').then((mod) => mod.FilterModal),
    {
      ssr: false,
    },
  );

  const DynamicCartModal = dynamic(
    () => import('@/components/modals/cart-modal').then((mod) => mod.CartModal),
    {
      ssr: false,
    },
  );

  const DynamicSmallMenuModal = dynamic(
    () =>
      import('@/components/modals/small-menu-modal').then((mod) => mod.SmallMenuModal),
    {
      ssr: false,
    },
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DynamicMenuModal />
      <DynamicCartModal />
      <DynamicSmallMenuModal />
      <DynamicArrowUpModal />
      <DynamicFilterModal />
    </>
  );
};

export default ModalProvider;
