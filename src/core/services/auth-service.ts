import axios from 'axios';
import { API_URL } from '../constants';
import { LoginResponse } from '../models';

export async function loginWithNumber(number: string) {
  const response = (await axios.post(`${API_URL}/login/client`, { mobilephone: number })).data
  return response as LoginResponse;
}