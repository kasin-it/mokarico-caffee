import Link from 'next/link';

function RegisterForm() {
  return (
    <form action="api/auth/sign-up" method="post">
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
          Accept our{' '}
          <Link href={'#'} className={'text-gray-600 hover:text-orange-600'}>
            Privacy Policy
          </Link>
        </span>
      </div>

      {/* IMPLEMENT SYMBOLS */}
      <button
        className={'w-full items-center bg-orange-600 px-6 py-3 text-white'}
        type="submit"
      >
        <span>REGISTER</span>
      </button>
    </form>
  );
}
export default RegisterForm;
