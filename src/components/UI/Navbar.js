import './Navbar.css';

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <h1 className='navbar__brand'>Thu Nguyen</h1>
      <a href='#' className='navbar__toggle-btn'>
        <span className='navbar__toggle-btn--bar'></span>
        <span className='navbar__toggle-btn--bar'></span>
        <span className='navbar__toggle-btn--bar'></span>
      </a>
      <div className='navbar__links'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li className=''>
            <Link to='/resume'>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
