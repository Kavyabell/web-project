import { Link, useLocation, useNavigate } from 'react-router-dom';
import { goToSection } from '../utils/navigation';

const COPYRIGHT_YEAR = new Date().getFullYear();

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isCompanyPage = location.pathname === '/companies';

  const handleHowItWorks = (e) => {
    e.preventDefault();
    goToSection(navigate, location, {
      pathname: isCompanyPage ? '/companies' : '/',
      sectionId: 'how-it-works',
    });
  };

  const handleContact = (e) => {
    e.preventDefault();
    goToSection(navigate, location, {
      pathname: '/companies',
      sectionId: 'cta-section',
    });
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <p className="text-2xl font-bold text-primary mb-4">Funngro</p>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Empowering the next generation by connecting motivated teens with real-world projects from growing companies.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-primary smooth-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Teens</Link></li>
              <li><Link to="/companies" className="hover:text-primary smooth-transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Companies</Link></li>
              <li>
                <button
                  type="button"
                  onClick={handleHowItWorks}
                  className="hover:text-primary smooth-transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <button
                  type="button"
                  onClick={handleContact}
                  className="hover:text-primary smooth-transition text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {COPYRIGHT_YEAR} Funngro. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 md:mt-0">
            Designed for the future.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
