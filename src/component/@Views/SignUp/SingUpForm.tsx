import { useState } from "react";
import "./SingUp.css";
import "react-toastify/dist/ReactToastify.css";
import { SignUp } from "../../../models/System/SignUp";
import { Link } from "react-router-dom";

const SingUpForm = () => {
  let [formData, setFormData] = useState(new SignUp());

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
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="form-control"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="mt-6 input-buttons">
              <input type="button" className="btn btn-primary" value="註冊" />
              <Link className="btn btn-danger ml-2" to="/login">
                返回
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUpForm;
