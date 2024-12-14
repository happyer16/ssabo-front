import axios, {AxiosRequestConfig} from "axios";
import {getCookie} from "@/src/utils/cookie-util";

export const getAuthorizationConfig = <T>(config: AxiosRequestConfig<T>) => {
  let token;

  if (typeof window !== 'undefined') {
    token = getCookie('token');
  }

  if (token == null) {
    return config;
  }

  if (config.headers != null && !config.headers.Authorization) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

/**
 * 클라이언트에서 사용하는 API
 */
export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/apartsearcher/`,
  headers: {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': '*',
  },
  withCredentials: true,
});

// @ts-ignore
api.interceptors.request.use(getAuthorizationConfig);
