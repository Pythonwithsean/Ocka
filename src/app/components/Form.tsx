'use client';
import { ChangeEvent, useState } from 'react';
import '../styles/Form.css';
import Navbar from './Navbar';
import trpc from '../utils/trpc-client';

export default function Form({ type }: { type: 'Login' | 'Signup' }) {
  type detailsType = {
    email: string;
    username: string;
    password: string;
  };

  async function handleSubmit(
    event: React.MouseEvent,
    type: 'Login' | 'Signup'
  ) {
    event.preventDefault();
    const { username, password, email } = details;
    switch (type) {
      case 'Login':
        //login
        break;

      default:
        const response = await trpc.signup.mutate({
          username,
          password,
          email,
        });
        console.log(response);
        break;
    }

    console.log(type);
  }

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
    <div className="Container">
      <Navbar />
      <div className="box">
        <div className="box2">
          <img src="/images/blob.svg" className="blob-form" alt="blob" />
        </div>
        <form action="" className="Form">
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
              id="email"
              className=" p-2 "
              value={details.email}
              onChange={(e) => {
                handleInput(e, 'email');
              }}
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
            key={'username'}
            className="p-2"
            value={details.username}
            onChange={(e) => {
              handleInput(e, 'username');
            }}
          />
          <label htmlFor="password" className="pt-3 text-red-600">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className=" p-2"
            value={details.password}
            onChange={(e) => {
              handleInput(e, 'password');
            }}
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
  );
}
