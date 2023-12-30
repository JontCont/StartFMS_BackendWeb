/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from 'react';
import MenuFile from './MenuFile';
import MenuFolder from './MenuFolder';
import { Services, ServicesContext } from '../../../../services/services';
import { MenuTypeProps } from '../../../../models/Layout/MenuTypeProps';

const renderMenuElements = (menuList: any) => {
  if (menuList == null) return null;

  return menuList.map((el: MenuTypeProps, index: number) => {
    return (el.children != null) ? renderMenuFolder(el) : renderMenuFile(el);
  });
};

const renderMenuFolder = (el: any) => {
  return (
    <MenuFolder name={el.menuName} icon={el.icon}>
      <ul className="nav nav-treeview">
        {renderMenuElements(el.children)}
      </ul>
    </MenuFolder>
  );
}

const renderMenuFile = (el: any) => {
  return (
    <MenuFile name={el.menuName} url={el.url} icon={el.icon} />
  );
}


const MenuItems = () => {
  const [menuElement, setMenuElement] = useState<JSX.Element | null>(null);
  const services: Services | null = useContext(ServicesContext);

  useEffect(() => {
    const getMenuList = async () => {
      //取得 menu 清單
      const element = await services?.users.getUsersMenus();
      if (!element) {
        return setMenuElement(null);
      }

      const menuElement = renderMenuElements(element);
      setMenuElement(menuElement);
    };
    getMenuList();
  }, [services]);

  return (
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {menuElement}
      </ul>
    </nav>
  );
};

export default MenuItems;