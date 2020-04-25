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
  const context = { values, onChange };
  return (
    <FormContext.Provider value={context}>
      {props.children}
    </FormContext.Provider>
  );
};
