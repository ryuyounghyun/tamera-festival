import { Link } from 'react-router-dom';
import { Calendar, Users, Trophy, Shield } from 'lucide-react';
import CountdownTimer from '../components/ui/CountdownTimer';
import { getCurrentCompetition } from '../data/competitions';

const Home = () => {
  const currentCompetition = getCurrentCompetition();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ocean-900 via-ocean-800 to-ocean-700 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative container-custom section-padding min-h-[80vh] flex items-center">
          <div className="text-center w-full">
            <div className="mb-8">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
                TAMERA
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light mb-6">
                AIDA DEPTH FESTIVAL
              </h2>
              <p className="text-xl sm:text-2xl text-ocean-100 mb-8">
                2025년 공식 프리다이빙 대회
              </p>
            </div>

            {/* Countdown Timer */}
            {currentCompetition && (
              <div className="mb-12">
                <CountdownTimer 
                  targetDate={currentCompetition.startDate}
                  title="다음 대회까지"
                />
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/register" 
                className="bg-ocean-500 hover:bg-ocean-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                참가 신청하기
              </Link>
              <Link 
                to="/staff-apply" 
                className="bg-white hover:bg-gray-100 text-ocean-800 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                스태프 모집
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="gradient-bg section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              AIDA 공식 인증 대회
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              국제 프리다이빙 협회 AIDA의 공식 규정에 따라 진행되는 
              안전하고 전문적인 프리다이빙 대회입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">연중 대회</h3>
              <p className="text-gray-600">수심 대회(10월)와 인도어 대회(12월)를 매년 개최합니다.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">전문 스태프</h3>
              <p className="text-gray-600">AIDA 인증 저지, 세이프티, 메딕이 안전한 대회를 운영합니다.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">다양한 종목</h3>
              <p className="text-gray-600">수심 4종목(CWT, CWTB, FIM, CNF)과 인도어 4종목(STA, DYN, DYNB, DNF)을 제공합니다.</p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">안전 최우선</h3>
              <p className="text-gray-600">철저한 안전 프로토콜과 의료진 상주로 안전한 대회 환경을 제공합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Info */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                2025년 대회 일정
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-ocean-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">수심 대회</h3>
                  <p className="text-gray-600 mb-2">2025년 10월 15일 - 17일</p>
                  <p className="text-gray-700">
                    CWT, CWTB, FIM, CNF 4개 종목으로 진행되며, 
                    바다에서의 수직 깊이 도전을 통해 최고 기록을 겨룹니다.
                  </p>
                </div>
                
                <div className="border-l-4 border-ocean-500 pl-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">인도어 대회</h3>
                  <p className="text-gray-600 mb-2">2025년 12월 6일 - 7일</p>
                  <p className="text-gray-700">
                    STA, DYN, DYNB, DNF 4개 종목으로 진행되며, 
                    수영장에서의 시간과 거리 도전을 통해 실력을 겨룹니다.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/schedule" 
                  className="btn-primary inline-block"
                >
                  자세한 일정 보기
                </Link>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">참가 정보</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">1종목 참가비</span>
                  <span className="font-bold text-ocean-600">250,000원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">2종목 참가비</span>
                  <span className="font-bold text-ocean-600">290,000원</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-200">
                  <span className="font-medium text-gray-700">참가 자격</span>
                  <span className="text-gray-700">AIDA 인증 선수</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-gray-700">등록 마감</span>
                  <span className="text-gray-700">대회 2주 전</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  * 의료진술서, 면책동의서 제출 필수<br />
                  * Zoom 공지 미팅 참석 필수
                </p>
                <Link 
                  to="/participants" 
                  className="btn-secondary inline-block"
                >
                  참가자 안내 자세히 보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-ocean-600 text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">
            지금 참가 신청하세요
          </h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            AIDA 공식 인증을 받은 안전하고 전문적인 프리다이빙 대회에 참여하여 
            여러분의 한계에 도전해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/register" 
              className="bg-white text-ocean-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              참가 신청하기
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white hover:bg-white hover:text-ocean-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200"
            >
              문의하기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 