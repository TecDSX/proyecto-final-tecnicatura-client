import React, { Fragment, useState } from 'react';
import { LoginForm } from '../components/LoginForm';
import { RegisterForm } from '../components/RegisterForm/index';
const IndexPage = () => {
  const [state, setState] = useState('login');
  if (state === 'login')
    return (
      <Fragment>
        <LoginForm />
        <button
          onClick={() => {
            setState('register');
          }}
        >
          Register
        </button>
      </Fragment>
    );
  return (
    <Fragment>
      <RegisterForm />
      <button
        onClick={() => {
          setState('login');
        }}
      >
        Login
      </button>
    </Fragment>
  );
};
IndexPage.displayName = 'Index Page';
export default IndexPage;
