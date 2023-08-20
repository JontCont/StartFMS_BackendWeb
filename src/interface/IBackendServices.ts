import { S01MenuBasicSetting } from "../models/System/S01MenuBasicSetting";
import { SystemConfigType } from "../models/System/SystemConfigType";

export interface IBackendServices {
    // 定義其他需要的服務方法
    //系統設定
    getSystemConfigByData(): Promise<SystemConfigType>;
    getSystemConfig(id: string): Promise<SystemConfigType>;
    postSystemConfig(data: SystemConfigType): Promise<SystemConfigType>;
    putSystemConfig(id: string, data: SystemConfigType): Promise<SystemConfigType>;
    deleteSystemConfig(id: string): Promise<SystemConfigType>;

    //目錄設定
    getDirectoryByData(): Promise<S01MenuBasicSetting>;
    getDirectory(id: string): Promise<S01MenuBasicSetting>;
    postDirectory(data: S01MenuBasicSetting): Promise<S01MenuBasicSetting>;
    putDirectory(id: string, data: S01MenuBasicSetting): Promise<S01MenuBasicSetting>;
    deleteDirectory(id: string): Promise<S01MenuBasicSetting>;
}
