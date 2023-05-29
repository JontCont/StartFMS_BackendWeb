import { ReactNode } from "react";
import Login from "../../@Views/Login/Index";
import { Outlet } from "react-router-dom";

const LoginLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default LoginLayout;