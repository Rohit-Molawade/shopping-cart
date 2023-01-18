import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const location = useLocation();
  return (
    <div className={`Footer ${location.pathname === '/shop' ? 'Footer-shop' : null}`}>
      <span>
        API and UI provided by <a href="http://www.valorant-api.com"> valorant-api.com</a>
      </span>
    </div>
  );
};

export default Footer;
