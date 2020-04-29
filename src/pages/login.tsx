import React from 'react';
import '../styles/theme.scss';
import { LoginForm } from '../components/LoginForm';
import { FormProvider } from '../contexts/FormContext';
const LoginPage = () => {
  return (
    <div className="backgroud-page">
      <FormProvider values={{ username: '', password: '' }}>
        <LoginForm />
      </FormProvider>
    </div>
  );
};
LoginPage.displayName = 'Login Page';
export default LoginPage;
