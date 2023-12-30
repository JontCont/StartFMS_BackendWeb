import { Link } from "react-router-dom";
import { ReactNode, useState, useEffect } from "react";
import { MenuTypeProps } from "../../../../models/Layout/MenuTypeProps";
import { GlobalDataContext } from "../../../../helper/GlobalDataContext";

interface MenuFolderProps {
  id?: string;
  name?: string;
  icon?: string | null;
  children: ReactNode;
  childrens?: MenuTypeProps[] | any[] | null; // 這裡的 childrens 是 MenuTypeProps 的型別
}

const MenuFolder = ({
  id,
  name,
  icon,
  children,
  childrens,
}: MenuFolderProps) => {
  const [isMenuOpen, setMenuOpen] = useState(true);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const globalData = new GlobalDataContext();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
    setMenuOpen(false);

    if (childrens != null) {
      childrens?.forEach((el: MenuTypeProps) => {
        if (el.url === currentPath) {
          setMenuOpen(true);
        }
      });
    }
  }, [childrens, currentPath]);

  const toggleMenu = () => {
    let row = {
      id: id,
      name: name,
      icon: icon,
    } as any;

    let currentIsMenuOpen = false;
    let globalValue = globalData.getData("$userMenu") ?? ([] as any[]);
    if (globalValue == null || globalValue.length === 0) {
      globalValue.push({ row: row, isMenuOpen: true });
      currentIsMenuOpen = true;
    } else {
      globalValue.forEach((element: any) => {
        let data = element.row;
        //取得 menu 清單
        if (
          data.id === row.id &&
          data.name === row.name &&
          data.icon === row.icon
        ) {
          element.isMenuOpen = !element.isMenuOpen;
          currentIsMenuOpen = element.isMenuOpen;
        }
      });
    }
    globalData.setData("$userMenu", globalValue);
    setMenuOpen(currentIsMenuOpen);
  };

  return (
    <li className={`nav-item ${isMenuOpen ? "menu-open" : ""}`} key={id}>
      <Link
        to="#"
        onClick={(e) => {
          e.preventDefault();
          toggleMenu();
        }}
        className="nav-link"
      >
        <i className={`nav-icon ${icon ?? "fas fa-tachometer-alt"}`}></i>
        <p>
          {name}
          <i className="right fas fa-angle-left"></i>
        </p>
      </Link>
      {children}
    </li>
  );
};

export default MenuFolder;
