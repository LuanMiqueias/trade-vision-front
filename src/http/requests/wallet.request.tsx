import { UserWalletType } from "../types";
import { API } from "./request";

export class Wallet {

  static fetchWallet = async () => {
    const { data } = await API.get<{ wallet: UserWalletType }>('/wallet');
    return data.wallet
  }
  static depositInWallet = async (dto: { amount: number }) => {
    const { data } = await API.post<{ wallet: UserWalletType }>('/wallet/deposit', dto);
    return data.wallet
  }
}