// eslint-disable-next-line no-unused-vars
import React, { useState, ChangeEvent } from 'react';
import './Button.scss';
export const Button = (props: {
  label: string;
  onClick: any;
  type: 'button' | 'submit' | 'reset';
}) => {
  return (
    <div className="button-holder">
      <button type={props.type} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
};
