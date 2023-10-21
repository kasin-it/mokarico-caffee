// import { useSupabse } from '@/app/hooks/use-supabse';
// import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
// import { cookies } from 'next/headers';

// function page() {
//   const cookieStore = cookies();
//   const supabase = createServerComponentClient({
//     cookies: () => cookieStore,
//   });

//   const getUser = async () => {
//     const data = await supabase.auth.getUser();
//     const user = data.data.user;
//     return user;
//   };
  
//   const user = getUser();
//   console.log(user)

//   return <div className="mt-[300px]"> x {JSON.stringify(user)}</div>;
// }
// export default page;
