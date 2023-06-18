import { createContext } from "react";
import { AuthServices, IAuthServices } from "./auth";
import { BackendServices, IBackendServices } from "./backend";
import { connectionConfig } from "./config";
import { IUserServices, UserServices } from "./users";

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
        this.backend = new BackendServices(this.connection);
    }
    

    // 實作其他介面定義的方法
}

// export { AuthServices, UserServices, BackendServices }
// export type { IAuthServices, IUserServices, IBackendServices }
