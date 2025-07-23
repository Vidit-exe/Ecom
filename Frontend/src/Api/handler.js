// /src/api/handler.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/api/v1'; // Change to your backend URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Enable if using cookies
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
