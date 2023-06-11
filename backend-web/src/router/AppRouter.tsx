import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, Await } from 'react-router-dom';

// append page (only views)
import Home from '../component/@Views/TopList/Home';
import About from '../component/@Views/TopList/About';

import ProfileHome from '../component/@Views/Profile/ProfileHome';
import SampleTable from '../component/@Views/Template/SampleTable';

import SystemConfig from '../component/@Views/Systems/SystemConfig/SystemConfigIndex'
import SystemConfigEdit from '../component/@Views/Systems/SystemConfig/SytemConfigEdit'
import LoginLayout from '../component/@Shared/@Layout/LoginLayout';
import Login from '../component/@Views/Auth/LoginForm';
import MainLayout from '../component/@Shared/@Layout/MainLayout';
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from 'react-toastify';

const AppRouter = () => {
    const privateElement = (element: JSX.Element) => {
        return (
            <RequireAuth loginPath={"/login"}>
                {element}
            </RequireAuth>
        );
    }

    return (
        <BrowserRouter>
            <ToastContainer />
            <Routes>
                {/* user authrozie element */}
                <Route path="/Login" element={<LoginLayout />}>
                    <Route path="/Login" element={<Login />} />
                </Route>


                {/* System element */}
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={privateElement(<Home />)} />
                    <Route path="/Profile" element={privateElement(<ProfileHome />)} />
                    <Route path="/about" element={privateElement(<About />)} />

                    <Route path="/BDP000A" element={privateElement(<SystemConfig />)} />
                    <Route path="/BDP000A/:id" element={privateElement(<SystemConfigEdit />)} />
                    <Route path="/Menu" element={privateElement(<SampleTable />)} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
