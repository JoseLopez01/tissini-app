import { useSelector } from 'react-redux';

import { BASE_URL } from '../../../core/constants';
import CategoryHeader from './CategoryHeader';
import { RootState } from '../../../core/store/store';
import SectionSlider from './SectionSlider';

export default function SectionsList() {
  const { sections } = useSelector((state: RootState) => state.category);

  return (
    <>
      {sections.map((section) => (
        <div className="mt-10" key={section.name}>
          <CategoryHeader
            image={`${BASE_URL}/${section.image}`}
            showMore={false}
          />
          <div className="my-2">
            <SectionSlider products={section.products} key={section.name} />
          </div>
        </div>
      ))}
    </>
  );
}
