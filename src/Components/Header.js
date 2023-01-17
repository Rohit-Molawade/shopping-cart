import { Link } from 'react-router-dom';
import './Header.css';
import valorant_logo from '../images/valorant-logo.png';

const Header = () => {
  return (
    <div className="Header">
      <div className="title">
        <div className="logo">
          <img src={valorant_logo} alt="Logo" className="destiny_logo" />
        </div>
        <Link to={'/'}>VALORANT STORE</Link>
      </div>
      <div className="links">
        <Link to={'/'}>HOME</Link>
        <Link to={'/shop'}>SHOP</Link>
        <Link to={'/about'}>ABOUT</Link>
      </div>
    </div>
  );
};

export default Header;
