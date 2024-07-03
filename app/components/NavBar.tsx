// components/Navbar.tsx
"use client";
import Link from 'next/link';
import { useState } from 'react'; // Import useState hook for handling state
import '@fortawesome/fontawesome-free/css/all.css';

const NavBar: React.FC = () => {
  // State for handling search input
  const [searchTerm, setSearchTerm] = useState('');

  // Function to handle form submission (not implemented here)
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your form submission logic here
    console.log('Search term:', searchTerm);
  };

  return (
    <nav className="navbar bg-gray-900 text-white p-4">
      <div className="flex items-center justify-between">
        <div className="logo">
          <Link href="/">
            <img src="/Logo.png" alt="Logo" className="h-12" />
          </Link>
        </div>
        <div className="search-bar flex items-center">
          <form onSubmit={handleSubmit} className="flex">
            <input
              type="search"
              placeholder="Search...."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="py-2 px-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            <button type="submit" className="py-2 px-4 bg-blue-500 text-white rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <i className="fas fa-search" />
            </button>
          </form>
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