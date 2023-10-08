'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const DynamicSearchModal = dynamic(
  () =>
    import('@/components/modals/search-modal').then((mod) => mod.SearchModal),
  {
    ssr: false,
  },
);

const DynamicLoginModal = dynamic(
  () => import('@/components/modals/login-modal').then((mod) => mod.LoginModal),
  {
    ssr: false,
  },
);

const FormProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DynamicSearchModal />
      <DynamicLoginModal />
    </>
  );
};

export default FormProvider;
