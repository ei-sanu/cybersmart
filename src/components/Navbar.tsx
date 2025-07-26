import { Clock, Menu, Shield, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState(new Date());
  const location = useLocation();

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const getDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 group">
            <Shield className="h-8 w-8 text-blue-500 group-hover:text-blue-400 transition-colors" />
            <span className="text-xl font-bold text-white">CyberSmart</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {/* Clock Display - Now positioned before navigation links */}
              <div className="flex items-center space-x-2 text-gray-300">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">{formatTime(time)}</span>
                <span className="text-sm font-medium text-blue-400">{getDay(time)}</span>
              </div>

              <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                Home
              </Link>
              <Link
                to="/contact"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/contact')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive('/about')
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
              >
                About Dev
              </Link>
            </div>
          </div>

          {/* Mobile Clock and Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Clock Display for Mobile Header */}
            <div className="flex items-center space-x-2 text-gray-300">
              <Clock className="h-5 w-5" />
              <span className="text-sm font-medium">{formatTime(time)}</span>
              <span className="text-sm font-medium text-blue-400">{getDay(time)}</span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/contact')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              Contact Us
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${isActive('/about')
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
            >
              About Dev
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
