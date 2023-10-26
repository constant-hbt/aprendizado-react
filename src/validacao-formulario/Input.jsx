import React from 'react';

const Input = ({
  id,
  label,
  onChange,
  type,
  value,
  onBlur,
  placeholder,
  error,
}) => {
  return (
    <>
      <label htmlFor={id}></label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
