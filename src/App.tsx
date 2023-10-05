import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SocialMediaBar from './components/SocialMediaBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExperiencePage from './components/ExperiencePage';
import ContactPage from './components/ContactPage';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className='App-navbar'>
          <NavBar />
        </div>
        <div className="App-sidebar">
            <SocialMediaBar />
        </div>
        <div className="static-background"></div>
        <div className='App-content'>
          <Routes>
              <Route path="/portfolio" Component={HomePage} />
              <Route path="/" Component={HomePage} />
              <Route path='/portfolio/About' Component={AboutPage} />
              <Route path='/portfolio/Projects' Component={ProjectsPage} />
              <Route path='/portfolio/Experience' Component={ExperiencePage} />
              <Route path='/portfolio/Contact' Component={ContactPage} />
          </Routes>
        </div>
      </div>
    </HashRouter>

  );
}

export default App;
