import axios from "axios";
import { setAuthHeader } from "../services";
import { connectionConfig } from "../config";
import { IBackendServices } from "../../interface/IBackendServices";

export interface SystemConfigType {
    ParMemo: string,
    ParName: string,
    ParValue: string
}

export class SystemConfigServices implements IBackendServices {
    private connection: connectionConfig;
    private host?: string;

    constructor(connection: connectionConfig) {
        this.connection = connection;
        this.host = this.connection.backendHost ?? this.connection.localHost;
    }
    // 系統參數設定
    async getSystemConfigByData() {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting`;
            const result = await getMethod(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async getSystemConfig(id: string) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await getMethod(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async postSystemConfig(data: SystemConfigType) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting`;
            const result = await postMethod(data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async putSystemConfig(id: string, data: SystemConfigType) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await putMethod(id, data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async deleteSystemConfig(id: string) {
        try {
            const url: string = `${this.host}/api/backend/sys/SystemConfigSetting/${id}`;
            const result = await deleteMethod(id, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }


    // 目錄設定
    async getDirectoryByData() {
        try {
            const url: string = `${this.host}/api/user/MenuBasicSetting`;
            const result = await getMethod(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async getDirectory(id: string) {
        try {
            const url: string = `${this.host}/api/user/MenuBasicSetting/${id}`;
            const result = await getMethod(url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async postDirectory(data: any) {
        try {
            const url: string = `${this.host}/api/user/MenuBasicSetting`;
            const result = await postMethod(data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async putDirectory(id: string, data: any) {
        try {
            const url: string = `${this.host}/api/user/MenuBasicSetting/${id}`;
            const result = await putMethod(id, data, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }
    }

    async deleteDirectory(id: string) {
        try {
            const url: string = `${this.host}/api/user/MenuBasicSetting/${id}`; 
            const result = await deleteMethod(id, url);
            return result;
        } catch (error) {
            throw new Error("Error"); // 自訂錯誤訊息
        }   
    }

} //class: SystemConfigServices


const getMethod = async (url: string) => {
    let result: any;
    await axios
        .get(url, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    return result;
}

const postMethod = async (data: any, url: string) => {
    let result: any;
    await axios
        .post(url, data, setAuthHeader)
        .then((res) => {
            result = res.data;
            return result;
        });
    return result;
}

const putMethod = async (id: string, data: any, url: string) => {
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

const deleteMethod = async (id: string, url: string) => {
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

