import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SocialMediaBar from './components/SocialMediaBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';
import { useState } from 'react';

export type NavLinks = "Home" | "About" | "Experience" | "Contact";

function App() {

  const [linkActive, setLinkActive] = useState<NavLinks>("Home");

  return (
    <HashRouter>
      <div className="App">
        <div className='App-navbar'>
          <NavBar linkActive={linkActive} setLinkActive={setLinkActive} />
        </div>
        <div className="App-sidebar">
            <SocialMediaBar />
        </div>
        <div className="static-background"></div>
        <div className='App-content'>
          <Routes>
              <Route path="/Home" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path="/" element={<HomePage linkActive={linkActive} setLinkActive={setLinkActive} />} />
              <Route path='/About' Component={AboutPage} />
              <Route path='/Experience' Component={ExperiencePage} />
              <Route path='/Contact' Component={ContactPage} />
          </Routes>
        </div>
      </div>
    </HashRouter>

  );
}

export default App;
