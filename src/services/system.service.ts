import axios from "axios";
import { configuration } from "../config/configuration";
import { setAuthHeader } from "./services";
import { toast } from "react-toastify";

export interface ISystemManagement {
  // 定義其他需要的服務方法
  getSystemParameterList(): Promise<any[]>;
  getSystemParameters(): Promise<any[]>;
  addSystemParameter(data: any): Promise<any>;
  updateSystemParameter(data: any): Promise<any>;
  deleteSystemParameter(id: number): Promise<any>;
}

export class SystemManagement implements ISystemManagement {
  private connection: configuration;
  private host?: string;

  constructor(connection: configuration) {
    this.connection = connection;
    this.host = this.connection.usersHost ?? this.connection.localHost;
  }

  async getSystemParameterList(): Promise<any> {
    try {
      const url: string = `${this.host}/api/sys/parameter/list`;
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

  async getSystemParameters(): Promise<any> {
    try {
      const url: string = `${this.host}/api/sys/parameter`;
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

  async addSystemParameter(data: any): Promise<any> {
    try {
      const url: string = `${this.host}/api/sys/parameter`;
      let result;
      await axios.post(url, data, setAuthHeader).then(({ data }) => {
        let res = data as any;
        result = res.data;
        return result;
      });
      return result;
    } catch (error) {
      toast.error("無法登入");
    }
  }

  async updateSystemParameter(data: any): Promise<any> {
    try {
      const url: string = `${this.host}/api/sys/parameter`;
      let result;
      await axios.put(url, data, setAuthHeader).then(({ data }) => {
        let res = data as any;
        result = res.data;
        return result;
      });
      return result;
    } catch (error) {
      toast.error("無法登入");
    }
  }

  async deleteSystemParameter(id: number): Promise<any> {
    try {
      const url: string = `${this.host}/api/sys/parameter/${id}`;
      let result;
      await axios.delete(url, setAuthHeader).then(({ data }) => {
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
