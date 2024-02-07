import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SocialMediaBar from './components/SocialMediaBar';
import HomePage from './components/HomePage';
import BackgroundPage from './components/BackgroundPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import { useEffect, useState, useRef } from 'react';
import RecommendationPage from './components/RecommendationPage';
import ReactGA from 'react-ga';

export type NavLinks = "Home" | "Background" | "Experience" | "Contact" | "Recommendations";

ReactGA.initialize("G-TEM3M1JKC9");

function App() {

  const [linkActive, setLinkActive] = useState<NavLinks | undefined>();
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [marginTop, setMarginTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);


  function getCurrentDimension(){
      return {
          width: window.innerWidth,
          height: window.innerHeight
      }
  }

  useEffect(() => {
      const updateDimension = () => {
          setScreenSize(getCurrentDimension());
      }
      window.addEventListener('resize', updateDimension);
      return(() => {
          window.removeEventListener('resize', updateDimension);
      })

  }, [screenSize]);


  return (
    <HashRouter>
      <div className="App">
        <div className='App-navbar'>
          <NavBar linkActive={linkActive} setLinkActive={setLinkActive} setMarginTop={setMarginTop} />
        </div>
        <div className='App-content' style={{
          paddingTop: `calc(${marginTop}px + 15px)`,
          // height: `calc(100vh - ${marginTop}px)`
          }}>
          <Routes>
              <Route path="/Home" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path="/" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path='/Background' element={<BackgroundPage />} />
              <Route path='/Experience' element={<ExperiencePage />} />
              <Route path='/Contact' element={<ContactPage />} />
              <Route path='/Recommendations' element={<RecommendationPage />} />
          </Routes>
        </div>
      </div>
    </HashRouter>

  );
}

export default App;
