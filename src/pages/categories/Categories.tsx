import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';

import { BASE_URL, customStyles, headerCategories } from '../../core/constants';
import {
  fecthCategories,
  fecthSections,
} from '../../core/store/category/category.actions';
import { RootState } from '../../core/store/store';
import CategoryHeader from './components/CategoryHeader';
import CategorySlider from './components/CategorySlider';
import SectionsList from './components/SectionsList';
import ProductForm from './components/ProductForm';
import { closeModal } from '../../core/store/ui/ui.actions';

Modal.setAppElement('#root');

export default function Categories() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state: RootState) => state.category);
  const { showModal } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    dispatch(fecthCategories());
    dispatch(fecthSections());
  }, [dispatch]);

  function getMultivendorImage(url: string) {
    const category = url.split('/').pop() || '';
    const newUrl = url.slice(0, url.length - category?.length) + 'multivendor';
    return `${BASE_URL}/${newUrl}/${category}`;
  }

  function handleOnClose() {
    dispatch(closeModal());
  }

  return (
    <>
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
          {categories.map((category) => (
            <CategoryHeader
              image={getMultivendorImage(category.image)}
              showMore
              key={category.id}
            />
          ))}
        </div>
      </div>

      <Modal style={customStyles} isOpen={showModal} onRequestClose={handleOnClose}>
        <div>
          <ProductForm />
        </div>
      </Modal>
    </>
  );
}
