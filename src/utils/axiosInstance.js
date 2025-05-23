import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api', // Change as needed
//   baseURL: 'https://inhyma-machinary-git-master-swapnil9340s-projects.vercel.app/api', // Change as needed
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // if using cookies/auth
});

export default axiosInstance;