import { Link } from 'react-router-dom';

interface MenuFileType {
    id?: string;
    name?: string;
    icon?: string;
    url: string;
}

const MenuItem: React.FC<MenuFileType> = ({ id, name, icon = 'fas fa-tachometer-alt', url }) => {
    return (
        <li className="nav-item" key={id}>
            <Link to={url} className="nav-link">
                <i className={`nav-icon ${icon} `}></i>
                <p>{name}</p>
            </Link>
        </li>
    );
}

export default MenuItem;
