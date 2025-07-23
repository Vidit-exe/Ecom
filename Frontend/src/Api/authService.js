// /src/api/authService.js
import axiosInstance from './handler';

export const loginUser = async (credentials) => {
  const response = await axiosInstance.post('/login', credentials);
  return response.data;
};

export const logoutUser = async (credentials) => {
  const response = await axiosInstance.get('/logout', credentials);
  return response.data;
};

export const registerUser = async (userData) => {
  const response = await axiosInstance.post('/register', userData);
  return response.data;
};