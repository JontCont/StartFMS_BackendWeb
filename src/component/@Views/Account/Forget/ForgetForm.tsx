import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ForgetForm = () => {
  return (
    <div className="h-100vh d-flex justify-content-center">
      <div className="align-self-center">
        <div className="card">
          <div className="card-header text-center">
            <h3>忘記密碼</h3>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="請輸入註冊的 Email"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                送出
              </button>
              <Link to="/login"className="btn btn-outline-danger btn-block">返回</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetForm;
