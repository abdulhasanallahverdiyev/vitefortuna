import { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { mainContext } from '../Context/Context';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo-fortuna.png';
import close from '../assets/close.png';
import '../Css/Navbar.css';
import { AiFillYoutube } from 'react-icons/ai';
const Navbar = () => {
  const { open, handleOpen, sidebarActive } = useContext(mainContext);
  const [navbar, setNavbar] = useState(false);
  let activeStyle = {
    color: '#ED7F1E',
  };

  const changeBackground = () => {
    if (window.scrollY > 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);
  const hamburgerMenu = (button) => {
    button.classList.toggle('change');
  };
  return (
    <header
      id="masthead"
      className={navbar ? 'small-head active-header' : 'small-head'}>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-wrapper">
            <div className="logo">
              <Link to="/">
                <img
                  title="Fortuna media"
                  width="150px"
                  height="auto"
                  src={logo}
                  alt="Fortuna media"
                />
              </Link>
            </div>
            <ul className="navbar-list">
              <li className="navbar-item">
                <NavLink
                  to="/"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Əsas
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/about"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Haqqımızda
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/services"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Xidmətlər
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/portfolio"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Portfolio
                </NavLink>
              </li>
              <li className="navbar-item">
                <NavLink
                  to="/organization"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Organizasiya
                </NavLink>
              </li>
            </ul>
            <div className="navbar-right">
              <ul className="social_media">
                <li>
                  <Link to="/" target="_blank" rel="nofollow">
                    <FaFacebookF />{' '}
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://www.instagram.com/fortunamedia_/#"
                    target="_blank"
                    rel="nofollow">
                    <FaInstagram />
                  </Link>
                </li>

                <li>
                  <Link
                    to="https://www.youtube.com/@FortunaMediaOfficial"
                    target="_blank"
                    rel="nofollow">
                    {' '}
                    <AiFillYoutube />
                  </Link>
                </li>
              </ul>
              <div className="hamburger">
                <button
                  className={open ? 'change' : ''}
                  onClick={() => {
                    handleOpen();
                    hamburgerMenu(document.querySelector('.hamburger button'));
                  }}>
                  <span className={open ? 'change bar1' : ''}></span>
                  <span className={open ? 'change bar2' : ''}></span>
                  <span className={open ? 'change bar3' : ''}></span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="all-mobile-side">
        <div
          className="side-bar"
          style={{ transform: open ? 'translate(0%)' : 'translate(-100%)' }}>
          <div className="side-bar-header">
            <div className="logo">
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="close-side-bar">
              <button onClick={handleOpen}>
                <img src={close} alt="close icon for menu" />
              </button>
            </div>
          </div>
          <div className="side-bar-body">
            <ul className="menu">
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Əsas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Haqqımızda
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Xidmətlər
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/portfolio"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Portfolio
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/organization"
                  className="navbar-link"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>
                  Organizasiya
                </NavLink>
              </li>
            </ul>
            <div className="social-mobile">
              <div className="mobile_social">
                <ul>
                  <li>
                    <Link to="/" target="_blank" rel="nofollow">
                      <FaFacebookF />{' '}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.instagram.com/fortunamedia_/#"
                      target="_blank"
                      rel="nofollow">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://www.youtube.com/@FortunaMediaOfficial"
                      target="_blank"
                      rel="nofollow">
                      {' '}
                      <AiFillYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className="overlay-sidebar "
          style={
            sidebarActive ? { display: 'block' } : { display: 'none' }
          }></div>
      </div>
    </header>
  );
};

export default Navbar;
