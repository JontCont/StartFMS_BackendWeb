import "./login.css";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect, useContext } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Services, ServicesContext } from "../../../services/services";

const LoginForm = () => {
  const isAuthenticated = useIsAuthenticated();
  const services: Services | null = useContext(ServicesContext);
  const navigate = useNavigate();

  useEffect(() => {
    let isAuth = isAuthenticated();
    if (isAuth) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, [navigate]);

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
            <h3>Sign In</h3>
          </div>
          <div className="card-body">
            <div className="form-row">
              <label className="label">
                <span className="label-text">信箱</span>
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
              />
              <label className="label"></label>
            </div>
            <div className="mt-6 input-buttons">
              <input
                type="button"
                className="btn btn-primary"
                onClick={() => loginHandler()}
                value="Sign In"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
