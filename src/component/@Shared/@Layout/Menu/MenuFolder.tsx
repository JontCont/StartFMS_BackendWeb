import { Link } from "react-router-dom";
import { ReactNode, useState, useEffect } from "react";
import { MenuTypeProps } from "../../../../models/Layout/MenuTypeProps";
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
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  useEffect(() => {
    setMenuOpen(false);
    if (childrens != null) {
      childrens?.map((el: MenuTypeProps) => {
        if (el.url === currentPath) {
          setMenuOpen(true);
        }
      });
    }
  });

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <li
      className={`nav-item ${isMenuOpen ? "menu-open" : ""}`}
      onClick={toggleMenu}
      key={id}
    >
      <Link to="#" onClick={(e) => e.preventDefault()} className="nav-link">
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
