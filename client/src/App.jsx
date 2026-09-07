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
import About from './pages/About';
import MDChairman from './pages/MDChairman';
import VisionMission from './pages/VisionMission';
import HistoryPage from './pages/HistoryPage';
import MilestonesPage from './pages/MilestonesPage';
import DoctorDetail from './pages/DoctorDetail';
import Testimonials from './pages/Testimonials';
import Corporates from './pages/Corporates';
import InternationalPatients from './pages/InternationalPatients';
import PatientGuide from './pages/PatientGuide';
import TPAs from './pages/TPAs';
import Newsletter from './pages/Newsletter';
import Events from './pages/Events';
import TermsAndConditions from './pages/TermsAndConditions';
import Careers from './pages/Careers';
import CathLab from './pages/CathLab';
import Facilities from './pages/Facilities';
import FacilityDetail from './pages/FacilityDetail';
import Academics from './pages/Academics';
import BlogDetail from './pages/BlogDetail';

// Scroll to top or anchor on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);
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
          {/* ABOUT US Routes matching real website */}
          <Route path="/about" element={<About />} />
          <Route path="/founder" element={<About />} />
          <Route path="/foun" element={<About />} />
          <Route path="/md-chairman" element={<MDChairman />} />
          <Route path="/chair" element={<MDChairman />} />
          <Route path="/vision-mission" element={<VisionMission />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/milestone" element={<MilestonesPage />} />
          <Route path="/milestones" element={<MilestonesPage />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/departments/:slug" element={<DepartmentDetail />} />
          <Route path="/gastroenterology-page" element={<DepartmentDetail />} />
          <Route path="/gastroenterology" element={<DepartmentDetail />} />
          <Route path="/orthopedics" element={<DepartmentDetail />} />
          <Route path="/interventional-cardiology" element={<DepartmentDetail />} />
          <Route path="/radiation-oncology" element={<DepartmentDetail />} />
          <Route path="/medical-oncology" element={<DepartmentDetail />} />
          <Route path="/surgical-gastroenterology" element={<DepartmentDetail />} />
          <Route path="/robotics-surgery" element={<DepartmentDetail />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<DoctorDetail />} />
          <Route path="/doctor/:slug" element={<DoctorDetail />} />
          {/* PATIENTS & VISITORS Routes matching real website */}
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/corporates" element={<Corporates />} />
          <Route path="/international-patients" element={<InternationalPatients />} />
          <Route path="/patient-guide" element={<PatientGuide />} />
          <Route path="/patients-visitors" element={<PatientGuide />} />
          <Route path="/tpas" element={<TPAs />} />
          <Route path="/tpa" element={<TPAs />} />
          <Route path="/insurance-tpa" element={<TPAs />} />

          <Route path="/health-packages" element={<HealthPackages />} />
          <Route path="/health-checkup" element={<HealthPackages />} />
          <Route path="/health-checkups" element={<HealthPackages />} />
          
          {/* BLOG & HEALTH KNOWLEDGE HUB Routes */}
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/articles" element={<Blog />} />
          <Route path="/health-knowledge" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/article/:slug" element={<BlogDetail />} />
          <Route path="/articles/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
          {/* FACILITIES & DIAGNOSTIC SERVICES Routes matching real website */}
          <Route path="/cath-lab" element={<CathLab />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/facilities/:slug" element={<FacilityDetail />} />
          <Route path="/radiology-imaging" element={<FacilityDetail />} />
          <Route path="/tmt" element={<FacilityDetail />} />
          <Route path="/eeg" element={<FacilityDetail />} />
          <Route path="/pft" element={<FacilityDetail />} />
          <Route path="/mammography" element={<FacilityDetail />} />
          <Route path="/ct-scan" element={<FacilityDetail />} />
          <Route path="/mri" element={<FacilityDetail />} />
          <Route path="/2d-echo" element={<FacilityDetail />} />
          <Route path="/x-ray" element={<FacilityDetail />} />
          <Route path="/ultrasound" element={<FacilityDetail />} />
          <Route path="/ct-angiogram" element={<FacilityDetail />} />
          <Route path="/blood-transfusion-services" element={<FacilityDetail />} />
          <Route path="/ambulance" element={<FacilityDetail />} />
          <Route path="/emergency-services-trauma-care" element={<FacilityDetail />} />
          <Route path="/physiotherapy" element={<FacilityDetail />} />
          <Route path="/lab-facilities" element={<FacilityDetail />} />
          <Route path="/dialysis" element={<FacilityDetail />} />
          <Route path="/endoscopy" element={<FacilityDetail />} />
          <Route path="/billroth-endoscopy" element={<FacilityDetail />} />
          <Route path="/intensive-care-units" element={<FacilityDetail />} />
          <Route path="/colonoscopy" element={<FacilityDetail />} />
          <Route path="/ecg" element={<FacilityDetail />} />

          {/* NEWS & EVENTS Routes matching real website */}
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/news" element={<Newsletter />} />
          <Route path="/events" element={<Events />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<TermsAndConditions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/our-academics" element={<Academics />} />
          <Route path="/masters-in-emergency-medicine" element={<Academics />} />
          <Route path="/mem" element={<Academics />} />

          {/* Additional auxiliary routes */}
          <Route path="/second-opinion" element={<Appointment />} />
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
      <a href="/" className="inline-block bg-[#0095da] hover:bg-[#0077b6] text-white px-6 py-3 rounded-full font-bold text-sm transition-colors">
        Go Home
      </a>
    </div>
  </div>
);

export default App;
