import React from 'react';

const NavBar = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>
      <div className="actions">
        <a href="#">
          <i className="fa fa-heart"></i>
        </a>
        <a href="#">
          <i className="fa fa-shopping-cart"></i>
        </a>
        <a href="#">
          <i className="fa fa-user"></i>
        </a>
      </div>
    </header>
  );
};

export default NavBar;
