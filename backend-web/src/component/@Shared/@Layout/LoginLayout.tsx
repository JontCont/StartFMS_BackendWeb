import { ReactNode } from "react";
import Login from "../../@Views/Login/Index";
import { Outlet } from "react-router-dom";

//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.css'


const LoginLayout = () => {
    return (
        <div>
            <Outlet />
        </div>
    );
};

export default LoginLayout;