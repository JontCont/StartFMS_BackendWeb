import { useState,useEffect,useRef } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";


const LoginIndex = () => {
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
    const loginHandler = () => {
        // Assuming that, all network Request is successfull, and the user is authenticated
        if (
            signIn({
                token: "35v3443bn368367n306306wbn407qn420b436b4", //Just a random token
                tokenType: "Bearer", // Token type set as Bearer
                authState: { name: "React User", uid: 123456 }, // Dummy auth user state
                expiresIn: 120 // Token Expriration time, in minutes
            })
        ) {
            // If Login Successfull, then Redirect the user to secure route
            navigate("/");
        } else {
            // Else, there must be some error. So, throw an error
            alert("Error Occoured. Try Again");
        }
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
                        <div className="mt-6">
                            <input type="button" className="btn btn-primary" onClick={loginHandler} value="Sign In" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginIndex;