import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type MyResponses<T> = AxiosResponse<T>;

export type MethodName = 'get' | 'post' | 'patch' | 'delete' | 'put';

export type HttpClient = {
  [M in MethodName]: <T>(url: string, ...rest: any[]) => Promise<AxiosResponse<T>>;
};

export type RequestConfig = AxiosRequestConfig;

export const instance = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: true,
});

export const fetchClient: HttpClient = {
  get<T>(url: string, config?: RequestConfig) {
    return instance.get<T>(url, config);
  },

  post<T, D>(url: string, data?: D, config?: RequestConfig) {
    return instance.post<T>(url, data, config);
  },

  patch<T, D>(url: string, data?: D, config?: RequestConfig) {
    return instance.patch<T>(url, data, config);
  },

  delete<T>(url: string, config?: RequestConfig) {
    return instance.delete<T>(url, config);
  },

  put<T, D>(url: string, data?: D, config?: RequestConfig) {
    return instance.put<T>(url, data, config);
  },
};
