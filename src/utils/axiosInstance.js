import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : 'https://inhyma-machinary-git-master-swapnil9340s-projects.vercel.app/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // if using cookies/auth
});

export default axiosInstance;