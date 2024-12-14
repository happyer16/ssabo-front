import https from "https";
import axios, {AxiosError, AxiosInstance} from "axios";
import {getCookie} from "@/src/utils/cookie-util";
import {ApiResponse} from "@/src/entity/api";
import {isBrowser} from "@/src/utils/web-util";
// 베이스 API 서비스 클래스
export class AbstractApiService {
  protected readonly http: AxiosInstance;
  protected readonly token: string | undefined;

  constructor(baseURL: string, token?: string) {
    const agent = new https.Agent({rejectUnauthorized: false});
    this.token = token;
    this.http = axios.create({
      baseURL,
      headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': '*',
      },
      withCredentials: true,
      httpsAgent: agent
    });

    this.http.interceptors.response.use(
      (response) => response,
      this.handleApiError
    );
  }

  protected createAuthHeader() {
    const token = this.token || (typeof window !== 'undefined' && getCookie('token'));
    return token ? {Authorization: `Bearer ${token}`} : {};
  }

  protected async get<T>(url: string, params?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.http.get<ApiResponse<T>>(url, {
        params,
        headers: this.createAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  protected async post<T>(url: string, data?: any): Promise<ApiResponse<T>> {
    try {
      const response = await this.http.post<ApiResponse<T>>(url, data, {
        headers: this.createAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  protected async delete<T>(url: string): Promise<ApiResponse<T>> {
    try {
      const response = await this.http.delete<ApiResponse<T>>(url, {
        headers: this.createAuthHeader(),
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  private handleApiError = async (error: AxiosError) => {
    console.log('error!!!!!!!!!!!!!!!!')
    console.log(error.response)
    if (error.status === 401) {
      console.log('error2!!!!!!!!!!!!!!!')
      if (isBrowser()) {
        // 클라이언트 사이드에서 리다이렉트
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  };
}

