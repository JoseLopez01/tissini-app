import { useDispatch } from 'react-redux';
import { BASE_URL } from '../../../core/constants';
import { Product } from '../../../core/models';
import { setActiveProduct } from '../../../core/store/category/category.actions';
import { openModal } from '../../../core/store/ui/ui.actions';

export default function SectionSliderItem({ product }: SectionSliderItemProps) {

  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(setActiveProduct(product));
    dispatch(openModal());
  }

  return (
    <div className="shadow rounded">
      <img
        src={`${BASE_URL}/${product.image.url}`}
        alt={product.name}
        className="rounded"
      />
      <div className="grid grid-cols-4 p-1">
        <div className="text-lg font-bold col-span-4">{product.name}</div>
        <div className="uppercase text-sm col-span-4">
          {product.categories.category}
        </div>
        <div className="font-semibold col-span-3">${product.price}</div>
        <button className="col-span-1" onClick={handleAdd}>
          <i className="fas fa-cart-plus text-red-400"></i>
        </button>
      </div>
    </div>
  );
}

interface SectionSliderItemProps {
  product: Product;
}
