import React from 'react';
import './LoginForm.scss';
import { TextField } from '../Textfield';
export const LoginForm = () => {
  return (
    <div className="login-box">
      <h2 className="login-box__title">WeCollab</h2>

      <TextField />

      <TextField />

      <TextField />

      <div className="button-holder">
        <button type="submit">Login</button>
      </div>
    </div>
  );
};
LoginForm.displayName = 'Login Form';
