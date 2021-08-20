import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fecthCategories, fecthSections } from '../../core/store/category/category.actions';
import CategoryHeader from './components/CategoryHeader';

export default function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthCategories());
    dispatch(fecthSections());
  }, [dispatch]);

  return (
    <div className="w-4/12 mx-auto p-2">
      <CategoryHeader
        image="https://mitienda.moda/img/productos-de-entrega-inmediata.9ad72bec.jpg"
        showMore
      />
    </div>
  );
}
