import React from 'react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="logo">
        <Link href="/" passHref>
          <a>
            <img src="/logo.png" alt="Logo" width={50} height={50} />
          </a>
        </Link>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <img src="/searchbutton.png" alt="Search" width={20} height={20} />
        </button>
      </div>
      <div className="icons">
        <Link href="/favorites" passHref>
          <a>
            <img src="/Heart.jpg" alt="Heart" width={20} height={20} />
          </a>
        </Link>
        <Link href="/cart" passHref>
          <a>
            <img src="/Cart.jpg" alt="Cart" width={20} height={20} />
          </a>
        </Link>
        <Link href="/profile" passHref>
          <a>
            <img src="/contact.jpg" alt="User" width={20} height={20} />
          </a>
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
