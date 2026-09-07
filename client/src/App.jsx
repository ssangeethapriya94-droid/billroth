import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Departments from './pages/Departments';
import DepartmentDetail from './pages/DepartmentDetail';
import Doctors from './pages/Doctors';
import HealthPackages from './pages/HealthPackages';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Appointment from './pages/Appointment';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
};

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <TopBar />
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* Placeholder routes */}
          <Route path="/academics" element={<ComingSoon title="Academics" />} />
          <Route path="/events" element={<ComingSoon title="News & Events" />} />
          <Route path="/second-opinion" element={<Appointment />} />
          <Route path="/privacy-policy" element={<ComingSoon title="Privacy Policy" />} />
          <Route path="/terms" element={<ComingSoon title="Terms of Use" />} />
          <Route path="/blog/:slug" element={<ComingSoon title="Blog Post" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

// Simple placeholder pages
const ComingSoon = ({ title }) => (
  <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
    <div>
      <div className="text-6xl mb-4">🚧</div>
      <h1 className="text-2xl font-extrabold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-500">This page is coming soon. Stay tuned!</p>
    </div>
  </div>
);

const NotFound = () => (
  <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
    <div>
      <div className="text-8xl font-extrabold text-gray-100 mb-4">404</div>
      <h1 className="text-2xl font-extrabold text-gray-800 mb-2">Page Not Found</h1>
      <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
      <a href="/" className="inline-block bg-[#2f5aae] text-white px-6 py-3 rounded-full font-bold text-sm">
        Go Home
      </a>
    </div>
  </div>
);

export default App;
