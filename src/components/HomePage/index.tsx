import { Button } from 'react-bootstrap';
import './styles.css';
import Headshot from '../../images/Headshot.png';
import { AmazonwebservicesOriginal, AmazonwebservicesOriginalWordmark, AmazonwebservicesPlainWordmark, BashOriginal, BashPlain, COriginal, CplusplusOriginal, CsharpOriginal, DockerOriginal, DotnetcoreOriginal, DotNetOriginal, JavaOriginal, JavascriptOriginal, PythonOriginal, ReactOriginal, TypescriptOriginal } from 'devicons-react';

function HomePage(){

    return (
        <div className="HomePage-container">
            <div className='HomePage-Info'>
                <div className="HomePage-text">
                    <div className='intro-homepage'>
                        <div>
                            <h2 className='hi-intro'>
                                <h2 className="wave">👋</h2>
                                Hi, my name is
                            </h2>
                        </div>
                        <h1 className='name-intro'>Alex Kaiser</h1>
                        <h2 className='title-intro'>Software Engineer</h2>
                        <span className='description-intro'>
                            I am a software engineer with a passion for full-stack engineering,
                            embedded system design, FPGA's, and project management.
                        </span>
                    <Button className="touch-button">Get in Touch</Button>
                    </div>

                </div>
                <div className='descriptions-extended'>
                    <div className='centered-descriptions'>

                    <div className='experience-home'>
                        <h1>2+ years experience designing</h1>
                        <ul>
                            <li>Full-stack web applications</li>
                            <li>Embedded systems</li>
                            <li>FPGA (field programmable gate array) applications</li>
                            <li>Printed circuit boards (PCB)</li>
                        </ul>
                    </div>
                    <div className='programming-languages'>
                        <h1>Programming in</h1>
                        <div className='program-icons'>
                            <div title='Python' className='programming-icon'><PythonOriginal /></div>
                            <div title='React' className='programming-icon'><ReactOriginal /></div>
                            <div title='TypeScript' className='programming-icon'><TypescriptOriginal /></div>
                            <div title='JavaScript' className='programming-icon'><JavascriptOriginal /></div>
                            <div title='C' className='programming-icon'><COriginal /></div>
                            <div title='C++' className='programming-icon'><CplusplusOriginal /></div>
                            <div title='C#' className='programming-icon'><CsharpOriginal /></div>
                            <div title='ASP.NET' className='programming-icon'><DotnetcoreOriginal /></div>
                            <div title='Java' className='programming-icon'><JavaOriginal /></div>
                            <div title='Bash' className='programming-icon'><BashOriginal /></div>
                            <div title='Amazon Web Services' className='programming-icon'><AmazonwebservicesOriginal /></div>
                            <div title='Docker' className='programming-icon'><DockerOriginal /></div>
                        </div>
                    </div>

                    </div>
                    {/* <div>
                        <h1 className='align-items-center'>Engineering Education</h1>
                        <ul>
                            <li>Grand Valley State University</li>
                            <li>Bachelors of Science in Electrical Engineering</li>
                            <li>Bachelors of Science in Computer Engineering</li>
                            <li>Minor in Business Administration</li>
                            <li>Honors College</li>
                            <li>3.85 GPA</li>
                        </ul>
                    </div> */}
                </div>
            </div>

        </div>
    );
}

export default HomePage;