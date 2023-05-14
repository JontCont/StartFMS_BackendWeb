import logo from 'admin-lte/dist/img/AdminLTELogo.png'
import { Link } from 'react-router-dom';

interface MenuTitleProps{
    name : string,
    url? : string 
}


const MenuTitle = ({name, url = "/" }:MenuTitleProps) => {
    return (
        <Link to={url} className="brand-link">
            <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
            <span className="brand-text font-weight-light">{name}</span>
        </Link>

    );
}

export default MenuTitle;