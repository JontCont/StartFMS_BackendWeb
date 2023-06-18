import axios from "axios";
import { connectionConfig } from "./config";
import { setAuthHeader } from "./services";

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
            throw new Error("無法登入"); // 自訂錯誤訊息
        }
    }
}

const getUsersMenus = async (url: string) => {
    let result: any;
    await axios
        .get(url, setAuthHeader)
        .then((res) => {
            // token = res.data;
            result = res.data;
            return result;
        });
    return result;
}

