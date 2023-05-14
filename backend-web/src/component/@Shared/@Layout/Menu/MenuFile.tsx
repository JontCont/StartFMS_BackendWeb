

const MenuFile = (name:string,url : string ="/", icon :string = "far fa-circle nav-icon") => {
    return (
        <a href={url} className="nav-link">
            <i className={icon}></i>
            <p>{name}</p>
        </a>
    );
}

export default MenuFile;