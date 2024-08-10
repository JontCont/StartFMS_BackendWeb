import "./login.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Services, ServicesContext } from "../../../services/services";

const LoginForm = () => {
  const isAuthenticated = useIsAuthenticated();
  const services: Services | null = useContext(ServicesContext);
  const navigate = useNavigate();
  
  // useEffect(() => {
  //   let isAuth = isAuthenticated();
  //   if (isAuth) {
  //     navigate("/");
  //   } else {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate]);

  let [useremail, setUseremail] = useState("");
  let [password, setPassword] = useState("");

  const signIn = useSignIn();

  const loginHandler = async () => {
    if (!useremail || !password) {
      toast.error("請輸入使用者帳號、密碼");
      return false;
    }

    try {
      const token = await services?.auth.login(useremail, password);
      if (!token) {
        toast.error("帳號或密碼輸入錯誤，請重新輸入");
        return false;
      }

      signIn({
        token: token,
        tokenType: "Bearer",
        authState: { name: "React User", uid: 123456 },
        expiresIn: 120,
      });

      window.location.href = "/";
    } catch (error) {
      console.error("An error occurred during login:", error);
      toast.error("登入時發生錯誤，請稍後再試");
    }
  };

  return (
    <div className="h-100vh d-flex justify-content-center">
      <div className="align-self-center">
        <div className="card">
          <div className="card-header text-center">
            <h3>登入</h3>
          </div>
          <div className="card-body">
            <div className="form-row">
              <label className="label">
                <span className="label-text">使用者/Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={useremail}
                onChange={(e) => setUseremail(e.target.value)}
              />
            </div>
            <div className="form-row">
              <label className="label">
                <span className="label-text">密碼</span>
              </label>
              <input
                type="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    loginHandler();
                  }
                }}
              />
              <label className="label"></label>
            </div>

            <div>
              <Link to="/forgot-password" className="mr-2">忘記密碼？</Link>
              <Link to="/signup">註冊新帳號</Link>
            </div>
            <div className="mt-6 input-buttons">
              <input
                type="button"
                className="btn btn-primary"
                onClick={() => loginHandler()}
                value="登入"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
