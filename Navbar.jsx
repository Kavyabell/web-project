import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { goToSection } from '../utils/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isCompanyPage = location.pathname === '/companies';

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home / Teen', path: '/' },
    { name: 'Companies', path: '/companies' },
    { name: 'How It Works', path: isCompanyPage ? '/companies#how-it-works' : '/#how-it-works' },
    { name: 'Opportunities', path: isCompanyPage ? '/companies#projects' : '/#opportunities' },
  ];

  const isActive = (path) => {
    if (path.includes('#')) return false;
    if (path === '/' && (location.pathname === '/' || location.pathname === '/teen')) return true;
    return location.pathname === path;
  };

  const handleNavClick = (e, path) => {
    setIsOpen(false);
    if (!path.includes('#')) return;

    e.preventDefault();
    const [route, hash] = path.split('#');
    goToSection(navigate, location, { pathname: route || '/', sectionId: hash });
  };

  const handleGetStarted = () => {
    setIsOpen(false);
    if (isCompanyPage) {
      goToSection(navigate, location, { pathname: '/companies', sectionId: 'cta-section' });
    } else {
      goToSection(navigate, location, { pathname: '/', sectionId: 'opportunities' });
    }
  };

  // Handle hash scrolling on page load
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        document.getElementById(location.hash.substring(1))?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary" aria-label="Funngro Home">Funngro</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavClick(e, link.path)}
                  className={`${
                    isActive(link.path) ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
                  } px-3 py-2 rounded-md text-sm font-medium smooth-transition`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <button 
              onClick={handleGetStarted}
              className="bg-primary hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md smooth-transition focus:ring-2 focus:ring-green-400 focus:outline-none"
            >
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-primary focus:outline-none p-2 rounded-md focus:ring-2 focus:ring-green-400"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full left-0 right-0">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={(e) => handleNavClick(e, link.path)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path) ? 'text-primary bg-green-50' : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 px-3">
              <button 
                onClick={handleGetStarted}
                className="w-full bg-primary hover:bg-green-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-sm focus:ring-2 focus:ring-green-400 focus:outline-none"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
