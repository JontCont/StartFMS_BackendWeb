import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from '../component/@Shared/Header';
// append page (only views)
import Home from '../component/template-page/Home';
import About from '../component/template-page/About';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default AppRouter;
