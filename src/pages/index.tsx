import React, { useState } from 'react';
import { LoginForm } from '../components/LoginForm/index';
import { RegisterForm } from '../components/RegisterForm/index';
import { FormProvider } from '../contexts/FormContext';
const IndexPage = () => {
  const [login, setLogin] = useState(true);
  if (login)
    return (
      <div className="background-page">
        <FormProvider values={{ username: '', password: '' }}>
          <LoginForm />
        </FormProvider>
        <p className="register-label">If you not have a account</p>
        <button onClick={() => setLogin(false)}>Register</button>
      </div>
    );
  return (
    <div className="background-page">
      <FormProvider values={{ username: '', email: '', password: '' }}>
        <RegisterForm />
      </FormProvider>
      <p className="login-label">If you have a account</p>
      <button onClick={() => setLogin(true)}>Login</button>
    </div>
  );
};
// return (
//   <Fragment>
//     <FormProvider values={{ username: '', password: '' }}>
//       <LoginForm className={!loginState ? 'hide' : ''} />
//     </FormProvider>
//     <FormProvider values={{ username: '', password: '', email: '' }}>
//       <RegisterForm className={loginState ? 'hide' : ''} />
//     </FormProvider>
//   </Fragment>
// );
IndexPage.displayName = 'Index Page';
export default IndexPage;
