import { createContext } from "react";
import { AuthServices, IAuthServices } from "./auth";
import { connectionConfig } from "./config";
import { UserServices } from "./users";
import { IBackendServices } from "../interface/IBackendServices";
import { IUserServices } from "../interface/IUserServices";
import { SystemConfigServices } from "./Backend/SystemConfigServices";

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
    public backend:IBackendServices; 
    
    constructor(connection?: connectionConfig) {
        super();
        this.connection = connection?? new connectionConfig();
        this.auth = new AuthServices(this.connection);
        this.users = new UserServices(this.connection);
        this.backend = new SystemConfigServices(this.connection);
    }
    

    // 實作其他介面定義的方法
}

// export { AuthServices, UserServices, BackendServices }
// export type { IAuthServices, IUserServices, IBackendServices }
