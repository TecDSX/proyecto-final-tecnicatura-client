import React, { Fragment } from 'react';
import '../styles/theme.scss';
import { RegisterForm } from '../components/RegisterForm/index';
import { FormProvider } from '../contexts/FormContext';

const RegisterPage = () => {
  return (
    <div className="backgroud-page">
      <FormProvider values={{ username: '', email: '', password: '' }}>
        <RegisterForm />
      </FormProvider>
    </div>
  );
};
RegisterPage.displayName = 'Register Page';
export default RegisterPage;
