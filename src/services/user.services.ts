import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { toast } from "react-toastify";
import { configuration } from "../config/configuration";
import { setAuthHeader } from "./services";

export interface IUserServices {
  // 定義其他需要的服務方法
  getUsersMenus(): Promise<any[]>;
}

export class UserServices implements IUserServices {
  private connection: configuration;
  private host?: string;

  constructor(connection: configuration) {
    this.connection = connection;
    this.host = this.connection.usersHost ?? this.connection.localHost;
  }

  async getUsersMenus() {
    try {
      const url: string = `${this.host}/api/users/menus`;
      let result;

      await axios.get(url, setAuthHeader).then(({ data }) => {
        let res = data as any;
        result = res.data;
        return result;
      });
      return result;
    } catch (error) {
      toast.error("無法登入");
    }
  }
}
