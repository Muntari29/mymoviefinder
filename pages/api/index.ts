import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const API_END_POINT = process.env.NEXT_PUBLIC_API_END_POINT;

const axiosInstance = axios.create({
  baseURL: `${API_END_POINT}`,
  timeout: 3000,
  method: 'GET',
});

const apiRequest = {
  getAll: (key: string, request: AxiosRequestConfig) =>
    axiosInstance.get(key, request),
  getDetail: (key: string, request: AxiosRequestConfig) =>
    axiosInstance.get(key, request),
};

export default apiRequest;
