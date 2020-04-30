import React, { useContext } from 'react';
import './RegisterForm.scss';
import { FormContext } from '../../contexts/FormContext';
import { TextField } from '../Textfield';
import { Button } from '../Button';
export const RegisterForm = (props: {
  className?: string;
}) => {
  const {
    // @ts-ignore
    values: { username, password, email },
    onChange,
  } = useContext(FormContext);
  return (
    <div className={`${props.className} register-box`}>
      <h2 className="register-box__title">WeCollab</h2>
      <TextField
        name="username"
        type="text"
        label="Username"
        value={username}
        onChange={onChange}
      />
      <TextField
        name="email"
        type="email"
        label="Email"
        value={email}
        onChange={onChange}
      />
      <TextField
        name="password"
        type="password"
        label="Password"
        value={password}
        onChange={onChange}
      />
      <Button type="submit" label="Sign Up" onClick={() => { }} />
      <p className="login-label">If you have a account</p>
      <Button
        type="submit"
        label="Login Here!"
        onClick={() => {
          document.location.href = 'login';
        }}
      />
    </div>
  );
};
RegisterForm.displayName = 'Login Form';
