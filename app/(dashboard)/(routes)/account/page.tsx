// 'use client';

import AccountInfo from '@/components/account-info';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

// import { useSupabse } from '@/app/hooks/use-supabse';
// import { redirect, useRouter } from 'next/navigation';
// import { useEffect, useState } from 'react';

// function page() {
//   const supabase = useSupabse();
//   const router = useRouter();

//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const {
//       data: { subscription },
//     } = supabase.supabse.auth.onAuthStateChange(() => {
//       router.refresh();
//     });

//     return () => {
//       subscription.unsubscribe();
//     };
//   }, [supabase, router]);

//   useEffect(() => {
//     const getUser = async () => {
//       const data = await supabase.supabse.auth.getUser();

//       if (!data.data.user) {
//         router.push('/');
//       }

//       setUser(data.data.user);
//     };

//     getUser();
//   }, []);

//   return <div className="mt-[300px]"> x {JSON.stringify(user)}</div>;
// }
// export default page;

async function page() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const data = await supabase.auth.getUser();

  if (!data.data.user) {
    redirect('/');
  }
  const user = data.data.user;
  return (
    <section className="w-full flex items-center justify-center mt-[120px] mb-[120px]">
      <AccountInfo />
    </section>
  );
}
export default page;
