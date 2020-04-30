import React, { Fragment } from 'react';
import './AccountForm.scss';
import { LoginForm } from '../LoginForm';
import { RegisterForm } from '../RegisterForm';
import { FormProvider } from '../../contexts/FormContext';
export const AccountForm = () => {
  const loginState: boolean = false;
  return (
    <Fragment>
      <FormProvider values={{ username: '', password: '' }}>
        <LoginForm className={!loginState ? 'hide' : ''} />
      </FormProvider>
      <FormProvider values={{ username: '', password: '', email: '' }}>
        <RegisterForm className={loginState ? 'hide' : ''} />
      </FormProvider>
    </Fragment>
  );
};
