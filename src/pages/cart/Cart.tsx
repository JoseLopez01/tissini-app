import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';
import CartItem from './components/CartItem';

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  useEffect(() => {});

  return (
    <div className="md:w-4/12 mx-auto p-2 relative">
      <div>
        {items.length ? (
          items.map((item) => <CartItem {...item} key={item.product.id} />)
        ) : (
          <div>
            <img src="https://mitienda.moda/img/empty-cart.1bfda269.png" alt="Empty" className="mx-auto my-auto" />
            <div className="text-red-500 font-bold text-center">
              No hay nada en el carrito
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
