
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import CertificationsSection from './CertificationsSection';
import './styles/Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
    </div>
  );
};

export default Home;
