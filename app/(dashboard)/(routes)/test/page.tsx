'use client';

import supabase from '@/config/supabaseClient';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    try {
      const data = async supabase.
    } catch {
      setData('fuck you');
    }
  }, []);

  return (
    <>
      <div className="mt-[200px]">
        {data ? toString(data) : 'no data'}
        {data && <Image src={data.img} width={400} height={400} alt="img" />}
      </div>
    </>
  );
}
export default page;
