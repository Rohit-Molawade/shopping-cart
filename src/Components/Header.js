import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import valorant_logo from '../images/valorant-logo.png';

const Header = () => {
  const location = useLocation();

  return (
    <div className={`Header ${location.pathname === '/shop' ? 'Header-shop' : null}`}>
      <div className="title">
        <div className="logo">
          <img src={valorant_logo} alt="Logo" className="destiny_logo" style={{ margin: 'asdasd' }} />
        </div>
        <Link to={'/'}>VALORANT STORE</Link>
      </div>
      <div className="links">
        <Link to={'/'} className={location.pathname === '/' ? 'active-link' : null}>
          HOME
        </Link>
        <Link to={'/shop'} className={location.pathname === '/shop' ? 'active-link' : null}>
          SHOP
        </Link>
        <Link to={'/about'} className={location.pathname === '/about' ? 'active-link' : null}>
          ABOUT
        </Link>
      </div>
    </div>
  );
};

export default Header;
