import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/NavBar';
import SocialMediaBar from './components/SocialMediaBar';
import HomePage from './components/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className='App-navbar'>
          <NavBar />
        </div>
        <div className="App-sidebar">
            <SocialMediaBar />
        </div>
        <div className='App-content'>
          <Routes>
              <Route path='/About' Component={HomePage} />
              <Route path='/portfolio' Component={HomePage} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
