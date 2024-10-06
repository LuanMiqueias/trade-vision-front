import api from "../api"
import { PortfolioItemType } from "../types";

export class Portfolio {

  static fetchPortfolio = async () => {
    const { data } = await api.get<{ portfolios: PortfolioItemType[] }>('/portfolio');
    return data.portfolios
  }
}