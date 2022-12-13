import logo from '../images/rick_morty_logo.png';
import '../styles/components/Header.scss';
import { Link } from 'react-router-dom';
function Header(props) {
  return (
    <header className="header">
      <Link to="/">
        <h1 className="hidden">Rick and Morty</h1>
        <img
          className="header__img"
          src={logo}
          alt="Rick and Morty logo"
          title="Rick and Morty"
        />
      </Link>
    </header>
  );
}

export default Header;
