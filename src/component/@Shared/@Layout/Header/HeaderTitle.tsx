import { Link } from 'react-router-dom';

const HeaderTitle = () => {
    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
                <Link to="/about" className="nav-link">About</Link>
            </li>
        </ul>
    );
}

export default HeaderTitle;