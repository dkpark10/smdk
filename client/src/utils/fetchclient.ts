import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export type MyResponses<T> = AxiosResponse<T>;

export type MethodName = 'get' | 'post' | 'patch' | 'delete' | 'put';

export type HttpClient = {
  [M in MethodName]: <T>(url:string, ...rest: any[]) => Promise<T>;
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
  async get<T>(url: string, config?: RequestConfig): Promise<T> {
    return instance.get(url, config);
  },

  async post<T, D>(url: string, data?: D, config?: RequestConfig): Promise<T> {
    return instance.post(url, data, config);
  },

  async patch<T, D>(url: string, data?: D, config?: RequestConfig): Promise<T> {
    return instance.patch(url, data, config);
  },

  async delete<T>(url: string, config?: RequestConfig): Promise<T> {
    return instance.delete(url, config);
  },

  async put<T, D>(url: string, data?: D, config?: RequestConfig): Promise<T> {
    return instance.put(url, data, config);
  },
};
