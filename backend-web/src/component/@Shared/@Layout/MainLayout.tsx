import Header from "./Header";
import MenuSidebar from "./MenuSidebar";
//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/plugins/bootstrap/js/bootstrap'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle'
import 'admin-lte/dist/js/adminlte'
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useIsAuthenticated, useSignIn } from "react-auth-kit";

const MainLayout = () => {
    const navigate = useNavigate();
    const isAuthenticated = useIsAuthenticated();

    useEffect(() => {
        if(!isAuthenticated()){
            navigate("/login", { replace: true });
        }
      }, []);

    return (
        <div className="wrapper">
            <Header />
            <MenuSidebar />

            <div className='content-wrapper'>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;

function isAuthenticated(): any {
    throw new Error("Function not implemented.");
}
