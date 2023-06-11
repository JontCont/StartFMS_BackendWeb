import axios from "axios";

const LocalHost = 'https://localhost:5001';
let setAuthHeader={};

export const setAuthHeaderFunction = (header:any) => {
    const config = {
        headers: { Authorization: header }
    };
    setAuthHeader = config;
};

export const getUsersMenus = async () => {
    const url: string = `${LocalHost}/api/users/menus`;
    let result: any;
    try {
        await axios
            .get(url,setAuthHeader)
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