import Banner from '../components/Banner';
import Specialties from '../components/Specialties';
import StatsSection from '../components/StatsSection';
import AboutSection from '../components/AboutSection';
import QuickTiles from '../components/QuickTiles';
import SecondOpinionCTA from '../components/SecondOpinionCTA';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

const Home = () => {
  return (
    <main>
      <Banner />
      <Specialties />
      <StatsSection />
      <AboutSection />
      <QuickTiles />
      <SecondOpinionCTA />
      <Testimonials />
      <BlogSection />
    </main>
  );
};

export default Home;
