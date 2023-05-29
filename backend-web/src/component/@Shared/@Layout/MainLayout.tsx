import { ReactNode } from "react";
import Header from "./Header";
import MenuSidebar from "./MenuSidebar";
//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/plugins/bootstrap/js/bootstrap'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle'
import 'admin-lte/dist/js/adminlte'
import { Outlet } from "react-router-dom";

const MainLayout = () => {
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