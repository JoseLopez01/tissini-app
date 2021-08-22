import { Styles } from 'react-modal';

export const API_URL = 'https://v3.tissini.app/api/v3';
export const BASE_URL = 'https://v3.tissini.app';

export const headerCategories = [
  'https://v3.tissini.app/img/categories/multivendor/jeans-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/fajas-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/blusas-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/zapatos-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/ropa-interior-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/seamless-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/concord-ozzy-prominent.jpg',
  'https://v3.tissini.app/img/categories/multivendor/tapabocas-prominent.jpg',
];

export const customStyles: Styles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    zIndex: 100,
  },
};
