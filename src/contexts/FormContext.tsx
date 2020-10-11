/* eslint-disable no-unused-vars */
/* eslint-disable react/display-name */
import React, {
  createContext,
  ChangeEvent,
  useState,
  ReactElement,
} from 'react';
export const FormContext = createContext({
  values: {},
  onChange: (event: ChangeEvent<HTMLInputElement>) => undefined,
  setInitialValues: (initialValues: object) => undefined,
});
export const FormProvider = (props: {
  values: object;
  children: ReactElement;
}) => {
  const [values, setValues] = useState(props.values || {});
  const onChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [name]: value });
  };
  const setInitialValues = (initialValues) => setValues(initialValues);
  const context = { values, onChange, setInitialValues };
  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  );
};
