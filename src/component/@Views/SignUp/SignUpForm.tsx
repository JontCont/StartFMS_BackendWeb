import "./SignUp.css";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { SignUp } from "../../../models/System/SignUp";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const SignUpForm = () => {
  let [formData, setFormData] = useState(new SignUp());

  const vaiidateForm = (): boolean => {
    let status = true;
    if (String.IsNullOrEmpty(formData.email)) {
      toast.error("[必填] 請輸入Email");
      status = false;
    }

    if (String.IsNullOrEmpty(formData.account)) {
      toast.error("[必填] 請輸入帳號");
      status = false;
    }

    if (String.IsNullOrEmpty(formData.password)) {
      toast.error("[必填] 請輸入密碼");
      status = false;
    }

    if (String.IsNullOrEmpty(formData.confirmPassword)) {
      toast.error("[必填] 請輸入確認密碼");
      status = false;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("密碼與確認密碼不符，請重新輸入");
      status = false;
    }

    if (String.IsNullOrEmpty(formData.name)) {
      toast.error("[必填] 請輸入使用者姓名");
      status = false;
    }

    return status;
  };

  const onSaveForm = () => {
    if (!vaiidateForm()) {
      return false;
    }
    toast.success("註冊成功");
    // Call API to save data

    alert(JSON.stringify(formData));
  };

  return (
    <div className="h-100vh d-flex justify-content-center">
      <div className="align-self-center">
        <div className="card">
          <div className="card-header text-center">
            <h3>註冊</h3>
          </div>
          <div className="card-body">
            <div className="form-row">
              <label className="label">
                <span className="label-text required">使用者姓名</span>
              </label>
              <input
                type="text"
                placeholder="使用者姓名"
                className="form-control"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div className="form-row">
              <label className="label">
                <span className="label-text required">帳號</span>
              </label>
              <input
                type="text"
                placeholder="帳號"
                className="form-control"
                value={formData.account}
                onChange={(e) =>
                  setFormData({ ...formData, account: e.target.value })
                }
              />
            </div>
            <div className="form-row">
              <label className="label">
                <span className="label-text required">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="form-row">
              <label className="label">
                <span className="label-text required">密碼</span>
              </label>
              <input
                type="password"
                placeholder="密碼"
                className="form-control"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </div>

            <div className="form-row">
              <label className="label">
                <span className="label-text required">確認密碼</span>
              </label>
              <input
                type="password"
                placeholder="確認密碼"
                className="form-control"
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="mt-6 input-buttons">
              <input
                type="button"
                className="btn btn-primary"
                value="註冊"
                onClick={onSaveForm}
              />
              <Link className="btn btn-outline-danger ml-2" to="/login">
                返回
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
