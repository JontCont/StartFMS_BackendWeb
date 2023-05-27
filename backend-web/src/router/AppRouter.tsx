import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route, Link, Await } from 'react-router-dom';

//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/plugins/fontawesome-free/css/all.css'
import 'admin-lte/plugins/bootstrap/js/bootstrap'
import 'admin-lte/plugins/bootstrap/js/bootstrap.bundle'
import 'admin-lte/dist/js/adminlte'

//append layout
import Header from '../component/@Shared/@Layout/Header';
import MenuSidebar from '../component/@Shared/@Layout/MenuSidebar';
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

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <MenuSidebar  />

                <div className='content-wrapper'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                    </Routes>

                    <Routes>
                        <Route path="/BDP000A" element={<SystemConfig />} />
                        <Route path="/BDP000A/:key" element={<BDP000A_EditorForm />} />


                        <Route path="/Profile" element={<ProfileHome />} />
                        <Route path="/Menu" element={<SampleReactTable />} />
                        <Route path="/Temp/Alert" element={<Alert />} />
                        <Route path="/Temp/Table" element={<SampleTable />} />
                    </Routes>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
