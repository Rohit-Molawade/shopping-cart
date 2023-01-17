import './Main.css';
import valorant_logo from '../images/valorant-logo.png';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className="Main">
      <div className="left-div">
        <span className="main-heading">
          Welcome to <br /> Valorant store <br />
        </span>
        <span className="sub-text">
          An extensive Shop containing <br /> most in-game items, assets and more.
        </span>
        <div className="shop-button-container">
          <Link to={'/shop'}>
            <button type="submit" className="shop-button">
              SHOP
            </button>
          </Link>
        </div>
      </div>

      <div className="right-div">
        <div className="main-logo">
          <img src={valorant_logo} alt="Valorant" className="valorant-logo" />
        </div>
        <div className="main-text">STORE</div>
      </div>
    </div>
  );
};

export default Main;
