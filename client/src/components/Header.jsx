import React from 'react';
import logo from './assets/miz.png';

const Header = () => {
  return (
    <nav className="navbar bg-light mb-4 p-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          <div className="d-flex">
            <img src={logo} className="d-inline-block mr-2" alt="Miz1" />
            <div>Minzanyi management</div>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default Header;
