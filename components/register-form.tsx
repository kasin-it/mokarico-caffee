import { useSupabse } from '@/app/hooks/use-supabse';
// import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';

function RegisterForm() {
  // const router = useRouter();
  const supabase = useSupabse();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const [repeatPassword, setRepeatPassword] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleLastNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleRepeatPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRepeatPassword(e.target.value);
  };

  const handleSignUp = (e: React.MouseEvent) => {
    e.preventDefault();

    const passwordsMtaching = password === repeatPassword;
    const dataNotEmpty =
      name && lastName && password && repeatPassword && email;

    if (!dataNotEmpty) {
      setError('Please fill all fields');
    } else if (!passwordsMtaching) {
      setError('Passwords do not match');
    } else {
      signUp();
    }
  };
  const signUp = async () => {
    const x = await supabase.supabse.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          name: name,
          last_name: lastName,
        },
      },
    });

    if (x.data.user) {
      window.location.href = '/account';
    } else {
      setError(String(x.error?.message));
      console.log(x);
    }
  };
  return (
    <div>
      <p className="text-red-500">{error}</p>
      <div className={'m-0 flex w-full justify-between  p-0'}>
        <input
          type="text"
          className={
            ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
          }
          placeholder="First Name"
          name="name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          className={
            ' mb-7 w-[190px] border border-gray-600/20 p-3 outline-none'
          }
          placeholder="Last Name"
          name="last_name"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </div>
      <input
        type="email"
        name="email"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Email*"
        required
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Password*"
        required
        value={password}
        onChange={handlePasswordChange}
      />
      <input
        type="password"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder="Repeat Password*"
        required
        value={repeatPassword}
        onChange={handleRepeatPasswordChange}
      />

      {/* <span className={'mb-4 text-sm'}>
        Please type the letters and numbers below
        <span className={'text-orange-600'}>*</span>
        </span>
        <input
        type="text"
        className={' mb-7 w-full border border-gray-600/20 p-3 outline-none'}
        placeholder=""
        required
      /> */}

      <div className={'mb-4 flex w-full flex-row justify-start'}>
        <input type="checkbox" required />
        <span className={'ms-4 items-start text-sm'}>
          Accept our
          <Link
            href={'#'}
            className={'text-gray-600 hover:text-orange-600 ml-2'}
          >
            Privacy Policy
          </Link>
        </span>
      </div>

      {/* IMPLEMENT SYMBOLS */}
      <button
        className={'w-full items-center bg-orange-600 px-6 py-3 text-white'}
        onClick={(event) => handleSignUp(event)}
        type="submit"
      >
        <span>REGISTER</span>
      </button>
    </div>
  );
}

export default RegisterForm;
