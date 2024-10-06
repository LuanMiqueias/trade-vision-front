import { AxiosRequestConfig } from "axios"
import api from "../api"

export class API {
  static get<T>(url: string, config?: AxiosRequestConfig) {
    const token = localStorage.getItem('@TradeViewToken');
    const defaultHeaders = token ? {
      'Authorization': `Bearer ${token}`
    } : null;

    return api.get<T>(url, {
      ...config, headers: {
        ...config?.headers,
        ...defaultHeaders
      }
    })
  }
  static post<T>(url: string, body: any, config?: AxiosRequestConfig) {
    const token = localStorage.getItem('@TradeViewToken');
    const defaultHeaders = token ? {
      'Authorization': `Bearer ${token}`
    } : null;

    return api.post<T>(url,
      {
        ...body
      },
      {
        ...config, headers: {
          ...config?.headers,
          ...defaultHeaders
        }
      })
  }
}