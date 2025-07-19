import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Participants from './pages/Participants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="participants" element={<Participants />} />
          {/* 추가 라우트들을 여기에 구현할 예정 */}
          <Route path="*" element={
            <div className="section-padding text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">페이지를 찾을 수 없습니다</h1>
              <p className="text-gray-600 mb-8">요청하신 페이지가 존재하지 않습니다.</p>
              <a href="/" className="btn-primary">홈으로 돌아가기</a>
            </div>
          } />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
