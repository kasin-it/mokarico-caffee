'use client';

import { useNavbarProperties } from '@/app/hooks/use-navbar-properties';
import { useEffect } from 'react';

interface ShopLayoutProps {
  children: React.ReactNode;
}

function ShopLayout({ children }: ShopLayoutProps) {
  const navbarProperties = useNavbarProperties();

  useEffect(() => {
    navbarProperties.setisTransparent(false);
  }, [navbarProperties]);

  return <>{children}</>;
}
export default ShopLayout;
