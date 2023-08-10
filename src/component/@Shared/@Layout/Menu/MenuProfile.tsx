import users from 'admin-lte/dist/img/user1-128x128.jpg'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthHeader, useAuthUser, useSignOut } from "react-auth-kit";



const MenuProfile = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // 使用 useNavigate 鉤子來進行路由導航
    const signOut = useSignOut();
    const authUser = useAuthUser();
    const userDisplayName = authUser()?.name ?? 'Unknown';

    const handleLogOut = (e: any) => {
        signOut();
        navigate("/login",{ replace: true }); // 登入成功後進行路由導航到 "/app"
    };

    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex justify-content-between">
            <div className="image">
                <img src={users} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <Link to="/Profile" className="d-block">{userDisplayName}</Link>
            </div>
            <div className='btn btn btn-outline-light border-0' onClick={handleLogOut}>
                <i className="fas fa-sign-out-alt"></i>
            </div>
        </div>

    );
}

export default MenuProfile;