/* eslint-disable no-case-declarations */
'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Alert from '@mui/material/Alert';

import '../styles/Form.css';

import trpc from '../utils/trpc-client';

import Logo from './Logo';

export default function Form({ type }: { type: 'Login' | 'Signup' }) {
  interface detailsType {
    email: string;
    username: string;
    password: string;
  }

  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<'success' | 'error'>('success');
  const [alertMessage, setalertMessage] = useState<string>();

  async function handleSubmit(
    event: React.MouseEvent,
    type: 'Login' | 'Signup'
  ) {
    event.preventDefault();
    const { username, password, email } = details;
    if (type === 'Signup' && !username && !password && !email) {
      setMessage('error');
      setalertMessage('Please Fill in all the Details to Signup');
      setSuccess(true);
      return;
    } else if (type === 'Login' && !username && !password) {
      console.log('Login');
      setMessage('error');
      setalertMessage('Please Fill in all the Details to Login');
      setSuccess(true);
      return;
    }
    let response;
    switch (type) {
      case 'Login':
        response = await trpc.login.mutate({ username, password });
        if (response) {
          console.log(response);
          if (response.success === false) {
            setMessage('error');
            setalertMessage(response.message);
            setSuccess(true);
          } else {
            setalertMessage(response.message);
            setMessage('success');
            setSuccess(true);
          }
        }
        break;
      default:
        response = await trpc.signup.mutate({
          username,
          password,
          email,
        });
        if (response) {
          if (response.success === false) {
            setMessage('error');
            setalertMessage(response.message);
            setSuccess(true);
          } else {
            setalertMessage(response.message);
            setMessage('success');
            setSuccess(true);
          }
        }
        break;
    }
    console.log(type);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (success) {
        setSuccess(false);
      }
    }, 1300);
    return () => {
      timer;
    };
  }, [success]);

  type inputType = 'username' | 'password' | 'email';

  function handleInput(
    event: ChangeEvent<HTMLInputElement>,

    inputType: inputType
  ) {
    switch (inputType) {
      case 'email':
        setDetails((prev) => ({
          ...prev,

          email: event.target.value,
        }));

        break;

      case 'password':
        setDetails((prev) => ({
          ...prev,

          password: event.target.value,
        }));

        break;

      case 'username':
        setDetails((prev) => ({
          ...prev,

          username: event.target.value,
        }));

        break;
    }
  }

  const [details, setDetails] = useState<detailsType>({
    username: '',

    password: '',

    email: '',
  });

  return (
    <>
      <Logo />

      {success ? (
        <Alert
          variant="filled"
          severity={message}
          style={{
            position: 'fixed',
            bottom: 0,
            padding: '5px',
            width: '100%',
            height: '60px',
            fontWeight: '800',
            fontSize: '1.2em',
          }}
        >
          {alertMessage}
        </Alert>
      ) : (
        ''
      )}
      <div className="Container">
        <div className="box">
          <div className="box2"></div>
          <form action={''} method="POST" className="Form">
            <h1 className=" font-bold text-center text-3xl text-red-600 border-b-red-600 border-b pb-4 ">
              {type === 'Login'
                ? 'Login into your Account'
                : 'Create a new Account'}
            </h1>

            {type === 'Signup' ? (
              <label htmlFor="password" className="pt-3 text-red-600">
                Email
              </label>
            ) : (
              ''
            )}

            {type === 'Signup' ? (
              <input
                type="email"
                name="email"
                required
                id="email"
                className=" p-2 "
                value={details.email}
                onChange={(e) => {
                  handleInput(e, 'email');
                }}
                placeholder="hello@example.com"
              />
            ) : (
              ''
            )}

            <label htmlFor="username" className="pt-3 text-red-600">
              Username
            </label>

            <input
              type="text"
              name="username"
              id="username"
              required
              key={'username'}
              className="p-2"
              value={details.username}
              onChange={(e) => {
                handleInput(e, 'username');
              }}
              placeholder="Ocka"
            />

            <label htmlFor="password" className="pt-3 text-red-600">
              Password
            </label>

            <input
              type="password"
              name="password"
              required
              id="password"
              className=" p-2"
              value={details.password}
              onChange={(e) => {
                handleInput(e, 'password');
              }}
              placeholder="Ocka is the best"
            />

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
                <a
                  href="/forgotpassword"
                  className="text-red-600 font-bold underline"
                >
                  Forgot Password?{' '}
                </a>
              </p>
            ) : (
              ''
            )}

            <br />

            <button
              type="submit"
              className="create-cv-button"
              onClick={(e) => {
                handleSubmit(e, type);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
