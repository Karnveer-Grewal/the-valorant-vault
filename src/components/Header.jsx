import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-container'>
      <h1 className='header-title'>The Valorant Vault</h1>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link>Home</Link>
          </li>
          <li>
            <Link>Agents</Link>
          </li>
          <li>
            <Link>Maps</Link>
          </li>
          <li>
            <Link>Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
