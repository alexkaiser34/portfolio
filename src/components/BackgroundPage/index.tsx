import './style.css';
import Headshot from '../../images/Headshot.png';
import { Col, Image, Row, Container } from 'react-bootstrap';
import ProjectManagement from '../../images/project-management.png';
import DesignThinking from '../../images/design-thinking.png';
import DiverseBackground from  '../../images/diverse-background.png';
import SoftwareDesign from '../../images/software-design.png';
import GVLogo from '../../images/gv-logo.png';
import CustomerService from '../../images/CustomerService.png';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDoubleDown } from 'react-bootstrap-icons';

function BackgroundPage(){
    const [showScroll, setShowScroll] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        document.title = "Alex Kaiser - Background";
        
        // Delay the initialization to prevent flash
        const initTimer = setTimeout(() => {
            setIsInitialized(true);
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            setShowScroll(documentHeight > windowHeight + 100);
        }, 500);

        const handleScroll = () => {
            if (!isInitialized) return;
            
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            setShowScroll(scrollPosition < 100 && documentHeight > windowHeight + 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(initTimer);
        };
    }, [isInitialized]);

    const skills = [
        {
            title: "Project Management",
            description: "Utilizing strong communication and leadership skills to manage teams effectively and efficiently to meet a wide variety of customer needs.",
            image: ProjectManagement
        },
        {
            title: "Design Thinking",
            description: "Combining an engineering and business mindset to develop unique solutions to a large range of complex problems.",
            image: DesignThinking
        },
        {
            title: "Diversified Knowledge",
            description: "Knowing how to intertwine electrical engineering, computer engineering, and business knowledge to strategize a diverse set of solutions.",
            image: DiverseBackground
        },
        {
            title: "Software Design",
            description: "Taking advantage of extensive experience and knowledge of various programming languages and software tools to implement methodical software solutions.",
            image: SoftwareDesign
        },
        {
            title: "Client Interaction",
            description: "Making use of considerable experience interacting and communicating with clients to establish and build professional relationships.",
            image: CustomerService
        }
    ];

    return (
        <div className='background-page'>
            <Container fluid>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="page-header"
                >
                    <h1>Background</h1>
                    <div className="highlight-bar"></div>
                    <motion.div 
                        className="scroll-indicator-background"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ 
                            opacity: showScroll ? [0.2, 1, 0.2] : 0,
                            y: showScroll ? [0, 10, 0] : 20
                        }}
                        transition={{
                            duration: showScroll ? 2 : 0.3,
                            repeat: showScroll ? Infinity : 0,
                            ease: "easeInOut"
                        }}
                    >
                    <ChevronDoubleDown size={30} />
                </motion.div>
                </motion.div>

                <Row className="intro-section">
                    <Col lg={4} className="profile-image-col">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="image-wrapper"
                        >
                            <Image fluid src={Headshot} className="profile-image" />
                        </motion.div>
                    </Col>
                    <Col lg={8} className="intro-content">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h2>About Me</h2>
                            <p className="lead-text">
                                Currently seeking a full-time engineering position in which I can utilize 
                                and expand my knowledge, skills, and experience in the fields of computer 
                                science and engineering.
                            </p>
                            <ul className="about-list">
                                <li>A software engineer currently located in Raleigh, North Carolina. However, I am open to relocating.</li>
                                <li>A self-motivated problem solver who can learn and adapt quickly to solve complex problems.</li>
                                <li>Always eager to learn, grow, and challenge myself to expand my skill set!</li>
                                <li>Passionate about designing full-stack web applications, embedded systems, FPGA applications, and printed circuit boards!</li>
                                <li>Designing complex software in over 10 different languages.</li>
                            </ul>
                        </motion.div>
                    </Col>
                </Row>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="skills-section"
                >
                    <h2>Professional Skillset</h2>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.title}
                                className={`skill-card ${index >= skills.length - (skills.length % 3) ? 'last-row' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="skill-icon">
                                    <Image src={skill.image} alt={skill.title} fluid />
                                </div>
                                <h3>{skill.title}</h3>
                                <p>{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="education-section"
                >
                    <Row className="align-items-center">
                        <Col lg={7} className="education-content">
                            <h2>Education</h2>
                            <div className="university">
                                <a href="https://www.gvsu.edu/" target="_blank" rel="noopener noreferrer">
                                    Grand Valley State University
                                </a>
                                <p className="location">Grand Rapids, Michigan</p>
                            </div>
                            <ul className="education-list">
                                <li>Bachelors of Science in Computer Engineering</li>
                                <li>Bachelors of Science in Electrical Engineering</li>
                                <li>Minor in Business Administration</li>
                                <li>Member of the <a href="https://www.gvsu.edu/honor/" target="_blank" rel="noopener noreferrer">Frederik Meijer Honors College</a></li>
                                <li>Member of the Tau Beta Pi Engineering Honors Society</li>
                                <li>Maintained a 3.85 GPA</li>
                                <li>Gained 2 years of professional experience in software engineering at <a href="https://www.dornerworks.com/" target="_blank" rel="noopener noreferrer">DornerWorks Ltd</a></li>
                            </ul>
                        </Col>
                        <Col lg={5} className="education-logo">
                            <Image src={GVLogo} alt="GVSU Logo" fluid />
                        </Col>
                    </Row>
                </motion.div>
            </Container>
        </div>
    )
}

export default BackgroundPage;