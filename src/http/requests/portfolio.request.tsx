import { PortfolioItemType } from "../types";
import { API } from "./request";

export class Portfolio {
  static fetchPortfolio = async () => {
    const { data } = await API.get<{ portfolios: PortfolioItemType[] }>('/portfolio');
    return data.portfolios
  }
}