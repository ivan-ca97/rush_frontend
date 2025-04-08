'use client';

import React, { ChangeEvent } from 'react';

interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  name?: string;
  label?: string;
  type?: string;
}

export const TextInput = ({
  value,
  onChange,
  placeholder,
  name,
  label,
  type = 'text',
}: TextInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="text-input">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        id={name}
        name={name}
        className="input-field"
      />
    </div>
  );
}

export default TextInput;