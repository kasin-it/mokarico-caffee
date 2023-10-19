'use client';

import { useSupabse } from '@/app/hooks/use-supabse';
import {
  createClientComponentClient,
} from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

function LoginForm() {
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

  const signIn = () => {
    supabase.supabse.auth.signInWithPassword({
      email: 'sup3rs3cur3@gmail.com',
      password: 'sup3rs3cur3',
    });
  };

  return (
    <form action="api/auth/login" method="post">
      <input
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        name="email"
        autoComplete="auto"
        placeholder="Email"
        required
      />

      <input
        type="password"
        name="password"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        autoComplete="auto"
        placeholder="Password"
        required
      />
      <div className={'flex w-full flex-row items-center justify-between'}>
        <Link href={'#'} className={'text-gray-500 hover:text-orange-600'}>
          <span className={'text-md'}>Forgot Your Password?</span>
        </Link>
        <button
          type="submit"
          className={'items-center bg-orange-600 px-6 py-3 text-white'}
          onClick={signIn}
        >
          <span>LOGIN</span>
        </button>
      </div>
    </form>
  );
}
export default LoginForm;
