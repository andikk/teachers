import axios from 'axios';

const createAPI = () => {
  const api = axios.create({
    baseURL: `http://localhost:3000/`,
    timeout: 5000,
    withCredentials: true,
  });
  const onSuccess = (response) => response;
  const onError = (error) => {
    throw error;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};

export default createAPI;