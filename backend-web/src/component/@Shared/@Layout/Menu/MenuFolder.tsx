import { Link, Outlet } from "react-router-dom";
import { ReactNode, useState } from "react";

class MenuFolderType {
    id?: string;
    name?: string;
    icon?: string = 'fas fa-tachometer-alt';
    children: ReactNode;
}


const MenuFolder = (type: MenuFolderType) => {
    const [menuActionState, setmenuActionState] = useState(false);

    const handleClick = () => {
        setmenuActionState(!menuActionState);
    };

    return (
        <li
            className={`nav-item ${menuActionState ? "menu-open" : ""}`}
            onClick={handleClick} key={type.id}>
            <Link to="#" onClick={e => e.preventDefault()} className="nav-link">
                <i className="nav-icon fas fa-tachometer-alt"></i>
                <p>
                    {type.name}
                    <i className="right fas fa-angle-left"></i>
                </p>
            </Link>
            {type.children}
        </li>
    );
}

export default MenuFolder;