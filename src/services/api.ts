import axios from 'axios';

const API_PATH = 'https://private-21e8de-rafaellucio.apiary-mock.com/users'

export const axiosInstance = axios.create({
  baseURL: API_PATH
});

export default axiosInstance;
