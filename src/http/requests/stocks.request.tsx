import api from "../api"
import { StockItemType } from "../types";

export class Stocks {

  static fetchStocks = async (dto: {
    page: number,
    skip: number,
    take: number
  }) => {
    const { data } = await api.get<{ stocks: StockItemType[] }>(`/stocks?page=${dto.page}&skip=${dto.skip}&take=${dto.take}`, {
      headers: {
        Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc3ODhhMC02OWNmLTQ1YWUtOWYzYi05M2FjN2FhNjRlODIiLCJpYXQiOjE3MjgwOTU1NDYsImV4cCI6MTcyODcwMDM0Nn0.uV4d00rj4sTFAj7I4M-CitjJDZXF8yuM_KWoKIScAqs'
      }
    });
    return data.stocks
  }

  static buyStock = async (dto: {
    quantity: number,
    symbol: string,
  }) => {
    const { data } = await api.post<{ stocks: StockItemType[] }>(`/trade/buy`, {
      ...dto
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc3ODhhMC02OWNmLTQ1YWUtOWYzYi05M2FjN2FhNjRlODIiLCJpYXQiOjE3MjgxMDE3NTUsImV4cCI6MTcyODcwNjU1NX0.tF_nv7qx0T9Pbef2Yar8ply-kvHmFmrxqWie11IIo6U'
      },
    });
    return data.stocks
  }
  static sellStock = async (dto: {
    quantity: number,
    symbol: string,
  }) => {
    const { data } = await api.post<{ stocks: StockItemType[] }>(`/trade/sell`, {
      ...dto
    }, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc3ODhhMC02OWNmLTQ1YWUtOWYzYi05M2FjN2FhNjRlODIiLCJpYXQiOjE3MjgxMDE3NTUsImV4cCI6MTcyODcwNjU1NX0.tF_nv7qx0T9Pbef2Yar8ply-kvHmFmrxqWie11IIo6U'
      },
    });
    return data.stocks
  }
}