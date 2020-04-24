import React from 'react';
import './RegisterForm.scss';
export const RegisterForm = () => {
  return (
    <div className="register-box">
      <h2 className="login-box__title">WeCollab</h2>
      <div className="text-field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="text-field">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="text-field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="button-holder">
        <button type="submit">Sign Up</button>
      </div>
    </div>
  );
};
RegisterForm.displayName = 'Login Form';
