'use client';

import Modal from '../ui/modal';
import { useLoginModal } from '@/app/hooks/use-login-modal';
import { useState } from 'react';
import LoginForm from '../login-form';
import RegisterForm from '../register-form';

export const LoginModal = () => {
  const loginModal = useLoginModal();

  const [isLoginPage, setIsLoginPage] = useState(true);

  const handleLoginPageToggle = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setIsLoginPage((prev) => !prev);
  };

  return (
    <Modal
      isOpen={loginModal.isOpen}
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

          {isLoginPage ? <LoginForm /> : <RegisterForm />}
        </div>
      </div>
    </Modal>
  );
};
