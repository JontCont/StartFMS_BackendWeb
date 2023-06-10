import { useState,useEffect,useRef } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import './css/login.css'
import { loginByAuth } from "../../../services/auth";

const LoginForm = () => {
    //initial : auth kit 
    const isAuthenticated = useIsAuthenticated();
    useEffect(() => {
        console.log(isAuthenticated());
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
        // Assuming that, all network Request is successfull, and the user is authenticated
        const token = await loginByAuth(useremail,password);
        if(token) 
        {
            signIn({
                token: token, //Just a random token
                tokenType: "Bearer", // Token type set as Bearer
                authState: { name: "React User", uid: 123456 }, // Dummy auth user state
                expiresIn: 120 // Token Expriration time, in minutes
            })
            // If Login Successfull, then Redirect the user to secure route
            navigate("/");
        } else {
            // Else, there must be some error. So, throw an error
            alert("Error Occoured. Try Again");
        }
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