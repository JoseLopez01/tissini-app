import React, { ChangeEventHandler, MouseEventHandler } from 'react';

export default function InputNumber({
  handleOnChange,
  name,
  onDecrement,
  onIncrement,
  value,
  min = 0,
  max = Number.MAX_SAFE_INTEGER
}: InputNumberProps) {
  return (
    <div>
      <button onClick={onDecrement} className="mx-1">
        <i className="fas fa-minus text-sm"></i>
      </button>
      <input
        type="number"
        className="border outline-none text-center w-3/6"
        min={min}
        max={max}
        name={name}
        value={value}
        onChange={handleOnChange}
      />
      <button onClick={onIncrement} className="mx-1">
        <i className="fas fa-plus text-sm"></i>
      </button>
    </div>
  );
}

interface InputNumberProps {
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  onIncrement: MouseEventHandler<HTMLButtonElement>;
  onDecrement: MouseEventHandler<HTMLButtonElement>;
  value: number;
  min?: number;
  max: number;
}
