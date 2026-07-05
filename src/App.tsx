import { useEffect, useState } from 'react';
import NavBar, { NavLink } from './components/NavBar';
import Hero from './components/HomePage';
import About from './components/BackgroundPage';
import Experience from './components/ExperiencePage';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Recommendations from './components/RecommendationPage';
import Contact from './components/ContactPage';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';
import { Divider } from './components/shared/Primitives';
import { getProfile } from './services/profile';
import { profileModel } from '@shared/models';

const NAV_LINKS: NavLink[] = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Resume', id: 'resume' },
  { label: 'Recommendations', id: 'recommendations' },
  { label: 'Contact', id: 'contact' },
];

function App() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [profile, setProfile] = useState(profileModel.empty);

  useEffect(() => {
    document.title = 'Alex Kaiser - Software Engineer';
  }, []);

  useEffect(() => {
    getProfile().then(setProfile);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-15% 0px -75% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className="app-shell min-h-screen bg-background text-foreground antialiased">
      <NavBar
        links={NAV_LINKS}
        active={active}
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        onNavigate={scrollTo}
        contactEmail={profile.email}
      />

      <Hero onNavigate={scrollTo} />
      <Divider />
      <About />
      <Divider />
      <Experience />
      <Divider />
      <Skills />
      <Divider />
      <Resume />
      <Divider />
      <Recommendations />
      <Divider />
      <Contact />
      <Divider />
      <Footer />

      <AIAssistant />
    </div>
  );
}

export default App;
