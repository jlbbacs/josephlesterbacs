import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../css/nav.css';
import Logo from '../images/logo.svg';

function Navbar() {
  useEffect(() => {
    const navbarCollapse = document.getElementById('navbarNavAltMarkup');
    if (!navbarCollapse || !window.bootstrap) return;

    const bsCollapse = new window.bootstrap.Collapse(navbarCollapse, { toggle: false });

    const handleLinkClick = () => {
      bsCollapse.hide();
    };

    // Attach click listeners to nav links to auto-collapse menu
    const links = navbarCollapse.querySelectorAll('a.nav-link');
    links.forEach(link => {
      link.addEventListener('click', handleLinkClick);
    });

    // Cleanup listeners on unmount
    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleLinkClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <Link to="/">
          <img className="my-logo" src={Logo} alt="my logo" />
        </Link>

        <button
          className="dropdown-toggle navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/project">
              Project
            </Link><Link className="nav-link" to="/certificates">
              Certifications
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
