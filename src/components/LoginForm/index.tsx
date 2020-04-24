import React from 'react';
import './LoginForm.scss';
export const LoginForm = () => {
  return (
    <div className="login-box">
      <h2 className="login-box__title">WeCollab</h2>
      <div className="text-field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
      </div>
      <div className="text-field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>
      <div className="button-holder">
        <button type="submit">Login</button>
      </div>
    </div>
  );
};
LoginForm.displayName = 'Login Form';
