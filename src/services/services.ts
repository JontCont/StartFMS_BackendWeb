import { createContext } from "react";
import { AuthServices, IAuthServices } from "./auth";
import { connectionConfig } from "./config";
import { IUserServices, UserServices } from "../interfaces/IUserServices";

export const ServicesContext = createContext<Services | null>(null);
export let setAuthHeader = {};

export const setAuthHeaderFunction = (header: any) => {
    const config = {
        headers: { Authorization: header }
    };
    setAuthHeader = config;
};

export class Services extends connectionConfig {
    private connection: connectionConfig;

    public auth:IAuthServices; 
    public users:IUserServices; 
    
    constructor(connection?: connectionConfig) {
        super();
        this.connection = connection?? new connectionConfig();
        this.auth = new AuthServices(this.connection);
        this.users = new UserServices(this.connection);
    }

    // 實作其他介面定義的方法
}

