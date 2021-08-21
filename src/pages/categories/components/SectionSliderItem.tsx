import { BASE_URL } from "../../../core/constants";
import { Product } from "../../../core/models";

export default function SectionSliderItem({ product }: SectionSliderItemProps) {
  return (
    <>
      <img
        src={`${BASE_URL}/${product.image.url}`}
        alt={product.name}
        className="rounded-lg"
      />
      <div className="text-lg font-bold">{product.name}</div>
      <div className="uppercase text-sm">{product.categories.category}</div>
      <div className="font-semibold">${product.price}</div>
      <div className="absolute bottom-1 right-1 w-5">
        <button>
          <i className="fas fa-cart-plus text-red-400"></i>
        </button>
      </div>
    </>
  );
}

interface SectionSliderItemProps {
  product: Product;
}
