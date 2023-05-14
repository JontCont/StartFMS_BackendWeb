import { Link } from 'react-router-dom';


const MenuFile = ({ name, url = "/", icon = "far fa-circle nav-icon" }: any) => {
    return (
        <Link to={url} className="nav-link">
            <i className={`nav-icon ${icon} `}></i>
            <p>{name}</p>
        </Link>
    );
}

export default MenuFile;