import { Link, Outlet } from "react-router-dom";
import { ReactNode, useState } from "react";

class MenuFolderType {
    id?: string;
    name?: string;
    icon?: string | null;
    children: ReactNode;
}


const MenuFolder = (models: MenuFolderType) => {
    const [menuActionState, setmenuActionState] = useState(false);

    const handleClick = () => {
        setmenuActionState(!menuActionState);
    };

    return (
        <li className={`nav-item ${menuActionState ? "menu-open" : ""}`}
            onClick={handleClick} key={models.id}>
            <Link to="#" onClick={e => e.preventDefault()} className="nav-link">
                <i className={`nav-icon ` + models.icon ?? 'fas fa-tachometer-alt'}></i>
                <p>
                    {models.name}
                    <i className="right fas fa-angle-left"></i>
                </p>
            </Link>
            {models.children}
        </li>
    );
}

export default MenuFolder;