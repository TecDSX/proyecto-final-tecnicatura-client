import React, { useContext } from 'react';
import './LoginForm.scss';
import { TextField } from '../Textfield';
import { FormContext } from '../../contexts/FormContext';
import { Button } from '../../components/Button';
export const LoginForm = (props: {
  className?: string;
}) => {
  const {
    // @ts-ignore
    values: { username, password },
    onChange,
  } = useContext(FormContext);
  return (
    <div className={`${props.className} login-box`}>
      <h2 className="login-box__title">WeCollab</h2>
      <TextField
        name="username"
        label="Username"
        type="text"
        value={username}
        onChange={onChange}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={onChange}
      />
      <Button type="submit" label="Login" onClick={() => { }} />
      <p className="register-label">If you not have a account</p>
      <Button
        type="submit"
        label="Register Here!"
        onClick={() => {
          document.location.href = 'register';
        }}
      />
    </div>
  );
};
LoginForm.displayName = 'Login Form';
