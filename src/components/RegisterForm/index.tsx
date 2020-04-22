import React from 'react';
export const RegisterForm = () => {
  return (
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Send</button>
    </div>
  );
};
RegisterForm.displayName = 'Login Form';
