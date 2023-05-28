import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../component/@Views/Login/Index";
import AppRouter from "./AppRouter";


const Authorize = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Authorize;
