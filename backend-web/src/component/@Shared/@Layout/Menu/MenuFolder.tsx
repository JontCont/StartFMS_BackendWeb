import { Link } from "react-router-dom";


const MenuFolder = ({ name, icon = "fas fa-tachometer-alt" }: any) => {
    return (
        <Link to="#" onClick={e => e.preventDefault()} className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
                {name}
                <i className="right fas fa-angle-left"></i>
            </p>

        </Link>
    );
}

export default MenuFolder;