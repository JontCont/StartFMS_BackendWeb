/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

const HeaderTitle = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link to="/" className="nav-link">首頁</Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link to="/about" className="nav-link">關於我</Link>
            </li>
        </ul>
    );
}

export default HeaderTitle;