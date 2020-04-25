// eslint-disable-next-line no-unused-vars
import React, { useState, ChangeEvent } from 'react';
// import './TextField.scss';
export const TextField = (props: {
  name: string;
  text: string;
  type: string;
  value?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  const [value, setValue] = useState(props.value || null);
  return (
    <div className="text-field">
      <label htmlFor={props.name}>{props.text}</label>
      <input
        type={props.type}
        name={props.name}
        id={props.name}
        value={props.value || value}
        onChange={
          props.onChange
            ? props.onChange
            : ({ target: { value } }) => {
                setValue(value);
              }
        }
      />
    </div>
  );
};
TextField.displayName = 'Text Field';
