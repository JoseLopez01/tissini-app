import Slider, { Settings } from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CategorySlider({ images }: CategorySliderProps) {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1,
    arrows: true,
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
}
