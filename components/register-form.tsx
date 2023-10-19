import { useSupabse } from '@/app/hooks/use-supabse';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

function RegisterForm() {
  const router = useRouter();

  const supabase = useSupabse();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.supabse.auth.onAuthStateChange(() => {
      router.refresh();
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase, router]);

  const signUp = () => {
    supabase.supabse.auth.signUp({
      email: 's@gmail.com',
      password: 'sup3rs3cur3',
    });
  };
  return (
    <form>
      <div className={'m-0 flex w-full justify-between  p-0'}>
        <input
          type="text"
          className={
            ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
          }
          placeholder="First Name"
          name="firstName"
        />
        <input
          type="text"
          className={
            ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
          }
          placeholder="Last Name"
          name="lastName"
        />
      </div>
      <input
        type="email"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Email*"
        required
      />
      <input
        type="password"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Password*"
        required
      />
      <input
        type="password"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Repeat Password*"
        required
      />

      <span className={'mb-4 text-sm'}>
        Please type the letters and numbers below
        <span className={'text-orange-600'}>*</span>
      </span>
      <input
        type="text"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder=""
        required
      />

      <div className={'mb-4 flex w-full flex-row justify-start'}>
        <input type="checkbox" />

        <span className={'ms-4 items-start text-sm'}>
          Accept our
          <Link href={'#'} className={'text-gray-600 hover:text-orange-600'}>
            Privacy Policy
          </Link>
        </span>
      </div>

      {/* IMPLEMENT SYMBOLS */}
      <button
        className={'w-full items-center bg-orange-600 px-6 py-3 text-white'}
        type="submit"
        onClick={signUp}
      >
        <span>REGISTER</span>
      </button>
    </form>
  );
}
export default RegisterForm;
