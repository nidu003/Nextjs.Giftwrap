// components/NavBar.tsx
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="h-12" />
          </Link>
        </div>
        <div className="search-bar flex items-center">
          <input
            type="search"
            placeholder="Search...."
            className="py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            className="py-2 px-4 bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="right-side flex items-center space-x-4">
          <i className="fas fa-heart text-xl cursor-pointer" />
          <i className="fas fa-shopping-cart text-xl cursor-pointer" />
          <i className="fas fa-user text-xl cursor-pointer" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
