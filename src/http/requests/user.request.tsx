import { API } from "./request";

export class User {

  static login = async (dto: {
    email: string;
    password: string
  }) => {
    const { data } = await API.post<{ token: string }>('/auth/login', {
      ...dto
    });
    return data
  }
  static register = async (dto: {
    name: string;
    email: string;
    password: string;
  }) => {
    const { data } = await API.post<{ token: string }>('/auth/register', {
      ...dto
    });
    return data
  }
}