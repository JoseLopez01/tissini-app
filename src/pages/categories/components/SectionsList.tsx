import { useSelector } from 'react-redux';

import CategoryHeader from './CategoryHeader';

import { BASE_URL } from '../../../core/constants';
import { RootState } from '../../../core/store/store';
import { useEffect, useState } from 'react';
import CategorySlider from './CategorySlider';

export default function SectionsList() {
  const { sections } = useSelector((state: RootState) => state.category);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const products_images = sections.map(section => section.products).flat().map(product => `${BASE_URL}/${product.image.url}`); 
    setImages(products_images);
  }, [sections]);

  return (
    <>
      {sections.map((section) => (
        <div className="mt-10" key={section.name}>
          <CategoryHeader
            image={`${BASE_URL}/${section.image}`}
            showMore={false}
          />
          <div className="my-2">
            <CategorySlider images={images} />
          </div>
        </div>
      ))}
    </>
  );
}
