'use client';

import supabase from '@/config/supabaseClient';
import { useEffect, useState } from 'react';
import Image from 'next/image';

function page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('coffees').select('*');

      if (error) {
        console.log(error);
      }
      if (data) {
        setData(data);
        console.log(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="mt-[200px]">
        {data && <Image src={data[0].img} width={400} height={400} alt="img" />}
      </div>
    </>
  );
}
export default page;
