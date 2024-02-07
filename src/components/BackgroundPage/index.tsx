
import './style.css';
import Headshot from '../../images/Headshot.png';
import { Col, Image, Row, Tab, Table, Container } from 'react-bootstrap';
import ProjectManagement from '../../images/project-management.png';
import DesignThinking from '../../images/design-thinking.png';
import DiverseBackground from  '../../images/diverse-background.png';
import SoftwareDesign from '../../images/software-design.png';
import GVLogo from '../../images/gv-logo.png';
import CustomerService from '../../images/CustomerService.png';
import FadeAnimate from '../FadeAnimate';
import { useEffect } from 'react';


function BackgroundPage(){


    useEffect(() => {
        document.title = "Alex Kaiser - Background";
     }, []);

    return (
        <div className='AboutPage-container'>
            <Container fluid>
                <div className='row d-flex align-items-center g-0' style={{
                    borderBottom: '8px solid rgba(144,238,144,0.7)',
                    }}>
                    <div className='col-12'>
                    {FadeAnimate({className: 'about-headline', children:
                        <div>
                            <h3 className='headline-header pb-3'>
                                Currently seeking a full-time engineering position
                                in which I can utilize and expand my knowledge, skills,
                                and experience in the fields of computer science and engineering.
                            </h3>
                        </div>
                    })}
                    </div>
                </div>
                <div className='row d-flex align-items-center  pt-5'>
                    <div className='col-12 col-md-6 d-flex justify-content-center'>
                        {FadeAnimate({className: 'profile-image pb-5', children:
                            <Image id={'headshot'} fluid src={Headshot} />
                        })}
                    </div>
                    <div className='col-12 col-md-6 d-flex flex-column align-items-start'>
                        {FadeAnimate({className: 'about-header d-flex flex-column justify-content-evenly', children:
                        <div>
                            <h1 style={{color: 'lightgreen'}}>A bit about me</h1>
                            <hr className='horizontal-divide'/>
                        </div>
                        })}
                        {FadeAnimate({className: 'about-intro', children:
                            <>
                                <p >
                                    Hi, my name is Alex Kaiser, nice to meet you!
                                </p>
                                <h2>I am...</h2>
                                <ul>
                                    <li>
                                    A software engineer currently located in
                                    Grand Rapids, Michigan. However, I am open to relocate.
                                    </li>
                                    <li>
                                    A self-motivated problem solver who can learn
                                    and adapt quickly to solve complex problems.
                                    </li>
                                    <li>
                                    Always eager to learn, grow, and challenge myself
                                    to expand my skill set!
                                    </li>
                                    <li>
                                    Passionate about designing full-stack web applications, embedded systems,
                                    FPGA applications, and printed circuit boards!
                                    </li>
                                    <li>
                                    Designing complex software in over
                                    10 different languages.
                                    </li>
                                </ul>
                            </>
                        })}
                    </div>
                </div>
                <div className='row d-flex align-items-center pt-5'>
                    <div className='row'>
                        {FadeAnimate({className: 'skills-header', children:
                        <>
                            <h1>Professional Skillset</h1>
                            <hr className='horizontal-skills'/>
                        </>
                        })}
                    </div>
                    <div className='row d-flex align-items-center'>
                        {FadeAnimate({className: 'skills-row', children:
                            <>
                                <div className='col-4 skills-row-image'>
                                    <Image fluid src={ProjectManagement}></Image>
                                </div>
                                <div className='col-8'>
                                    <h2>Project Management</h2>
                                    <p>Utilizing strong communication and leadership skills to
                                        manage teams effectively and efficiently to meet a wide variety
                                        of customer needs.
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='row d-flex align-items-center'>
                        {FadeAnimate({className: 'skills-row', children:
                            <>
                                <div className='col-4 skills-row-image'>
                                    <Image fluid src={DesignThinking}></Image>
                                </div>
                                <div className='col-8'>
                                    <h2>Design Thinking</h2>
                                    <p>Combining an engineering and business
                                        mindset to develop unique solutions to
                                        a large range of complex problems.
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='row d-flex align-items-center'>
                        {FadeAnimate({className: 'skills-row', children:
                            <>
                                <div className='col-4 skills-row-image'>
                                    <Image src={DiverseBackground}></Image>
                                </div>
                                <div className='col-8'>
                                    <h2>Diversified Knowledge Base</h2>
                                    <p>Knowing how to intertwine electrical engineering,
                                        computer engineering, and business knowledge to strategize
                                        a diverse set of solutions.
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='row d-flex align-items-center'>
                        {FadeAnimate({className: 'skills-row', children:
                            <>
                                <div className='col-4 skills-row-image'>
                                    <img src={SoftwareDesign}></img>
                                </div>
                                <div className='col-8'>
                                    <h2>Software Design</h2>
                                    <p>Taking advantage of extensive experience
                                        and knowledge of various programming languages
                                        and software tools to implement methodical
                                        software solutions
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='row d-flex align-items-center'>
                        {FadeAnimate({className: 'skills-row-end', children:
                            <>
                                <div className='col-4 skills-row-image'>
                                    <img src={CustomerService}></img>
                                </div>
                                <div className='col-8'>
                                    <h2>Client Interaction</h2>
                                    <p>Making use of considerable experience
                                        interacting and communicating with clients to
                                        establish and build professional relationships
                                    </p>
                                </div>
                            </>
                        })}
                    </div>
                </div>
                <div className='row d-flex align-items-center pt-5 pb-5 pe-2'>
                    <div className='col-12 col-md-6'>
                        {FadeAnimate({className: 'education-info', children:
                            <>
                                <div className='education-header'>
                                    <h1>Education</h1>
                                    <hr className='education-header-divide'/>
                                </div>
                                <div className='education-profile'>
                                    <p>
                                        I attended <a href="https://www.gvsu.edu/">Grand Valley State University</a> located
                                        in Grand Rapids, Michigan.
                                    </p>
                                <h2>At GVSU, I...</h2>
                                    <ul>
                                        <li>
                                        Received a Bachelors of Science degree in Computer Engineering
                                        </li>
                                        <li>
                                        Received a Bachelors of Science degree in Electrical Engineering
                                        </li>
                                        <li>
                                        Received a minor in Business Administration
                                        </li>
                                        <li>
                                        Was involved in the <a href="https://www.gvsu.edu/honor/">Frederik Meijer Honors College</a>
                                        </li>
                                        <li>
                                        Was a member of the Tau Beta Pi Engineering Honors Society
                                        </li>
                                        <li>
                                        Maintained a 3.85 GPA
                                        </li>
                                        <li>
                                        Gained 2 years of professional experience in software engineering at <a href="https://www.dornerworks.com/">DornerWorks Ltd</a>
                                        </li>
                                    </ul>
                                </div>
                            </>
                        })}
                    </div>
                    <div className='col-12 col-md-6'>
                        {FadeAnimate({className: 'education-img', children:
                            <Image fluid src={GVLogo} />
                        })}
                    </div>


                
                </div>

            </Container>

        </div>
    )


}


export default BackgroundPage;