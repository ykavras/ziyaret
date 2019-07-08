import axios from 'axios';
import store from '../store/index';

const BASE_URL = 'http://';


const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';

axiosInstance.interceptors.request.use((config) => {
  console.log('REQUEST : ', config);
  // const { token } = store.getState().loginReducer;
  // if (token !== '' && config != null) {
  //    config.headers.Authorization = `JWT ${ token }`;
  // }
  return config;
}, err => Promise.reject(err));

axiosInstance.interceptors.response.use((response) => {
  console.log('RESPONSE : ', response);
  return response;
}, (error) => {
  console.log('response error: ', error.response ? error.response : error);
  return Promise.reject(error);
});

export default axiosInstance;