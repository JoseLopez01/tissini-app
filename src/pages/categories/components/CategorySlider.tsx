import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} prev-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

function NextArrow({ className, style, onClick }: ArrowProps) {
  return (
    <div
      className={`${className} next-arrow`}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    ></div>
  );
}

export default function CategorySlider({ images, rows, cols }: CategorySliderProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    centerMode: true,
    centerPadding: '60px',
  };

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <img
          src={image}
          alt="Slide"
          key={image}
          className="rounded-3xl shadow-sm"
        />
      ))}
    </Slider>
  );
}

interface CategorySliderProps {
  images: string[];
  rows?: number;
  cols?: number;
}

interface ArrowProps {
  className?: string;
  style?: any;
  onClick?: any;
}
