import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { services } from '../data/services';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 1);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuote = () => {
    if (location.pathname === '/') {
      document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#hero';
    }
  };

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  const reviewsHref = location.pathname === '/' ? '#reviews' : '/#reviews';
  const faqHref = location.pathname === '/' ? '#faq' : '/#faq';

  return (
    <div className="font-sans text-white bg-navy-900 min-h-screen selection:bg-gold selection:text-navy-900">
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-6 ${
          isScrolled ? 'bg-navy-900 shadow-lg border-b-2 border-gold' : 'bg-transparent border-b-2 border-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/logo.svg" alt="MPH Property Services" className="h-14 md:h-16 w-auto" />
          </Link>

          {/* Desktop: main links + Services dropdown */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-base font-bold hover:text-gold transition-colors duration-200">
              HOME
            </Link>
            <Link to="/about" className="text-base font-bold hover:text-gold transition-colors duration-200">
              ABOUT
            </Link>
            <div className="relative group">
              <button className="text-base font-bold hover:text-gold transition-colors duration-200 flex items-center gap-1">
                SERVICES
                <ChevronDown size={18} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-navy-800 border border-white/10 rounded-lg shadow-xl py-2 min-w-[220px]">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      to={`/services/${s.slug}`}
                      className="block px-5 py-2.5 text-sm font-bold hover:bg-navy-900 hover:text-gold transition-colors"
                    >
                      {s.title.replace(/\s+/g, ' ')}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/process" className="text-base font-bold hover:text-gold transition-colors duration-200">
              PROCESS
            </Link>
            <a href={reviewsHref} className="text-base font-bold hover:text-gold transition-colors duration-200">
              REVIEWS
            </a>
            <a href={faqHref} className="text-base font-bold hover:text-gold transition-colors duration-200">
              FAQ
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:1234567891" className="flex items-center space-x-2 bg-black border border-white/20 text-white px-4 py-2.5 rounded font-bold text-base hover:bg-navy-800 hover:text-gold transition-colors duration-200">
              <Phone size={20} className="text-gold" />
              <span>(123) 456-7891</span>
            </a>
            <button
              onClick={scrollToQuote}
              className="bg-gold text-white px-6 py-2.5 rounded font-bold text-base hover:bg-white hover:text-navy-900 transition-colors duration-200"
            >
              GET FREE QUOTE
            </button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-navy-800 absolute top-full left-0 right-0 p-4 shadow-xl border-t border-white/10">
            <div className="flex flex-col space-y-1">
              <Link to="/" className="text-white hover:text-gold font-bold text-base py-2.5 border-b border-white/5" onClick={closeMobile}>
                HOME
              </Link>
              <Link to="/about" className="text-white hover:text-gold font-bold text-base py-2.5 border-b border-white/5" onClick={closeMobile}>
                ABOUT
              </Link>
              <div className="border-b border-white/5">
                <button
                  className="w-full flex justify-between items-center text-white hover:text-gold font-bold text-base py-2.5"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  SERVICES
                  <ChevronDown size={18} className={isServicesOpen ? 'rotate-180' : ''} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 pb-2 flex flex-col space-y-1">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="text-gray-300 hover:text-gold text-sm py-1.5"
                        onClick={closeMobile}
                      >
                        {s.title.replace(/\s+/g, ' ')}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/process" className="text-white hover:text-gold font-bold text-base py-2.5 border-b border-white/5" onClick={closeMobile}>
                PROCESS
              </Link>
              <a href={reviewsHref} className="text-white hover:text-gold font-bold text-base py-2.5 border-b border-white/5" onClick={closeMobile}>
                REVIEWS
              </a>
              <a href={faqHref} className="text-white hover:text-gold font-bold text-base py-2.5 border-b border-white/5" onClick={closeMobile}>
                FAQ
              </a>
              <a href="tel:1234567891" className="flex items-center space-x-2 text-gold font-bold text-base py-2.5" onClick={closeMobile}>
                <Phone size={18} />
                <span>(123) 456-7891</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-0">{children}</main>

      <footer className="bg-navy-800 pt-12 pb-6 border-t-4 border-gold">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-8">
            <div className="md:col-span-2 space-y-6">
              <Link to="/" className="inline-block">
                <img src="/logo.svg" alt="MPH Property Services" className="h-14 md:h-16 w-auto" />
              </Link>
              <p className="text-gray-400 max-w-xs">
                Your trusted partner for residential and commercial electrical solutions. Quality workmanship guaranteed.
              </p>
              <div className="space-y-2">
                <a href="tel:1234567891" className="block text-white hover:text-gold transition-colors font-bold">
                  (123) 456-7891
                </a>
                <p className="text-gray-400">info@mphpropertyservices.com</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6">COMPANY</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-gold transition-colors text-sm">About Us</Link></li>
                <li><Link to="/process" className="text-gray-400 hover:text-gold transition-colors text-sm">Our Process</Link></li>
                <li><a href="/#reviews" className="text-gray-400 hover:text-gold transition-colors text-sm">Reviews</a></li>
                <li><a href="/#contact" className="text-gray-400 hover:text-gold transition-colors text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6">SERVICES</h4>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/services/${s.slug}`} className="text-gray-400 hover:text-gold transition-colors text-sm">
                      {s.title.replace(/\s+/g, ' ')}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-6">HOURS</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 5pm</span></li>
                <li className="flex justify-between"><span>Sat - Sun</span> <span>Closed</span></li>
                <li className="pt-4 text-gold font-bold">24/7 Emergency Service</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; {new Date().getFullYear()} MPH Property Services. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
