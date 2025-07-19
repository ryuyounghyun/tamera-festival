import { Shield, Award, Users, Globe } from 'lucide-react';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-600 to-ocean-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">대회 소개</h1>
          <p className="text-xl text-ocean-100 max-w-3xl mx-auto">
            TAMERA AIDA DEPTH FESTIVAL은 국제 프리다이빙 협회 AIDA의 공식 규정에 따라 
            진행되는 한국 최고 수준의 프리다이빙 대회입니다.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">대회 목적 및 정체성</h2>
              <div className="space-y-4 text-gray-700">
                <p className="text-lg">
                  TAMERA AIDA DEPTH FESTIVAL은 한국 프리다이빙 발전과 안전한 대회 문화 조성을 목표로 합니다.
                </p>
                <p>
                  AIDA(Association Internationale pour le Développement de l'Apnée) 공식 인증을 받은 대회로서, 
                  국제적인 기준에 맞는 공정하고 안전한 경기 운영을 통해 선수들이 안심하고 실력을 발휘할 수 있는 환경을 제공합니다.
                </p>
                <p>
                  단순한 경쟁을 넘어서 프리다이빙 커뮤니티의 화합과 성장을 도모하며, 
                  국내외 선수들 간의 교류를 통해 한국 프리다이빙의 위상을 높이는 것이 우리의 사명입니다.
                </p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">핵심 가치</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">안전 최우선</h4>
                    <p className="text-gray-600">철저한 안전 프로토콜과 전문 의료진 상주</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Award className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">공정한 경기</h4>
                    <p className="text-gray-600">AIDA 국제 규정 준수 및 공인 저지 배치</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">커뮤니티</h4>
                    <p className="text-gray-600">선수 간 교류와 프리다이빙 문화 발전</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Globe className="w-6 h-6 text-ocean-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">국제적 수준</h4>
                    <p className="text-gray-600">세계 표준에 맞는 대회 운영</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AIDA Certification */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">AIDA 공인 대회</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8">
              본 대회는 국제 프리다이빙 협회 AIDA의 공식 인증을 받은 대회입니다. 
              모든 경기는 AIDA 규정에 따라 진행되며, 대회 기록은 공식 인정받을 수 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">공식 규정 준수</h3>
                <p className="text-gray-600">
                  AIDA 국제 규정에 따른 정확한 경기 진행으로 기록의 공신력을 보장합니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">인증 저지진</h3>
                <p className="text-gray-600">
                  AIDA 인증을 받은 전문 저지진이 공정한 심판을 진행합니다.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">국제 기록 인정</h3>
                <p className="text-gray-600">
                  대회에서 달성한 기록은 AIDA를 통해 국제적으로 인정받을 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">대회 운영진</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">오거나이저</h3>
              <p className="text-gray-600">
                대회 전반적인 기획과 운영을 담당하는 핵심 조직위원회입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-12 h-12 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">저지</h3>
              <p className="text-gray-600">
                AIDA 인증을 받은 전문 저지진이 공정한 경기 진행과 기록 인정을 담당합니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-12 h-12 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">세이프티</h3>
              <p className="text-gray-600">
                선수들의 안전을 책임지는 전문 안전 다이버와 프리다이빙 전문가들입니다.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-ocean-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-12 h-12 text-ocean-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">서포트 스태프</h3>
              <p className="text-gray-600">
                포토그래퍼, 메딕, 일반 스태프 등 대회 진행을 위한 전문 지원팀입니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Competition Standards */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">대회 기준</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">안전 기준</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>의료진 상주 및 응급 처치 시설 완비</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>전문 세이프티 다이버 배치</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>응급 상황 대응 프로토콜 준비</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>사전 의료 검진 및 면책 동의서 확인</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">기술 기준</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>AIDA 공식 규정 100% 준수</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>정확한 측정 장비 사용</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>비디오 판독 시스템 운영</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                  <span>투명한 기록 인정 절차</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ocean-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">함께 만들어가는 대회</h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            TAMERA AIDA DEPTH FESTIVAL은 선수, 스태프, 관중 모두가 함께 만들어가는 대회입니다. 
            여러분의 참여로 더욱 발전하는 대회가 될 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/register" className="bg-white text-ocean-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              참가 신청하기
            </a>
            <a href="/staff-apply" className="border-2 border-white text-white hover:bg-white hover:text-ocean-600 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              스태프 지원하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 