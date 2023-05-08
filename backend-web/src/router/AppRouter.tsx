import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
//append css or js
import 'admin-lte/dist/css/adminlte.min.css'
import 'admin-lte/dist/js/adminlte'
import 'admin-lte/plugins/fontawesome-free/css/all.css'
//append layout
import Header from '../component/@Shared/Header';
import MenuSidebar from '../component/@Shared/MenuSidebar';
// append page (only views)
import Home from '../component/template-page/Home';
import About from '../component/template-page/About';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <MenuSidebar/>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
