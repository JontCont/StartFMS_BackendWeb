import {getUsersMenus} from '../../../../services/auth'
import MenuFolder from './MenuFolder';

interface MenuTypeProps{
    children : Array<MenuTypeProps>,
    description : string,
    displayOrder : string,
    icon:string,
    id:string,
    menuName:string, 
    url:string
}


async function getMenuSidebar() {
    const element = await getUsersMenus();
    element.map((el : MenuTypeProps)=>{
        if(el.children == null){
            // 使用　menufile
        
        }else{
            // 使用　menufolder
        }
    });
    
    return <div></div>;
}

//加入遞回 medthod


const MenuItems = () => {
    getMenuSidebar();
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                        <i className="nav-icon fas fa-tachometer-alt"></i>
                        <p>
                            Dashboard
                            <i className="right fas fa-angle-left"></i>
                        </p>
                    </a>
                    <ul className="nav nav-treeview">
                        <li className="nav-item">
                            <a href="../../index.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v1</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index2.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v2</p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="../../index3.html" className="nav-link">
                                <i className="far fa-circle nav-icon"></i>
                                <p>Dashboard v3</p>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}

export default MenuItems;
