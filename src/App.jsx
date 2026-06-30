import { useState, useEffect } from 'react';
import { LeadFormProvider } from './context/LeadForm';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Engine from './components/Engine';
import OutreachKit from './components/OutreachKit';
import WallOfLove from './components/WallOfLove';
import Guarantee from './components/Guarantee';
import CTA from './components/CTA';
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
      <div className="bg-slate-950 text-white overflow-x-hidden">
        <Navbar scrolled={scrolled} />
        <Hero />
        <HowItWorks />
        <Engine />
        <OutreachKit />
        <WallOfLove />
        <Guarantee />
        <CTA />
        <Footer />
      </div>
    </LeadFormProvider>
  );
}
