import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from '../../core/constants';
import {
  fecthCategories,
  fecthSections,
} from '../../core/store/category/category.actions';
import { RootState } from '../../core/store/store';
import CategoryHeader from './components/CategoryHeader';
import CategorySlider from './components/CategorySlider';
import SectionsList from './components/SectionsList';

export default function Categories() {

  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.category);

  const headerCategories = [
    'https://v3.tissini.app/img/categories/multivendor/jeans-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/fajas-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/blusas-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/zapatos-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/ropa-interior-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/seamless-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/concord-ozzy-prominent.jpg',
    'https://v3.tissini.app/img/categories/multivendor/tapabocas-prominent.jpg',
  ];

  useEffect(() => {
    dispatch(fecthCategories());
    dispatch(fecthSections());
  }, [dispatch]);

  function getMultivendorImage(url: string) {
    const category = url.split('/').pop() || '';
    const newUrl = url.slice(0, url.length - category?.length) + 'multivendor';
    return `${BASE_URL}/${newUrl}/${category}`;
  }

  return (
    <div className="w-4/12 mx-auto p-2 relative">
      <CategoryHeader
        image="https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg"
        showMore
      />
      <div className="my-2">
        <CategorySlider images={headerCategories} />
      </div>
      <SectionsList />
      <div className="mt-10">
        {
          categories.map(
            category => (
              <CategoryHeader image={getMultivendorImage(category.image)} showMore key={category.id} />
            )
          )
        }
      </div>
    </div>
  );
}
