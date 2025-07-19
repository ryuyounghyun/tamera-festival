import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-ocean-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">T</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">TAMERA</h3>
                <p className="text-sm text-gray-400">AIDA DEPTH FESTIVAL</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              AIDA 공식 인증 프리다이빙 대회를 통해 한국 프리다이빙의 발전과 
              안전한 대회 문화를 만들어 갑니다.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-ocean-400 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">빠른 링크</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  대회 소개
                </Link>
              </li>
              <li>
                <Link to="/participants" className="text-gray-400 hover:text-white transition-colors">
                  참가자 안내
                </Link>
              </li>
              <li>
                <Link to="/staff" className="text-gray-400 hover:text-white transition-colors">
                  스태프 안내
                </Link>
              </li>
              <li>
                <Link to="/news" className="text-gray-400 hover:text-white transition-colors">
                  공지사항
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  갤러리
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/register" className="text-gray-400 hover:text-white transition-colors">
                  참가 신청
                </Link>
              </li>
              <li>
                <Link to="/staff-apply" className="text-gray-400 hover:text-white transition-colors">
                  스태프 모집
                </Link>
              </li>
              <li>
                <Link to="/sponsors" className="text-gray-400 hover:text-white transition-colors">
                  협찬 문의
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.aidainternational.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  AIDA 공식 사이트
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">연락처</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-ocean-400" />
                <span className="text-gray-400">tamera.festival@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-ocean-400" />
                <span className="text-gray-400">010-1234-5678</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-ocean-400 mt-0.5" />
                <span className="text-gray-400">
                  대회 장소는 공지사항을<br />
                  통해 안내됩니다
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} TAMERA AIDA DEPTH FESTIVAL. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link to="/safety" className="text-gray-400 hover:text-white transition-colors">
                안전 수칙
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 