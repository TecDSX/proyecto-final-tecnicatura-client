import React, { useContext } from 'react';
import './LoginForm.scss';
import { TextField } from '../Textfield';
import { FormContext } from '../../contexts/FormContext';
export const LoginForm = () => {
  const {
    // @ts-ignore
    values: { username, password },
    onChange,
  } = useContext(FormContext);
  return (
    <div className="login-box">
      <h2 className="login-box__title">WeCollab</h2>

      <TextField
        name="username"
        text="Username"
        type="text"
        value={username}
        onChange={onChange}
      />

      <TextField
        name="password"
        text="Password"
        type="password"
        value={password}
        onChange={onChange}
      />

      <div className="button-holder">
        <button type="submit">Login</button>
      </div>
    </div>
  );
};
LoginForm.displayName = 'Login Form';
