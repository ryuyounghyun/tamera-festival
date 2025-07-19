import { Link } from 'react-router-dom';
import { FileText, DollarSign, Calendar, AlertTriangle } from 'lucide-react';
import { disciplines, getDepthDisciplines, getIndoorDisciplines } from '../data/disciplines';
import { REGISTRATION_FEES } from '../data/competitions';
import { formatCurrency } from '../lib/utils';

const Participants = () => {
  const depthDisciplines = getDepthDisciplines();
  const indoorDisciplines = getIndoorDisciplines();

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ocean-600 to-ocean-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">참가자 안내</h1>
          <p className="text-xl text-ocean-100 max-w-3xl mx-auto">
            TAMERA AIDA DEPTH FESTIVAL 참가를 위한 모든 정보를 확인하세요.
          </p>
        </div>
      </section>

      {/* Competition Disciplines */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">대회 종목</h2>
          
          {/* Depth Disciplines */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">수심 대회 종목</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {depthDisciplines.map((discipline) => (
                <div key={discipline.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{discipline.name}</h4>
                    <span className="bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {discipline.code}
                    </span>
                  </div>
                  <p className="text-gray-700">{discipline.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Indoor Disciplines */}
          <div>
            <h3 className="text-3xl font-semibold text-gray-900 mb-8">인도어 대회 종목</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {indoorDisciplines.map((discipline) => (
                <div key={discipline.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900">{discipline.name}</h4>
                    <span className="bg-ocean-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {discipline.code}
                    </span>
                  </div>
                  <p className="text-gray-700">{discipline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Registration Information */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">참가 정보</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Fees */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <DollarSign className="w-8 h-8 text-ocean-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">출전 비용</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">1종목 참가</span>
                  <span className="text-2xl font-bold text-ocean-600">
                    {formatCurrency(REGISTRATION_FEES.single)}
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">2종목 참가</span>
                  <span className="text-2xl font-bold text-ocean-600">
                    {formatCurrency(REGISTRATION_FEES.double)}
                  </span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <p className="text-sm text-gray-600">
                    * 3종목 이상 참가 시 별도 문의<br />
                    * 등록 후 환불 불가<br />
                    * 계좌이체 또는 카드결제 가능
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <FileText className="w-8 h-8 text-ocean-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">제출 서류</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">의료진술서</h4>
                    <p className="text-gray-600 text-sm">최근 3개월 이내 발급된 건강진단서</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">면책동의서</h4>
                    <p className="text-gray-600 text-sm">대회 참가 관련 면책 동의서 서명</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-gray-900">AIDA 인증서</h4>
                    <p className="text-gray-600 text-sm">유효한 AIDA 인증서 사본</p>
                  </div>
                </div>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
                <p className="text-sm text-yellow-800">
                  <AlertTriangle className="w-4 h-4 inline mr-1" />
                  모든 서류는 대회 등록 시 필수 제출
                </p>
              </div>
            </div>

            {/* Qualification Requirements */}
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <Calendar className="w-8 h-8 text-ocean-600 mr-3" />
                <h3 className="text-2xl font-semibold text-gray-900">출전 자격</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">기본 자격</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                      <span>AIDA 인증 선수 (최소 Level 1 이상)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                      <span>해당 종목의 최소 등급 보유자</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                      <span>만 18세 이상 (미성년자는 보호자 동의 필요)</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">추가 요구사항</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                      <span>사전 Zoom 미팅 참석 의무</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                      <span>안전 교육 이수 확인</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">참가 신청 절차</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">온라인 신청</h3>
              <p className="text-gray-600">웹사이트를 통해 참가 신청서 작성 및 제출</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">서류 제출</h3>
              <p className="text-gray-600">필수 서류 업로드 및 AIDA 인증서 확인</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">참가비 납부</h3>
              <p className="text-gray-600">계좌이체 또는 카드를 통한 참가비 결제</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-ocean-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">참가 확정</h3>
              <p className="text-gray-600">신청 완료 확인 및 사전 미팅 안내</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="section-padding gradient-bg">
        <div className="container-custom">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">중요 사항</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Zoom 공지 미팅</h3>
              <div className="space-y-4 text-gray-700">
                <p>대회 참가자는 사전 Zoom 미팅에 필수 참석해야 합니다.</p>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                    <span>총 2-3회 미팅 예정</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                    <span>대회 규칙 및 안전 사항 안내</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                    <span>현장 정보 및 스케줄 공유</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-ocean-600 rounded-full mt-2"></span>
                    <span>Q&A 세션 진행</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">안전 및 유의사항</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">
                    <AlertTriangle className="w-4 h-4 inline mr-1" />
                    필수 준수 사항
                  </h4>
                  <ul className="space-y-1 text-red-700 text-sm">
                    <li>• 의료진의 모든 지시사항 준수</li>
                    <li>• 안전 프로토콜 엄격 준수</li>
                    <li>• 개인 장비 안전 점검 필수</li>
                    <li>• 컨디션 난조 시 즉시 신고</li>
                  </ul>
                </div>
                <p>
                  참가자의 안전이 최우선입니다. 
                  안전 규정을 위반할 경우 대회 참가가 제한될 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-ocean-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold mb-6">지금 참가 신청하세요</h2>
          <p className="text-xl text-ocean-100 mb-8 max-w-2xl mx-auto">
            모든 준비가 되셨다면 지금 바로 TAMERA AIDA DEPTH FESTIVAL에 참가 신청하세요!
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

export default Participants; 