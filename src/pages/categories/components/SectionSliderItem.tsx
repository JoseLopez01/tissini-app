import { BASE_URL } from '../../../core/constants';
import { Product } from '../../../core/models';

export default function SectionSliderItem({ product }: SectionSliderItemProps) {

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
        <button className="col-span-1">
          <i className="fas fa-cart-plus text-red-400"></i>
        </button>
      </div>
    </div>
  );
}

interface SectionSliderItemProps {
  product: Product;
}
