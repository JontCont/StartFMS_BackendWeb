import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { connectionConfig } from "../services/config";
import { setAuthHeader } from "../services/services";
import { toast } from "react-toastify";

export interface IUserServices {
  // 定義其他需要的服務方法
  getUsersMenus(): Promise<string>;
}

export class UserServices implements IUserServices {
  private connection: connectionConfig;
  private host?: string;

  constructor(connection: connectionConfig) {
    this.connection = connection;
    this.host = this.connection.usersHost ?? this.connection.localHost;
  }

  async getUsersMenus() {
    try {
      const url: string = `${this.host}/api/users/menus`;
      const result = await getUsersMenus(url);
      return result;
    } catch (error) {
      toast.error("無法登入");
    }
  }

}

const getUsersMenus = async (url: string) => {
  let result: any;
  await axios.get(url, setAuthHeader).then(({ data }) => {
    let res = data as any;
    result = res.data;
    return result;
  });
  return result;
};
