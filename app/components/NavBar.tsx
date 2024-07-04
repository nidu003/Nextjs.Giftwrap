import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.css';

const NavBar: React.FC = () => {
  return (
    <nav className="bg-white p-4 flex flex-col md:flex-row justify-between items-center text-gray-800">
      <div className="flex justify-between w-full md:w-auto items-center">
        <div className="logo">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="h-8 md:h-12" />
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-gray-800">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
      <div className="hidden md:flex w-full md:w-auto mt-4 md:mt-0">
        <div className="search-bar flex items-center w-full md:w-auto">
          <input type="search" placeholder="Search...." className="p-2 rounded-l-md w-full md:w-64" />
          <button type="submit" className="p-2 bg-gray-700 rounded-r-md">
            <i className="fas fa-search" />
          </button>
        </div>
        <div className="right-side flex items-center ml-4">
          <div className="icons flex space-x-4">
            <i className="fas fa-heart" />
            <i className="fas fa-shopping-cart" />
            <i className="fas fa-user" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
