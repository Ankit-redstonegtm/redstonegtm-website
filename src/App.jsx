import { useState, useEffect } from 'react';
import { LeadFormProvider } from './context/LeadForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemFraming from './components/ProblemFraming';
import HowItWorks from './components/HowItWorks';
import Capabilities from './components/Capabilities';
import OperatingModel from './components/OperatingModel';
import FounderLed from './components/FounderLed';
import AboutFounder from './components/AboutFounder';
import WallOfLove from './components/WallOfLove';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <LeadFormProvider>
      <div className="bg-paper text-ink overflow-x-hidden">
        <Navbar scrolled={scrolled} />
        <Hero />
        <ProblemFraming />
        <HowItWorks />
        <Capabilities />
        <OperatingModel />
        <FounderLed />
        <AboutFounder />
        <WallOfLove />
        <FinalCTA />
        <Footer />
      </div>
    </LeadFormProvider>
  );
}
