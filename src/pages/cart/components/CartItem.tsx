import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../../core/constants';
import { Product, Variant } from '../../../core/models';
import { removeItem } from '../../../core/store/cart/cart.actions';
import { setActiveProduct } from '../../../core/store/category/category.actions';
import { openModal } from '../../../core/store/ui/ui.actions';

export default function CartItem({
  product,
  variant,
  quantity,
}: CartItemProps) {
  const dispatch = useDispatch();

  function handleOnEdit() {
    dispatch(setActiveProduct(product));
    dispatch(openModal());
  }

  function handleOnDelete() {
    dispatch(removeItem(product.id));
  }

  return (
    <div className="rounded shadow">
      <div className="mx-auto grid grid-cols-4">
        <img
          src={`${BASE_URL}/${product.image.url}`}
          alt={product.name}
          className="col-span-2"
        />
        <div className="grid grid-cols-4 p-2 border-l col-span-2">
          <div className="text-lg font-bold col-span-2">{product.name}</div>
          <div className="col-span-4">
            <span className="font-light">SKU:</span>{' '}
            <span className="font-semibold">{variant.sku}</span>
          </div>
          <div className="col-span-4">
            <span className="font-light">Talla:</span>{' '}
            <span className="font-semibold">{variant.size}</span>
          </div>
          <div className="col-span-4">
            <span className="font-light">Unidad:</span>{' '}
            <span className="font-semibold">${product.price}</span>
          </div>
          <div className="col-span-4">
            <span className="text-lg font-bold text-red-400">
              ${quantity * +variant.price}
            </span>
          </div>
          <div className="col-span-2">
            <button
              className="bg-blue-500 text-white w-10 h-10 rounded-full mx-1"
              onClick={handleOnEdit}
            >
              <i className="fas fa-pen"></i>
            </button>
          </div>
          <div className="col-span-2">
            <button
              className="bg-red-600 text-white w-10 h-10 rounded-full mx-1"
              onClick={handleOnDelete}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface CartItemProps {
  product: Product;
  variant: Variant;
  quantity: number;
}
