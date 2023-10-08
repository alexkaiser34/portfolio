
import { Linkedin, Github, Envelope } from 'react-bootstrap-icons';
import './style.css'
function SocialMediaBar(){
  return (
    <div className="sidebar">
        <a href="mailto:kaiseale@mail.gvsu.edu"><Envelope /></a>
        <a href="https://www.linkedin.com/in/alex-kaiser34/"><Linkedin /></a>
        <a href="https://github.com/alexkaiser34"><Github /></a>
        <div className="d-flex" style={{height: "60px"}}>
            <div className="vr" style={{color: 'lightblue', width: '3px'}}></div>
        </div>
    </div>
  );
};

export default SocialMediaBar;