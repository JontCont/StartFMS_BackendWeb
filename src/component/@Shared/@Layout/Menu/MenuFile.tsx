import { Link } from 'react-router-dom';

class MenuFileType {
    id?: string;
    name?: string;
    icon?: string = 'fas fa-tachometer-alt';
    url: string = "/";
}

const MenuFile = (type: MenuFileType) => {
    return (
        <li className="nav-item" key={type.id}>
            <Link to={type.url} className={"nav-link"}>
                <i className={`nav-icon ${type.icon} `}></i>
                <p>{type.name}</p>
            </Link>
        </li>
    );
}

export default MenuFile;