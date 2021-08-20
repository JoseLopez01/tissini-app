export interface Category {
  active: number;
  categories?: Category[];
  category: string;
  image: string;
  name: string;
}

export interface Section {
  image: string;
  name: string;
  products: Product[];
}

export interface Product {
  catalog_id: number;
  categories: Category;
  id: number;
  image: {
    id: number;
    pos: number;
    product_id: number;
    url: string;
    url_original: string;
  };
  name: string;
  price: string;
  reference: string;
  variants: Variant[];
}

export interface Variant {
  custitem_tj_category: string;
  id: number;
  price: string;
  product_id: number;
  quantity: number;
  size: string;
  sku: string;
}
