import users from 'admin-lte/dist/img/user1-128x128.jpg'
import { Link } from 'react-router-dom';


const MenuProfile = () => {
    return (
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
                <img src={users} className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
                <Link to="/Profile" className="d-block">Alexander Pierce</Link>
            </div>
        </div>

    );
}

export default MenuProfile;