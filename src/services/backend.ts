import axios from "axios";
import { setAuthHeader } from "./services";
import { connectionConfig } from "./config";

export interface SystemConfigType {
    ParMemo: string,
    ParName: string,
    ParValue: string
}

export interface IBackendServices {
    // 定義其他需要的服務方法
    getSystemConfigByData(): Promise<SystemConfigType>;
    getSystemConfig(id: string): Promise<SystemConfigType>;
    postSystemConfig(data: SystemConfigType): Promise<SystemConfigType>;
    putSystemConfig(id: string, data: SystemConfigType): Promise<SystemConfigType>;
    deleteSystemConfig(id: string): Promise<SystemConfigType>;
}

export class BackendServices implements IBackendServices {
    private connection: connectionConfig;
    private host?: string;

    constructor(connection: connectionConfig) {
        this.connection = connection;
        this.host = this.connection.backendHost ?? this.connection.localHost;
    }

    async getSystemConfigByData() {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting`;
            const result = await getSystemConfig(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async getSystemConfig(id: string) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await getSystemConfig(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async postSystemConfig(data: SystemConfigType) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting`;
            const result = await postSystemConfig(data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async putSystemConfig(id: string, data: SystemConfigType) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await putSystemConfig(id, data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async deleteSystemConfig(id: string) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await deleteSystemConfig(id, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }
}


const getSystemConfig = async (url: string) => {
    let result: any;
    await axios
        .get(url, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    return result;
}

const postSystemConfig = async (data: SystemConfigType, url: string) => {
    let result: any;
    await axios
        .post(url, data, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    return result;
}

const putSystemConfig = async (id: string, data: SystemConfigType, url: string) => {
    let result: any;
    await axios
        .put(url, data, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    console.log(result);
    return result;
}


const deleteSystemConfig = async (id: string, url: string) => {
    let result: any;
    await axios
        .delete(url, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    console.log(result);
    return result;
}

