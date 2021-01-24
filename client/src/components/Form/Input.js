import React from 'react';

import styles from './Input.module.css';

export default function Input({
  label,
  type,
  name,
  value,
  onChange,
  ...props
}) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}
