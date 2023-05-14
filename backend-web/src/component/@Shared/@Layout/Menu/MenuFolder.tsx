

const MenuFolder = (name:string, icon :string = "fas fa-tachometer-alt") => {
    return (
        <a href="#" className="nav-link">
            <i className={`nav-icon ${icon}`}></i>
            <p>
                {name}
                <i className="right fas fa-angle-left"></i>
            </p>
        </a>
    );
}

export default MenuFolder;