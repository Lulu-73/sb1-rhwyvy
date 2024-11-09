import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, ShoppingBag, CreditCard } from 'lucide-react';

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-pink-800">
              Price Analyzer
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/browse"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/browse'
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <Home className="h-5 w-5 mr-1" />
              Browse
            </Link>
            
            <Link
              to="/payment"
              className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                location.pathname === '/payment'
                  ? 'text-pink-600 bg-pink-50'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <CreditCard className="h-5 w-5 mr-1" />
              Payment
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;