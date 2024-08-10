import axios from "axios";
import { configuration } from "../config/configuration";
import { SignUp } from "../models/System/SignUp";
import { ApiResponse } from "../models/ApiResponse";

export interface IAuthServices {
  // 定義其他需要的服務方法
  login(email: string, password: string): Promise<string>;
}

export class AuthServices implements IAuthServices {
  private connection: configuration;
  private host?: string;

  constructor(connection: configuration) {
    this.connection = connection;
    this.host = this.connection.usersHost ?? this.connection.localHost;
  }

  async login(email: string, password: string): Promise<string> {
    try {
      const url: string = `${this.host}/api/auth/Login`;
      const { data } = await axios.post(url, {
        Account: email,
        Password: password,
      });
      const token = data.data.token;
      return token;
    } catch (error) {
      throw new Error("無法登入"); // 自訂錯誤訊息
    }
  }
  async userSignup(models: SignUp): Promise<ApiResponse> {
    try {
      const url: string = `${this.host}/api/auth/SignUp`;
      const { data } = await axios.post(url, models);
      return data as ApiResponse;
    } catch (error) {
      throw new Error("無法登入"); // 自訂錯誤訊息
    }
  }
}
