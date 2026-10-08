import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TeenPage from './pages/TeenPage';
import CompaniesPage from './pages/CompaniesPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-x-hidden">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TeenPage />} />
            <Route path="/teen" element={<TeenPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
