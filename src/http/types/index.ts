export type PortfolioItemType = {
  createdAt: string
  id: string
  purchase_price: string
  quantity: number
  symbol: string
  updatedAt: string
}
export type UserWalletType = {
  id: string;
  userId: string;
  balance: string;
  createdAt: string;
  updatedAt: string;
}
export type StockItemType = {
id: string,
			symbol: string,
			name: string,
			shortName: string,
			price: string,
			sector: string,
			industry: string,
			createdAt:string,
			updatedAt: string
}