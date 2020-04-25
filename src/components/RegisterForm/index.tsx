import React, { useContext } from 'react';
import './RegisterForm.scss';
import { FormContext } from '../../contexts/FormContext';
import { TextField } from '../Textfield';
export const RegisterForm = () => {
  const {
    // @ts-ignore
    values: { username, password, email },
    onChange,
  } = useContext(FormContext);
  return (
    <div className="register-box">
      <h2 className="login-box__title">WeCollab</h2>
      <TextField
        name="username"
        type="text"
        text="Username"
        value={username}
        onChange={onChange}
      />
      <TextField
        name="email"
        type="email"
        text="Email"
        value={email}
        onChange={onChange}
      />
      <TextField
        name="password"
        type="password"
        text="Password"
        value={password}
        onChange={onChange}
      />
      <div className="button-holder">
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};
RegisterForm.displayName = 'Login Form';
