'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';

const AuthForm = ({ type }: { type: string }) => {
  const [user, setUser] = useState(null);

  return (
    <>
      <section className='auth-form'>
        <header className='flex flex-col gap-5 md:gap-8'>
          <Link href='/' className='cursor-pointer flex items-center gap-1'>
            <Image src='/icons/logo.svg' width={34} height={34} priority alt='Horizon logo' />
            <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
          </Link>
          <div className='flex flex-col gap-1 md:gap-3'>
            <h1 className='text-24 lg:text-36 font-semibold text-gray-900'>
              {user ? 'Link Account' : type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            </h1>
            <p className='text-16 font-normal text-gray-600'>
              {user ? 'Link your account to get started' : 'Please enter your details'}
            </p>
          </div>
        </header>
        {user ? (
          <div className='flex flex-col gap-4'>{/* plaid link */}</div>
        ) : (
          <>
            {type === 'sign-in' ? <SignInForm /> : <SignUpForm setUser={setUser} />}

            <footer className='flex justify-center gap-1'>
              <p className='text-14 font-normal text-gray-600'>
                {type === 'sign-in' ? "Don't not have an account?" : 'Already have an account?'}
              </p>
              <Link href={type === 'sign-in' ? '/sign-up' : '/sign-in'} className='form-link'>
                {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
              </Link>
            </footer>
          </>
        )}
      </section>
    </>
  );
};

export default AuthForm;
