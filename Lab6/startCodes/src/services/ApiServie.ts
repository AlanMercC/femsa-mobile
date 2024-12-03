import axios from "axios";
import {getToken} from '../utils/storage'

const api = axios.create({
  baseURL: "https://example.com/api",
});
// Interceptor para agregar el token JWT a las peticiones
api.interceptors.request.use(
  async (config) => {
    const credentials = await getToken();
    if (credentials && credentials.password) {
      config.headers["Authorization"] = `Bearer ${credentials.password}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default api;