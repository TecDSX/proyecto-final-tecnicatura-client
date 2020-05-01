import React, { useContext, useEffect, useState } from 'react';
import './LoginForm.scss';
import { TextField } from '../Textfield';
import { FormContext } from '../../contexts/FormContext';
import { Button } from '../../components/Button';
export const LoginForm = (props: { className?: string }) => {
  const initialValues = { username: '', password: '' };
  // eslint-disable-next-line no-unused-vars
  const [clear, setClear] = useState(false);
  const {
    // @ts-ignore
    values,
    onChange,
    setInitialValues,
  } = useContext(FormContext);
  useEffect(() => {
    setInitialValues(initialValues);
  }, []);
  useEffect(() => {
    if (values === initialValues) setClear(true);
  }, [values]);
  // @ts-ignore
  const { username, password } = values;
  return (
    <form className={`${props.className} login-box`}>
      <h2 className="login-box__title">WeCollab</h2>
      <TextField
        name="username"
        label="Username"
        type="text"
        value={username}
        onChange={onChange}
        required={true}
      />
      <TextField
        name="password"
        label="Password"
        type="password"
        value={password}
        onChange={onChange}
        required={true}
      />
      <Button type="submit" label="Login" onClick={() => {}} />
    </form>
  );
};
LoginForm.displayName = 'Login Form';
