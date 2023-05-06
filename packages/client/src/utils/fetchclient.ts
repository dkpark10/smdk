import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

export type Response<T> = Promise<AxiosResponse<T>>;

export type RequestConfig = AxiosRequestConfig;

export interface HttpClient {
  instance: AxiosInstance;
  get: <T>(url: string, config?: RequestConfig) => Response<T>;
  post: <T, D>(url: string, data?: D, config?: RequestConfig) => Response<T>;
  patch: <T, D>(url: string, data?: D, config?: RequestConfig) => Response<T>;
  delete: <T>(url: string, config?: RequestConfig) => Response<T>;
  put: <T, D>(url: string, data?: D, config?: RequestConfig) => Response<T>;
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response } = error;
    if (response) {
      // The request was made and the server responded with a status code that falls out of the range of 2xx
      console.error('API Error:', response.status, response.data);
      return Promise.reject(response);
    }
    if (error.request) {
      // The request was made but no response was received
      console.error('API Error:', error.message);
      return Promise.reject('Network Error');
    }
    // Something happened in setting up the request that triggered an Error
    console.error('API Error:', error.message);
    return Promise.reject(error.message);
  },
);

export const fetchClient: HttpClient = {
  instance,
  get<T>(url: string, config?: RequestConfig) {
    return this.instance.get<T>(url, config);
  },

  post<T, D>(url: string, data?: D, config?: RequestConfig) {
    return this.instance.post<T>(url, data, config);
  },

  patch<T, D>(url: string, data?: D, config?: RequestConfig) {
    return this.instance.patch<T>(url, data, config);
  },

  delete<T>(url: string, config?: RequestConfig) {
    return this.instance.delete<T>(url, config);
  },

  put<T, D>(url: string, data?: D, config?: RequestConfig) {
    return this.instance.put<T>(url, data, config);
  },
};
