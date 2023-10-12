
import './style.css';
import Headshot from '../../images/Headshot.png';
import { Col, Image, Row, Tab, Table } from 'react-bootstrap';
import ProjectManagement from '../../images/project-management.png';
import DesignThinking from '../../images/design-thinking.png';
import DiverseBackground from '../../images/diverse-background.png';
import SoftwareDesign from '../../images/software-design.png';
import GVLogo from '../../images/gv-logo.png';
import CustomerService from '../../images/CustomerService.png';

import FadeAnimate from '../FadeAnimate';
import { useEffect } from 'react';


function AboutPage(){


    useEffect(() => {
        document.title = "Alex Kaiser - About";
     }, []);

    return (
        <div className='AboutPage-container'>
            {FadeAnimate({className: 'about-headline', children:
                <div>
                    <h4 className='headline-header'>
                        Five years ago, I had never written a line of code. Today,
                        I can say I have designed complex software in over
                        10 different languages.
                    </h4>
                    <hr className='horizontal-divide-header'/>
                </div>
            })}
            <div className='AboutMe'>
                {FadeAnimate({className: 'profile-image', children:
                    <Image src={Headshot} />
                })}
                <div className='about-profile'>
                    {FadeAnimate({className: 'about-header', children:
                    <div>
                        <h1>A bit about me</h1>
                        <hr className='horizontal-divide'/>
                    </div>
                    })}
                    {FadeAnimate({className: 'about-intro', children:
                        <>
                            <p>
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
                                <li style={{fontWeight: 'bolder', color: 'lightgreen'}}>
                                Currently seeking a full-time engineering position
                                in which I can utilize and expand my knowledge, skills,
                                and experience in the fields of computer science and engineering.
                                </li>
                            </ul>
                        </>
                    })}
                </div>
            </div>
            <div className='AboutSkills'>
                {FadeAnimate({className: 'skills-header', children:
                <>
                    <h1>Professional Skillset</h1>
                    <hr className='horizontal-skills'/>
                </>
                })}
                <div className='skills-table'>

                    {FadeAnimate({className: 'skills-row', children:
                        <>
                            <div className='skills-row-image'>
                                <Image src={ProjectManagement}></Image>
                            </div>
                            <div style={{width: '80%'}}>
                                <h2>Project Management</h2>
                                <h3>Utilizing strong communication and leadership skills to
                                    manage teams effectively and efficiently to meet a wide variety
                                    of customer needs.
                                </h3>
                            </div>
                        </>
                    })}

                    {FadeAnimate({className: 'divide-wrapper', children: <hr className='skills-divide' />})}

                    {FadeAnimate({className: 'skills-row', children:
                        <>
                            <div className='skills-row-image'>
                                <img src={DesignThinking}></img>
                            </div>
                            <div style={{width: '80%'}}>
                                <h2>Design Thinking</h2>
                                <h3>Combining an engineering and business
                                    mindset to develop unique solutions to
                                    a large range of complex problems.
                                </h3>
                            </div>
                        </>
                    })}

                    {FadeAnimate({className: 'divide-wrapper', children: <hr className='skills-divide' />})}

                    {FadeAnimate({className: 'skills-row', children:
                        <>
                            <div className='skills-row-image'>
                                <img src={DiverseBackground}></img>
                            </div>
                            <div style={{width: '80%'}}>
                                <h2>Diversified Knowledge Base</h2>
                                <h3>Knowing how to intertwine electrical engineering,
                                    computer engineering, and business knowledge to strategize
                                    a diverse set of solutions.
                                </h3>
                            </div>
                        </>
                    })}

                    {FadeAnimate({className: 'divide-wrapper', children: <hr className='skills-divide' />})}

                    {FadeAnimate({className: 'skills-row', children:
                        <>
                            <div className='skills-row'>
                                <div className='skills-row-image'>
                                    <img src={SoftwareDesign}></img>
                                </div>
                                <div style={{width: '80%'}}>
                                    <h2>Software Design</h2>
                                    <h3>Taking advantage of extensive experience
                                        and knowledge of various programming languages
                                        and software tools to implement methodical
                                        software solutions
                                    </h3>
                                </div>
                            </div>
                        </>
                    })}

                    {FadeAnimate({className: 'divide-wrapper', children: <hr className='skills-divide' />})}

                    {FadeAnimate({className: 'skills-row', children:
                        <>
                            <div className='skills-row'>
                                <div className='skills-row-image'>
                                    <img src={CustomerService}></img>
                                </div>
                                <div style={{width: '80%'}}>
                                    <h2>Client Interaction</h2>
                                    <h3>Making use of considerable experience
                                        interacting and communicating with clients to
                                        establish and build professional relationships
                                    </h3>
                                </div>
                            </div>
                        </>
                    })}

                </div>
            </div>

            <div className='AboutEducation'>
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
                            </ul>
                        </div>
                    </>
                })}

                {FadeAnimate({className: 'education-img', children:
                    <Image src={GVLogo} />
                })}
            </div>
        </div>
    )


}


export default AboutPage;