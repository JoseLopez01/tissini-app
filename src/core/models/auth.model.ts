import { Category } from './category.model';

export interface LoginResponse {
  categories: Category[];
  customer: Customer;
}

export interface Customer {
  email: string;
  entitynumber: string;
  firstname: string;
  id: string;
  lastname: string;
  mobilephone: string;
  name: string;
  salesrep: string;
  store_name: string;
  store_name_active: boolean;
}
