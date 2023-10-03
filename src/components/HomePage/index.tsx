import { Button } from 'react-bootstrap';
import './styles.css';
import Headshot from '../../images/Headshot.png';

function HomePage(){

    return (
        <div className="HomePage-container">
            <div className="HomePage-text">
                <div className='intro'>

                    <span className='hi-intro'>
                    <span className="wave">👋</span>

                    Hi, my name is</span>
                    <span className='name-intro'>Alex Kaiser</span>
                    <span className='title-intro'>Software Engineer</span>
                    <span className='description-intro'>
                        I am a software engineer with a passion for full-stack engineering,
                        embedded system design, FPGA's, and project management.
                    </span>
                <Button className="touch-button">Get in Touch</Button>
                </div>

            </div>

            <img src={Headshot} className='headshot-image' />

            <div className='descriptions-extended'>
                <div>
                    <h1>2+ years experience designing:</h1>
                    <ul>
                        <li>Full-stack web applications</li>
                        <li>Embedded systems</li>
                        <li>FPGA (field programmable gate array) applications</li>
                        <li>Printed circuit boards (PCB)</li>
                    </ul>
                </div>
                <div>
                    <h1 className='align-items-center'>Engineering Education</h1>
                    <ul>
                        <li>Grand Valley State University</li>
                        <li>Bachelors of Science in Electrical Engineering</li>
                        <li>Bachelors of Science in Computer Engineering</li>
                        <li>Minor in Business Administration</li>
                        <li>Honors College</li>
                        <li>3.85 GPA</li>
                    </ul>
                </div>
                </div>
        </div>
    );
}

export default HomePage;