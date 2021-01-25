import React from 'react';

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </>
  );
}
