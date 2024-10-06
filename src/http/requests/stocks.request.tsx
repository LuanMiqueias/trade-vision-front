import { StockItemType } from "../types";
import { API } from "./request";

export class Stocks {

  static fetchStocks = async (dto: {
    page: number,
    skip: number,
    take: number
  }) => {
    const { data } = await API.get<{ stocks: StockItemType[] }>(`/stocks?page=${dto.page}&skip=${dto.skip}&take=${dto.take}`);
    return data.stocks
  }

  static buyStock = async (dto: {
    quantity: number,
    symbol: string,
  }) => {
    const { data } = await API.post<{ stocks: StockItemType[] }>(`/trade/buy`, {
      ...dto
    });
    return data.stocks
  }
  static sellStock = async (dto: {
    quantity: number,
    symbol: string,
  }) => {
    const { data } = await API.post<{ stocks: StockItemType[] }>(`/trade/sell`, {
      ...dto
    });
    return data.stocks
  }
}