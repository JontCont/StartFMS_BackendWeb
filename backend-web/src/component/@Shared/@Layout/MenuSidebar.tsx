import {getUsersMenus} from '../../../services/auth'
import MenuProfile from './Menu/MenuProfile';
import MenuSearch from './Menu/MenuSearch';
import MenuItems from './Menu/MenuItems';
import MenuTitle from './Menu/MenuTitle';

async function getMenuSidebar() {
    const element = await getUsersMenus();
    element.map((el : any)=>{
        console.log(el);
        
    });
    
    return <div></div>;
}

const MenuSidebar = () => {
    getMenuSidebar();
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <MenuTitle name="AdminLTE" />

            <div className="sidebar">
                <MenuProfile />
                <MenuSearch />
                <MenuItems></MenuItems>
            </div>
        </aside>
    );
}

export default MenuSidebar;