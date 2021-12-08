import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [mobileView, setMobileView] = useState(false);
  const [background, setBackground] = useState(false);

  const showButton = () => {
    if (window.innerWidth >= 732) setMobileView(false);
    else {
      setMobileView(true);
      changeBackground(true);
    }
  };
  const showMobileMenu = () => {
    if (click) setClick(false);
    else setClick(true);
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
      <h1 className='navbar__brand'>Thu Nguyen</h1>
      {mobileView && navbarBtn}
      <div className={click ? 'navbar__links ' : 'navbar__links active'}>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/resume'>Resume</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
