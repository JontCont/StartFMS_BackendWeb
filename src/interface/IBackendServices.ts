import { SystemConfigType } from "../services/Backend/SystemConfigServices";

export interface IBackendServices {
    // 定義其他需要的服務方法
    //系統設定
    getSystemConfigByData(): Promise<SystemConfigType>;
    getSystemConfig(id: string): Promise<SystemConfigType>;
    postSystemConfig(data: SystemConfigType): Promise<SystemConfigType>;
    putSystemConfig(id: string, data: SystemConfigType): Promise<SystemConfigType>;
    deleteSystemConfig(id: string): Promise<SystemConfigType>;

    //目錄設定
    getDirectoryByData(): Promise<SystemConfigType>;
    getDirectory(id: string): Promise<SystemConfigType>;
    postDirectory(data: SystemConfigType): Promise<SystemConfigType>;
    putDirectory(id: string, data: SystemConfigType): Promise<SystemConfigType>;
    deleteDirectory(id: string): Promise<SystemConfigType>;
}
