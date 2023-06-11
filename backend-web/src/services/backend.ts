import axios from "axios";
import { setAuthHeader } from "./users";
const LocalHost = 'https://localhost:5001';

export interface SystemConfigType {
    parMemo: string,
    parName: string,
    parValue: string
}

export const getSystemConfig = async (id: string) => {
    const url: string = `${LocalHost}/api/backend/sys/SystemConfigSetting/${id}`;
    let result: any;
    try {
        await axios
            .get(url, setAuthHeader)
            .then((res) => {
                result = res.data;
                return result;
            });
        return result;
    } catch (error: any) {
        // throw getError({
        //     message : "伺服器暫時無法使用"
        // });
    }
}

export const postSystemConfig = async (data: SystemConfigType) => {
    const url: string = `${LocalHost}/api/backend/sys/SystemConfigSetting`;
    let result: any;
    try {
        await axios
            .post(url, data, setAuthHeader)
            .then((res) => {
                // token = res.data;
                result = res.data;
                return result;
            });
        return result;
    } catch (error: any) {
        // throw getError({
        //     message : "伺服器暫時無法使用"
        // });
    }
}

export const putSystemConfig = async (id: string, data: SystemConfigType) => {
    const url: string = `${LocalHost}/api/backend/sys/SystemConfigSetting/${id}`;
    let result: any;
    try {
        await axios
            .put(url, data, setAuthHeader)
            .then((res) => {
                result = res.data;
                return result;
            });
        console.log(result);
        return result;
    } catch (error: any) {
        // throw getError({
        //     message : "伺服器暫時無法使用"
        // });
    }
}


export const deleteSystemConfig = async (id: string) => {
    const url: string = `${LocalHost}/api/backend/sys/SystemConfigSetting/${id}`;
    let result: any;
    try {
        await axios
            .delete(url, setAuthHeader)
            .then((res) => {
                result = res.data;
                return result;
            });
        console.log(result);
        return result;
    } catch (error: any) {
        // throw getError({
        //     message : "伺服器暫時無法使用"
        // });
    }
}

