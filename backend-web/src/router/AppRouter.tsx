import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, Await } from 'react-router-dom';

// append page (only views)
import Home from '../component/@Views/TopList/Home';
import About from '../component/@Views/TopList/About';

import BDP000A from '../component/@Views/Systems/BDP000A/Index';
import BDP000A_EditorForm from '../component/@Views/Systems/BDP000A/EditorForm';

import ProfileHome from '../component/@Views/Profile/ProfileHome';
import Alert from '../component/@Views/Template/Alert';
import SampleTable from '../component/@Views/Template/SampleTable';
import SampleReactTable from '../component/@Views/Template/SampleReactTable';

import SystemConfig from '../component/@Views/Systems/SystemConfig/Index'
import LoginLayout from '../component/@Shared/@Layout/LoginLayout';
import Login from '../component/@Views/Login/Index';
import MainLayout from '../component/@Shared/@Layout/MainLayout';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/Login" element={<LoginLayout />}>
                    <Route path="/Login" element={<Login />} />
                </Route>
                <Route path="/" element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
