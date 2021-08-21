import { useSelector } from 'react-redux';
import { RootState } from '../../core/store/store';
import CartItem from './components/CartItem';

export default function Cart() {
  const { items } = useSelector((state: RootState) => state.cart);

  return (
    <div className="w-4/12 mx-auto p-2 relative">
      {items.length && items.map((item) => <CartItem {...item} key={item.product.id} />)}
    </div>
  );
}
