import { useNavigate } from "react-router-dom";
import { loginByAuth } from "../../../services/auth";
import { useState } from "react";



const LoginIndex = () => {
    const [useremail, setUseremail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // 使用 useNavigate 鉤子來進行路由導航

    const handleLogin = (e: any) => {
        setLoading(true);
        setErrorMessage("");
        loginByAuth(useremail, password).then((data) => {
            if (data == null || data =="帳號密碼錯誤") {
                setLoading(false);
                return setErrorMessage(data.status);
            }
            setLoading(false);
            navigate("/"); // 登入成功後進行路由導航到 "/app"
        });
    };

    const handleUseremail = (e: any) => {
        setUseremail(e.target.value);
    };

    const handlePassword = (e: any) => {
        setPassword(e.target.value);
    };
    
    return (
        <div className="hero h-100">
            <div className="d-flex justify-content-center align-self-center">
                <div className="card">
                    <div className="card-body">
                        <div className="form-row">
                            <label className="label">
                                <span className="label-text">信箱</span>
                            </label>
                            <input type="text" placeholder="email" className="form-control" value={useremail} onChange={handleUseremail} />
                        </div>
                        <div className="form-row">
                            <label className="label">
                                <span className="label-text">密碼</span>
                            </label>
                            <input placeholder="password" className="form-control" type="password" value={password} onChange={handlePassword} />
                            <label className="label">
                            </label>
                        </div>
                        {errorMessage && <><small style={{ color: 'red' }}>{errorMessage}</small><br /></>}<br />
                        <div className="mt-6">
                            <input type="button" className="btn btn-primary" value={loading ? '登入中...' : '登入'} onClick={handleLogin} disabled={loading} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginIndex;