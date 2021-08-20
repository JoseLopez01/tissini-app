import Slider, { Settings } from 'react-slick';
import { BASE_URL } from '../../../core/constants';
import { Product } from '../../../core/models';

export default function SectionSlider({ products }: SectionSliderProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    centerPadding: '60px',
    rows: 2,
    slidesPerRow: 2,
  };

  return (
    <Slider {...settings}>
      {
        products.map(product => (
          <div className="rounded-lg p-1" key={product.id}>
            <img src={`${BASE_URL}/${product.image.url}`} alt={product.name} className="rounded-lg" />
            <div className="text-lg font-bold">
              {product.name}
            </div>
            <div className="uppercase text-sm">
              {product.categories.category}
            </div>
            <div className="font-semibold">
              ${product.price}
            </div>
          </div>
        ))
      }
    </Slider>
  );
}

interface SectionSliderProps {
  products: Product[];
}
