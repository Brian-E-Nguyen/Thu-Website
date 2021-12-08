import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const navbarBtn = (
    <div className='navbar__toggle-btn'>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );
  const showButton = () => {
    if (window.innerWidth >= 732) setMobileView(false);
    else setMobileView(true);
  };

  window.addEventListener('resize', showButton);
  console.log(mobileView);
  return (
    <nav className='navbar'>
      <h1 className='navbar__brand'>Thu Nguyen</h1>
      {mobileView && navbarBtn}
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
