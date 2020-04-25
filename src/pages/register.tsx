import React, { Fragment } from 'react';
import { RegisterForm } from '../components/RegisterForm/index';
import { FormProvider } from '../contexts/FormContext';

const RegisterPage = () => {
  return (
    <Fragment>
      <FormProvider values={{ username: '', email: '', password: '' }}>
        <RegisterForm />
      </FormProvider>
      <button
        onClick={() => {
          document.location.href = 'login';
        }}
      >
        Login
      </button>
    </Fragment>
  );
};
RegisterPage.displayName = 'Register Page';
export default RegisterPage;
