import React from 'react';
export const LoginForm = () => {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Login</button>
    </div>
  );
};
LoginForm.displayName = 'Login Form';
