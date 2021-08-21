import React, { ChangeEventHandler, MouseEventHandler } from 'react';

export default function InputNumber({
  handleOnChange,
  name,
  onDecrement,
  onIncrement,
  value,
}: InputNumberProps) {
  return (
    <>
      <button onClick={onDecrement}>
        <i className="fas fa-minus text-sm"></i>
      </button>
      <input
        type="number"
        className="border outline-none text-center w-1/2"
        name={name}
        value={value}
        onChange={handleOnChange}
      />
      <button onClick={onIncrement}>
        <i className="fas fa-plus text-sm"></i>
      </button>
    </>
  );
}

interface InputNumberProps {
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
  onDecrement: MouseEventHandler<HTMLButtonElement>;
  value: number;
}
