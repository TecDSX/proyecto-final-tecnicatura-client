import React, { Fragment } from 'react';
import { LoginForm } from '../components/LoginForm';
import { FormProvider } from '../contexts/FormContext';

const LoginPage = () => {
  return (
    <Fragment>
      <FormProvider values={{ username: '', password: '' }}>
        <LoginForm />
      </FormProvider>
      <button
        onClick={() => {
          document.location.href = 'register';
        }}
      >
        Register
      </button>
    </Fragment>
  );
};
LoginPage.displayName = 'Login Page';
export default LoginPage;
