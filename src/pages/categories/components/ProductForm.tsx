import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '../../../core/constants';
import { RootState } from '../../../core/store/store';
import InputNumber from '../../../components/InputNumber';
import { useEffect } from 'react';

export default function ProductForm() {
  const { activeProduct } = useSelector((state: RootState) => state.category);

  const [form, setForm] = useState({
    size: '0',
    quantity: 1,
  });

  const { size, quantity } = form;

  const [max, setMax] = useState(0);

  useEffect(() => {
    const newMax = activeProduct?.variants.find(
      (variant) => variant.size === size
    )?.quantity;
    if (newMax) {
      setMax(newMax);
    }
  }, [activeProduct?.variants, size]);

  function handleOnChange({ target }: ChangeEvent<HTMLSelectElement>) {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  }

  function handleOnIncrement() {
    setForm({
      ...form,
      quantity: quantity + 1,
    });
  }

  function handleOnDecrement() {
    setForm({
      ...form,
      quantity: quantity - 1,
    });
  }

  function handleOnChangeQuantity({ target }: ChangeEvent<HTMLInputElement>) {
    const value = Number.parseInt(target.value);
    if (!isNaN(value)) {
      setForm({
        ...form,
        quantity: value <= max ? value : max,
      });
    } else {
      setForm({
        ...form,
        quantity: 1
      })
    }
  }

  function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <img
        src={`${BASE_URL}/${activeProduct?.image.url}`}
        alt={activeProduct?.name}
        className="h-72 w-72"
      />
      <div className="grid grid-cols-4 gap-1 mt-1">
        <div className="col-span-2">
          <select
            name="size"
            className="border-b w-full py-2 px-1 outline-none"
            value={size}
            onChange={handleOnChange}
          >
            <option value="0" disabled>
              Talla
            </option>
            {activeProduct?.variants.map((variant) => (
              <option value={variant.size} key={variant.id}>
                {' '}
                {variant.size}{' '}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-2 flex justify-center items-center">
          <InputNumber
            name="quantity"
            min={1}
            max={max}
            value={quantity}
            handleOnChange={handleOnChangeQuantity}
            onDecrement={handleOnDecrement}
            onIncrement={handleOnIncrement}
          />
        </div>
        <div className="col-span-4">
          <button className="outline-none py-1 px-4 bg-red-400 w-full text-white">Agregar</button>
        </div>
      </div>
    </form>
  );
}
