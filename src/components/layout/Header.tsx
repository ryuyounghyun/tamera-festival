import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'HOME', href: '/' },
    { name: '대회 소개', href: '/about' },
    { name: '대회 일정', href: '/schedule' },
    { name: '참가자 안내', href: '/participants' },
    { name: '스태프 안내', href: '/staff' },
    { name: '공지사항', href: '/news' },
    { name: '갤러리', href: '/gallery' },
    { name: '협찬사', href: '/sponsors' },
    { name: '대회 상품', href: '/prizes' },
    { name: '문의', href: '/contact' }
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-ocean-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-gray-900">TAMERA</h1>
              <p className="text-sm text-ocean-600">AIDA DEPTH FESTIVAL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-ocean-600 border-b-2 border-ocean-600'
                    : 'text-gray-700 hover:text-ocean-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/register" className="btn-secondary">
              참가 신청
            </Link>
            <Link to="/staff-apply" className="btn-primary">
              스태프 모집
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-ocean-600 focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-ocean-600 bg-ocean-50'
                      : 'text-gray-700 hover:text-ocean-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link
                  to="/register"
                  className="block w-full btn-secondary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  참가 신청
                </Link>
                <Link
                  to="/staff-apply"
                  className="block w-full btn-primary text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  스태프 모집
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 