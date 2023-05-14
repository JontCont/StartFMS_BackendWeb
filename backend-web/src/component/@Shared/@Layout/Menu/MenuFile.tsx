

const MenuFile = ({ name, url = "/", icon = "far fa-circle nav-icon" }: any) => {
    return (
        <a href={url} className="nav-link">
            <i className={`nav-icon ${icon} `}></i>
            <p>{name}</p>
        </a>
    );
}

export default MenuFile;