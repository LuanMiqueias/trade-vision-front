import api from "../api"
import { UserWalletType } from "../types";

export class Wallet {

  static fetchWallet = async () => {
    const { data } = await api.get<{ wallet: UserWalletType }>('/wallet');
    return data.wallet
  }
}