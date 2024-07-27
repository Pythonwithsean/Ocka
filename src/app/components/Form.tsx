'use client';
import '../styles/Form.css';
import { useState } from 'react';

export default function Form({ type }: { type: 'Login' | 'Signup' }) {
  const [username, setUsername] = useState<string | undefined>('');
  const [password, setPassword] = useState<string | undefined>();

  return (
    <div className="Container">
      <form action="" className="Form">
        <h1 className=" font-bold text-center text-2xl text-red-500">{type}</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" className=" p-2" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" className=" p-2" />
        {type === 'Login' ? (
          <p className=" mt-5">
            Dont have an Account? <a href="/signup">signup</a>
          </p>
        ) : (
          ''
        )}
      </form>
    </div>
  );
}
