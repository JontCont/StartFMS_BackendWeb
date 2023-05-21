import { getUsersMenus } from '../../../../services/auth';
import { useState, useEffect } from 'react';
import MenuFile from './MenuFile';
import MenuFolder from './MenuFolder';
import { MenuTypeProps } from '../../../../interface/layout';

const getMenuSidebar = async () => {
  const element = await getUsersMenus();
  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {element.map((el: MenuTypeProps) => {
          if (el.children != null) {
            return (
              <li className="nav-item">
                <MenuFolder
                  name={el.menuName}
                  url={el.url}
                  icon={el.icon}
                />
                <ul className="nav nav-treeview">
                  {MenuItem(el.children)}
                </ul>
              </li>
            );
          } else {
            return (
              <li className="nav-item">
                <MenuFile
                  name={el.menuName}
                  url={el.url}
                  icon={el.icon}
                />
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

//加入遞回 medthod
const MenuItem = (menuList: Array<MenuTypeProps>) => {
  if (menuList == null) {
    return [];
  }

  return menuList.map((el: MenuTypeProps) => {
    if (el.children != null) {
      return (
        <li className="nav-item">
          <MenuFolder
            name={el.menuName}
            url={el.url}
          >
            <ul className="nav nav-treeview">
              {MenuItem(el.children)}
            </ul>
          </MenuFolder>
        </li>
      );
    } else {
      return (
        <li className="nav-item">
          <MenuFile
            name={el.menuName}
            url={el.url}
          // icon={el.icon}
          />
        </li>
      );
    }
  });
};

const MenuItems = () => {
  const [menu, setMenu] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const getMenu = async () => {
      const menu = await getMenuSidebar();
      setMenu(menu);
    };

    getMenu();
  }, []);

  return menu;
};

export default MenuItems;
