import Slider, { Settings } from 'react-slick';
import { Product } from '../../../core/models';
import SectionSliderItem from './SectionSliderItem';

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
      {products.map((product) => (
        <div className="rounded-lg p-1" key={product.id} style={{ width: 'auto !important' }}>
          <SectionSliderItem product={product} />
        </div>
      ))}
    </Slider>
  );
}

interface SectionSliderProps {
  products: Product[];
}
