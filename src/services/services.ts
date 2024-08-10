import { createContext } from "react";
import { configuration } from "../config/configuration";
import { AuthServices } from "./auth.services";
import { UserServices } from "./user.services";
import { SystemManagement } from "./system.service";

export const ServicesContext = createContext<Services | null>(null);
export let setAuthHeader = {};

export const setAuthHeaderFunction = (header: any) => {
  const config = {
    headers: { Authorization: header },
  };
  setAuthHeader = config;
};

export class Services extends configuration {
  private connection: configuration;
  private host?: string;
  
  public auth: AuthServices;
  public users: UserServices;
  public system: SystemManagement;

  constructor(connection?: configuration) {
    super();
    this.connection = connection ?? new configuration();
    this.usersHost = this.connection.usersHost ?? this.connection.localHost;
    this.backendHost = this.connection.backendHost ?? this.connection.localHost;
    
    //-- 這裡新增服務 --//
    this.auth = new AuthServices(this.connection);
    this.users = new UserServices(this.connection);
    this.system = new SystemManagement(this.connection);
  }

  // 實作其他介面定義的方法
}
