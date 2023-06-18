import { useState, useEffect, useContext } from 'react';
import MenuFile from './MenuFile';
import MenuFolder from './MenuFolder';
import { MenuTypeProps } from '../../../../interface/layout';
import { Services, ServicesContext } from '../../../../services/services';

const getMenusElement = (menuList: any) => {
  if (menuList == null) return null;

  return menuList.map((el: MenuTypeProps, index: number) => {
    return (el.children != null) ? getMenuFolder(el) : getMenuFile(el);
  });
};

const getMenuFolder = (el: any) => {

  return (
    <MenuFolder name={el.menuName}>
      <ul className="nav nav-treeview">
        {getMenusElement(el.children)}
      </ul>
    </MenuFolder>
  );
}

const getMenuFile = (el: any) => {
  return (
    <MenuFile name={el.menuName} url={el.url} icon={el.icon} />
  );
}


const MenuItems = () => {
  const [menuElement, setMenuElement] = useState(null);
  const services: Services | null = useContext(ServicesContext);

  useEffect(() => {
    const getMenuList = async () => {
      //取得 menu 清單
      const element = await services?.users.getUsersMenus();
      if (element == null || element == undefined) {
        return (<nav className="mt-2"></nav>);
      }

      const menuElement = getMenusElement(element);
      setMenuElement(menuElement);
    };
    getMenuList();
  }, []);

  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {menuElement}
      </ul>
    </nav>
  );
};

export default MenuItems;