import { Link } from "react-router-dom";
import { ReactNode, useState } from "react";

interface MenuFolderProps {
    id?: string;
    name?: string;
    icon?: string | null;
    children: ReactNode;
}

const MenuFolder = ({ id, name, icon, children }: MenuFolderProps) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <li className={`nav-item ${isMenuOpen ? "menu-open" : ""}`}
            onClick={toggleMenu} key={id}>
            <Link to="#" onClick={e => e.preventDefault()} className="nav-link">
                <i className={`nav-icon ${icon ?? 'fas fa-tachometer-alt'}`}></i>
                <p>
                    {name}
                    <i className="right fas fa-angle-left"></i>
                </p>
            </Link>
            {children}
        </li>
    );
}

export default MenuFolder;