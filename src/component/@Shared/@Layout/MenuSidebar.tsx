import MenuProfile from './Menu/MenuProfile';
import MenuSearch from './Menu/MenuSearch';
import MenuItems from './Menu/MenuItems';
import MenuTitle from './Menu/MenuTitle';

const MenuSidebar = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <MenuTitle name="AdminLTE" />

            <div className="sidebar">
                <MenuProfile />
                <MenuSearch />
                <MenuItems />
            </div>
        </aside>
    );
}

export default MenuSidebar;