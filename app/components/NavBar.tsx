// components/Navbar.tsx
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <img src="/Logo.png" alt="Logo" />
        </Link>
      </div>
      <div className="search-bar">
        <input type="search" placeholder="Search...." />
        <button type="submit"><i className="fas fa-search" /></button>
      </div>
      <div className="right-side">
        <div className="icons">
          <i className="fas fa-heart" />
          <i className="fas fa-shopping-cart" />
          <i className="fas fa-user" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;