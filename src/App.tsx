import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/theme.css';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BackgroundPage from './components/BackgroundPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import RecommendationPage from './components/RecommendationPage';
import ReactGA from 'react-ga';
import { useTheme } from './context/ThemeContext';

export type NavLinks = "home" | "background" | "experience" | "contact" | "recommendations";

ReactGA.initialize("G-TEM3M1JKC9");

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [linkActive, setLinkActive] = useState<NavLinks | undefined>();
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="App">
        <div className={`nav-wrapper ${visible ? 'nav-visible' : 'nav-hidden'}`}>
          <NavBar linkActive={linkActive} setLinkActive={setLinkActive} />
        </div>
        <div className={`content-wrapper-${theme}`}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
            <Route path="/background" element={<BackgroundPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/recommendations" element={<RecommendationPage />} />
          </Routes>
        </div>
        <div className={`extra-pad-${theme}`} style={{ height: '3rem', width: '100vw'}} />
      </div>
    </BrowserRouter>
  );
}

export default App;
