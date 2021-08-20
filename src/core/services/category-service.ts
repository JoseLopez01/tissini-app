import axios from 'axios';
import { API_URL } from '../constants';
import { Category, Section } from '../models';

export async function getCategories() {
  const response = (await axios.get(`${API_URL}/categories`)).data as Category[];
  return response;
}

export async function getSections() {
  const response = (await axios.get(`${API_URL}/categories/sections`)).data as Section[];
  return response;
}