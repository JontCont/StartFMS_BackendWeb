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
            if (data == null) {
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
        <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-center hero-content lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="mb-5 text-5xl font-bold">
                        IT鐵人賽
                    </h1>
                    <p className="mb-5">
                        30天全端挑戰!React+Spring Boot+Mongo DB 串接永豐API 打造金融網站
                    </p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">信箱</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" value={useremail} onChange={handleUseremail} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">密碼</span>
                            </label>
                            <input placeholder="password" className="input input-bordered" type="password" value={password} onChange={handlePassword} />
                            <label className="label">
                            </label>
                        </div>
                        {errorMessage && <><small style={{ color: 'red' }}>{errorMessage}</small><br /></>}<br />
                        <div className="form-control mt-6">
                            <input type="button" className="btn btn-primary" value={loading ? '登入中...' : '登入'} onClick={handleLogin} disabled={loading} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginIndex;