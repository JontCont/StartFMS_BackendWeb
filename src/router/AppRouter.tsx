import { BrowserRouter, Routes, Route } from 'react-router-dom';

// append page (only views)
import Home from '../component/@Views/TopList/Home';
import About from '../component/@Views/TopList/About';
import ProfileHome from '../component/@Views/Profile/ProfileHome';

import LoginLayout from '../component/@Shared/@Layout/LoginLayout';
import Login from '../component/@Views/Login/LoginForm';
import MainLayout from '../component/@Shared/@Layout/MainLayout';
import { RequireAuth } from "react-auth-kit";
import { ToastContainer } from 'react-toastify';
import { Services, ServicesContext } from '../services/services';
import Modal from 'react-modal';
import TempleDataTable from '../component/@Views/Template/TempleDataTable';
import SampleReactTable from '../component/@Views/Template/SampleReactTable';
import Alert from '../component/@Views/Template/Alert';
import React from 'react';


Modal.setAppElement('body');

const AppRouter = () => {
    //ajax
    const privateElement = (element: JSX.Element) => {
        return (
            <RequireAuth loginPath={"/login"}>
                {element}
            </RequireAuth>
        );
    }

    const services: Services = new Services();
    const TempleDataTable = React.lazy(() => import('../component/@Views/Template/TempleDataTable'));

    return (
        <BrowserRouter>
            <ServicesContext.Provider value={services} >
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

                        <Route path="/doc/doc-1" element={<React.Suspense fallback={<div>Loading...</div>}><TempleDataTable /></React.Suspense>} />
                        <Route path="/doc/doc-2" element={privateElement(<SampleReactTable />)} />
                        <Route path="/doc/doc-3" element={privateElement(<Alert />)} />
                    </Route>

                </Routes>
            </ServicesContext.Provider>
        </BrowserRouter>
    );
}

export default AppRouter;
