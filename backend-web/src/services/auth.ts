import axios from "axios";

const LocalHost = 'https://localhost:5001';
export const loginByAuth = async (email: string, password: string) => {

    try {
        const url: string = `${LocalHost}/api/auth/v1.0/Login/jwtLogin`;
        let token: any;
        await axios
            .post(url, { Account: email, Password: password })
            .then((res) => {
                token = res.data.token;
                return token;
            });

        return token;
    } catch (error: any) {
        // throw getError({
        //     message : "伺服器暫時無法使用"
        // });
    }
};
