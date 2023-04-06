import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header-container'>
      <h1 className='header-title'>The Valorant Vault</h1>
      <nav className='header-nav'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/agents'>Agents</Link>
          </li>
          <li>
            <Link to='/maps'>Maps</Link>
          </li>
          <li>
            <Link to='/weapons'>Weapons</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
