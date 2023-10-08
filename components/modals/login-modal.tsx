'use client';

import Modal from '../ui/modal';
import { Search, Triangle, X } from 'lucide-react';
import DefaultButton from '../ui/default-button';
import { useLoginModal } from '@/app/hooks/use-login-modal';
import Link from 'next/link';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { Database } from '@/lib/database.types';

export const LoginModal = () => {
  const loginModal = useLoginModal();

  const [isLoginPage, setIsLoginPage] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.refresh();
  };

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.refresh();
  };

  const handleLoginPageToggle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <Modal
      isOpen={loginModal.isOpen}
      // onClose={loginModal.onClose}
      overlayClassName={'h-0 w-0'}
      className={'top-[82px] z-40'}
    >
      <div
        className={
          'absolute z-40 flex h-full w-full flex-col items-center space-y-4 bg-white px-12 py-10 pb-4'
        }
      >
        <div className={'flex w-[400px] flex-col items-center'}>
          <div className={'flex-row items-center text-3xl'}>
            <button
              className={`mb-10 mt-4 px-4 py-2 ${
                isLoginPage ? 'text-orange-600' : 'text-slate-700 opacity-50'
              } `}
              disabled={isLoginPage}
              onClick={handleLoginPageToggle}
            >
              Login
            </button>
            <button
              className={`mt-4 px-4 py-2 ${
                !isLoginPage ? 'text-orange-600' : 'text-black opacity-50'
              } `}
              disabled={!isLoginPage}
              onClick={handleLoginPageToggle}
            >
              Register
            </button>
          </div>

          {isLoginPage ? (
            <form>
              <input
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
              />
              <div
                className={'flex w-full flex-row items-center justify-between'}
              >
                <Link
                  href={'#'}
                  className={'text-gray-500 hover:text-orange-600'}
                >
                  <span className={'text-md'}>Forgot Your Password?</span>
                </Link>
                <button
                  className={'items-center bg-orange-600 px-6 py-3 text-white'}
                  onClick={handleSignIn}
                >
                  <span>LOGIN</span>
                </button>
              </div>
            </form>
          ) : (
            <form>
              <div className={'m-0 flex w-full justify-between  p-0'}>
                <input
                  type="text"
                  className={
                    ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
                  }
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className={
                    ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
                  }
                  placeholder="Last Name"
                />
              </div>
              <input
                type="email"
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                placeholder="Email*"
                required
              />
              <input
                type="password"
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                placeholder="Password*"
                required
              />
              <input
                type="password"
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                placeholder="Repeat Password*"
                required
              />

              <span className={'mb-4 text-sm'}>
                Please type the letters and numbers below
                <span className={'text-orange-600'}>*</span>
              </span>
              <input
                type="text"
                className={
                  ' mb-7 w-full border border-gray-600/20 p-3 outline-none'
                }
                placeholder=""
                required
              />

              <div className={'mb-4 flex w-full flex-row justify-start'}>
                <input type="checkbox" />

                <span className={'ms-4 items-start text-sm'}>
                  Accept our{' '}
                  <Link
                    href={'#'}
                    className={'text-gray-600 hover:text-orange-600'}
                  >
                    Privacy Policy
                  </Link>
                </span>
              </div>

              {/* IMPLEMENT SYMBOLS */}
              <button
                className={
                  'w-full items-center bg-orange-600 px-6 py-3 text-white'
                }
              >
                <span>REGISTER</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </Modal>
  );
};
