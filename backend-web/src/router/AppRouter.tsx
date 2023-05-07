import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from '../component/template-page/Home';
import About from '../component/template-page/About';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                </nav>

            </div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
