import axios from "axios";
import { connectionConfig } from "./config";

export interface IAuthServices {
  // 定義其他需要的服務方法
  login(email: string, password: string): Promise<string>;
}

export class AuthServices implements IAuthServices {
  private connection: connectionConfig;
  private host?: string;

  constructor(connection: connectionConfig) {
    this.connection = connection;
    this.host = this.connection.usersHost ?? this.connection.localHost;
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const url: string = `${this.host}/api/auth/Login`;
      const token = await loginByAuth(email, password, url);
      return token;
    } catch (error) {
      throw new Error("無法登入"); // 自訂錯誤訊息
    }
  }
}

const loginByAuth = async (email: string, password: string, url: string) => {
  let token: any;
  await axios
    .post(url, { Account: email, Password: password })
    .then(({ data }) => {
      let responseData = data as any;
      token = responseData.data.token;
      return token;
    });
  return token;
};
