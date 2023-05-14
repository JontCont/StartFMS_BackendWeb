

const MenuFolder = ({ name, icon = "fas fa-tachometer-alt" }: any) => {
    return (
        <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt"></i>
            <p>
                {name}
                <i className="right fas fa-angle-left"></i>
            </p>
        </a>
    );
}

export default MenuFolder;