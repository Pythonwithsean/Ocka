'use client';
import '../styles/Form.css';
import { useState } from 'react';
import Navbar from './Navbar';

export default function Form({ type }: { type: 'Login' | 'Signup' }) {
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>();

  return (
    <div className="Container">
      <Navbar />
      <form action="" className="Form">
        <h1 className=" font-bold text-center text-2xl text-red-500">{type}</h1>

        {type === 'Signup' ? (
          <label htmlFor="password" className="pt-3">
            Email
          </label>
        ) : (
          ''
        )}
        {type === 'Signup' ? (
          <input type="email" name="email" id="email" className=" p-2" />
        ) : (
          ''
        )}
        <label htmlFor="username" pt-3>
          Username
        </label>
        <input type="text" name="username" id="username" className=" p-2" />
        <label htmlFor="password" className="pt-3">
          Password
        </label>
        <input type="password" name="password" id="password" className=" p-2" />
        {type === 'Login' ? (
          <p className=" mt-5">
            Don't have an Account?{' '}
            <a href="/signup" className="text-red-600 font-bold underline">
              Signup
            </a>
          </p>
        ) : (
          ''
        )}
        {type === 'Signup' ? (
          <p className=" mt-5">
            Already have an account ?{' '}
            <a href="/login" className="text-red-600 font-bold underline">
              Login
            </a>
          </p>
        ) : (
          ''
        )}
        {type === 'Login' ? (
          <p className=" mt-5">
            <a href="/login" className="text-red-600 font-bold underline">
              Forgot Password?{' '}
            </a>
          </p>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}
