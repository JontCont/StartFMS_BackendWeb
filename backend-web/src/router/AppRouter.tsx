import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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

import BDP000A from '../component/@Views/Systems/BDP000A';
import ProfileHome from '../component/@Views/Profile/ProfileHome';
import Alert from '../component/@Views/Template/Alert';
import Table from '../component/@Views/Template/Table';

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
                        <Route path="/Profile" element={<ProfileHome />} />
                        <Route path="/BDP000A" element={<BDP000A />} />
                        <Route path="/Temp/Alert" element={<Alert />} />
                        <Route path="/Temp/Table" element={<Table />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
