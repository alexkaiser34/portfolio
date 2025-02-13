import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BackgroundPage from './components/BackgroundPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import RecommendationPage from './components/RecommendationPage';
import ReactGA from 'react-ga';
import { ThemeProvider } from './context/ThemeContext';

export type NavLinks = "Home" | "Background" | "Experience" | "Contact" | "Recommendations";

ReactGA.initialize("G-TEM3M1JKC9");

function App() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [linkActive, setLinkActive] = useState<NavLinks | undefined>();

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
    <ThemeProvider>
      <HashRouter>
        <div className="App">
          <div className={`nav-wrapper ${visible ? 'nav-visible' : 'nav-hidden'}`}>
            <NavBar linkActive={linkActive} setLinkActive={setLinkActive} />
          </div>
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path="/Home" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path="/background" element={<BackgroundPage />} />
              <Route path='/experience' element={<ExperiencePage />} />
              <Route path='/contact' element={<ContactPage />} />
              <Route path='/recommendations' element={<RecommendationPage />} />
            </Routes>
          </div>
          <div className="extra-pad" style={{ height: '3rem', width: '100vw'}} />
        </div>
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
