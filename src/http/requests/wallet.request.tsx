import api from "../api"
import { UserWalletType } from "../types";

export class Wallet {

  static fetchWallet = async () => {
    const { data } = await api.get<{ wallet: UserWalletType }>('/wallet', {
      headers: {
        Authorization: 'bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJiNTc3ODhhMC02OWNmLTQ1YWUtOWYzYi05M2FjN2FhNjRlODIiLCJpYXQiOjE3MjgwOTU1NDYsImV4cCI6MTcyODcwMDM0Nn0.uV4d00rj4sTFAj7I4M-CitjJDZXF8yuM_KWoKIScAqs'
      }
    });
    return data.wallet
  }
}