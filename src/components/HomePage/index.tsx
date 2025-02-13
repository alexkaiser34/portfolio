import { Button, Container, Row, Col } from 'react-bootstrap';
import './styles.css';
import { motion } from 'framer-motion';
import { NavLinks } from '../../App';
import { useEffect, useState } from 'react';
import { 
  AmazonwebservicesOriginal, 
  BashOriginal, 
  COriginal, 
  CplusplusOriginal, 
  CsharpOriginal, 
  DockerOriginal, 
  DotnetcoreOriginal, 
  JavaOriginal, 
  JavascriptOriginal, 
  PythonOriginal, 
  ReactOriginal, 
  TypescriptOriginal 
} from 'devicons-react';
import { Linkedin, Github, Envelope, ChevronDoubleDown } from 'react-bootstrap-icons';

interface HomePageProps {
    linkActive: NavLinks | undefined,
    setLinkActive: React.Dispatch<React.SetStateAction<NavLinks | undefined>>
}

function HomePage(props: HomePageProps) {
    const [showScroll, setShowScroll] = useState(true);

    useEffect(() => {
        document.title = "Alex Kaiser - Software Engineer";

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 100) {
                setShowScroll(false);
            } else {
                setShowScroll(true);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='HomePage-container'>
            <Container fluid>
                <Row className="hero-section g-0">
                    <Col lg={6} className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="greeting">Welcome, I'm</span>
                            <h1 className="name">Alex Kaiser</h1>
                            <h2 className="title">Software & Hardware Engineer</h2>
                            <p className="bio">
                                Specialized in FPGA development, embedded systems, and full-stack applications. 
                                With expertise spanning hardware and software, I bring a unique perspective 
                                to complex engineering challenges.
                            </p>
                            <div className="cta-buttons">
                                <Button 
                                    className="primary-button"
                                    href="#/Experience"
                                    onClick={() => {
                                        window.scrollTo(0,0);
                                        props.setLinkActive("Experience");
                                    }}
                                >
                                    View My Work
                                </Button>
                                <Button 
                                    className="secondary-button"
                                    href="#/Contact"
                                    onClick={() => {
                                        window.scrollTo(0,0);
                                        props.setLinkActive("Contact");
                                    }}
                                >
                                    Get in Touch
                                </Button>
                            </div>
                        </motion.div>
                    </Col>
                    <Col lg={6} className="contact-section">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="contact-content"
                        >
                            <h2 className="contact-title">Let's Connect</h2>
                            <div className="contact-links">
                                <motion.a 
                                    href="mailto:alexkaiser@me.com"
                                    whileHover={{ scale: 1.05 }}
                                    className="contact-link"
                                >
                                    <Envelope size={24} />
                                    <span style={{ marginLeft: '8px' }}>alexkaiser@me.com</span>
                                </motion.a>
                                <motion.a 
                                    href="https://www.linkedin.com/in/alex-kaiser34/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="contact-link"
                                >
                                    <Linkedin size={24} />
                                    <span style={{ marginLeft: '8px' }}>LinkedIn Profile</span>
                                </motion.a>
                                <motion.a 
                                    href="https://github.com/alexkaiser34"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    className="contact-link"
                                >
                                    <Github size={24} />
                                    <span style={{ marginLeft: '8px' }}>GitHub Profile</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </Col>
                </Row>

                <motion.div 
                    className="scroll-indicator-home"
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

                <Row className="expertise-section pe-4 ps-4 justify-content-center justify-items-center">
                    <Col xs={12} className="text-center">
                        <motion.h2 
                            className="section-title"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Areas of Expertise
                        </motion.h2>
                    </Col>
                    {expertiseAreas.map((area, index) => (
                        <Col md={3} sm={6} key={area.title}>
                            <motion.div 
                                className="expertise-card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.2, ease: "easeInOut" }}
                            >
                                <h3>{area.title}</h3>
                                <p>{area.description}</p>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

                <Row className="tech-stack-row">
                    <Col xs={12} className="tech-stack-section">
                        <motion.h2 
                            className="section-title text-center"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            Technologies I Work With
                        </motion.h2>
                        <div className="tech-grid-container">
                            <div className="tech-grid">
                                {Object.keys(technologies).map((key, index) => (
                                    <motion.div 
                                        key={index}
                                        className="tech-icon-wrapper"
                                        title={key}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.2, ease: "easeInOut" }}
                                    >
                                        <div className="tech-icon-title">{key}</div>
                                        <div className="tech-icon">
                                            {technologies[key]}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const expertiseAreas = [
    {
        title: "FPGA Development",
        description: "Hardware acceleration, digital design, and custom processor implementation using VHDL and Verilog"
    },
    {
        title: "Embedded Systems",
        description: "Firmware development, real-time systems, and bare-metal programming for various microcontrollers"
    },
    {
        title: "Full Stack Development",
        description: "Modern web applications using React, Node.js, and cloud infrastructure"
    },
    {
        title: "Hardware Design",
        description: "PCB design and embedded system architecture for complex electronic systems"
    }
];

const technologies : { [key: string]: React.ReactNode } = {
    "Python": <PythonOriginal size="3em" />,
    "React": <ReactOriginal size="3em" />,
    "JavaScript": <JavascriptOriginal size="3em" />,
    "TypeScript": <TypescriptOriginal size="3em" />,
    "C": <COriginal size="3em" />,
    "C++": <CplusplusOriginal size="3em" />,
    "C#": <CsharpOriginal size="3em" />,
    "ASP.NET": <DotnetcoreOriginal size="3em" />,
    "Java": <JavaOriginal size="3em" />,
    "Bash": <BashOriginal size="3em" />,
    "AWS": <AmazonwebservicesOriginal size="3em" />,
    "Docker": <DockerOriginal size="3em" />
};

export default HomePage;