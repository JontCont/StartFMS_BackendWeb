import { useState,useEffect,useRef } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import './css/login.css'
import { loginByAuth } from "../../../services/auth";
import { toast } from "react-toastify";
const LoginForm = () => {
    //initial : auth kit 
    const isAuthenticated = useIsAuthenticated();
    useEffect(() => {
        if (!isAuthenticated()) {
          navigate("/login", { replace: true });
        }else{
            navigate("/");
        }
      }, []);

    const [useremail, setUseremail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = useSignIn();
    const navigate = useNavigate();
    //login 
    const loginHandler = async () => {
        // 判斷
        if(!useremail || !password){
            toast.error('請輸入使用者帳號、密碼');
            return false;
        }

        // 權限
        const token = await loginByAuth(useremail,password);
        if(!token){
            toast.error('帳號或密碼輸入錯誤，請重新輸入');
            return false;
        }

        // 登入
        signIn({
            token: token, //Just a random token
            tokenType: "Bearer", // Token type set as Bearer
            authState: { name: "React User", uid: 123456 }, // Dummy auth user state
            expiresIn: 120 // Token Expriration time, in minutes
        })

        // If Login Successfull, then Redirect the user to secure route
        // 如果登入使用 navigate adminlte js 會失效
        window.location.href = '/';
        //navigate("/");
    };

    return (
        <div className="h-100vh d-flex justify-content-center">
            <div className="align-self-center">
                <div className="card">
                    <div className="card-header text-center">
                        <h3>Sign In</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-row">
                            <label className="label">
                                <span className="label-text">信箱</span>
                            </label>
                            <input type="text" 
                                placeholder="email" 
                                className="form-control" 
                                value={useremail}
                                onChange={(e)=>setUseremail(e.target.value)} />
                        </div>
                        <div className="form-row">
                            <label className="label">
                                <span className="label-text">密碼</span>
                            </label>
                            <input type="password" className="form-control" 
                                placeholder="password"   
                                value={password} 
                                onChange={(e)=>setPassword(e.target.value)} />
                            <label className="label">
                            </label>
                        </div>
                        <div className="mt-6 input-buttons">
                            <input type="button" className="btn btn-primary" onClick={loginHandler} value="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginForm;