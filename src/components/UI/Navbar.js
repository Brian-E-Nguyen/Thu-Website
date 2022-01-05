import { useEffect, useState } from 'react';

import NavbarBrand from './NavbarBrand';
import './Navbar.css';

const Navbar = () => {
  const [mobileButton, setMobileButton] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [background, setBackground] = useState(false);

  const showButton = () => {
    if (window.innerWidth >= 733) setMobileView(false);
    else {
      setMobileView(true);
      changeBackground(true);
    }
  };
  const showMobileMenu = () => {
    if (mobileButton) setMobileButton(false);
    else setMobileButton(true);
  };
  const hideMobileMenu = () => {
    setMobileButton(false);
  };
  const changeBackground = () => {
    if (window.scrollY >= 100 || window.innerWidth <= 732) setBackground(true);
    else setBackground(false);
  };

  const navbarBtn = (
    <div className='navbar__toggle-btn' onClick={showMobileMenu}>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
      <span className='navbar__toggle-btn--bar'></span>
    </div>
  );

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('resize', showButton);
  return (
    <nav className={background ? 'navbar navbar--onscroll' : 'navbar'}>
      <a
        href='#introduction'
        className='navbar__brand'
        to='/'
        onClick={hideMobileMenu}
      >
        <NavbarBrand />
      </a>
      {mobileView && navbarBtn}
      <div className={mobileButton ? 'navbar__links ' : 'navbar__links active'}>
        <ul>
          <li>
            <a href='#about' onClick={hideMobileMenu} to='/'>
              About
            </a>
          </li>
          <li>
            <a href='#resume' onClick={hideMobileMenu} to='/resume'>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
