import React from 'react';
// import './TextField.scss';
export const TextField = () => {
  return (
    <div className="text-field">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
    </div>
  );
};
TextField.displayName = 'Text Field';
