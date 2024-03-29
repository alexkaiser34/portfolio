import { Button, Carousel, Container, Image} from 'react-bootstrap';
import './styles.css';
import { AmazonwebservicesOriginal, BashOriginal, COriginal, CplusplusOriginal, CsharpOriginal, DockerOriginal, DotnetcoreOriginal, JavaOriginal, JavascriptOriginal, PythonOriginal, ReactOriginal, TypescriptOriginal } from 'devicons-react';
import { NavLinks } from '../../App';
import SpaceBlue from '../../images/space-blue.jpg';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface HomePageProps {
    linkActive: NavLinks | undefined,
    setLinkActive: React.Dispatch<React.SetStateAction<NavLinks | undefined>>
}

function HomePage(props: HomePageProps){


    useEffect(() => {
        document.title = "Alex Kaiser Portfolio";
     }, []);

     return (
        <div className='HomePage-container'>
        <Container fluid className='HomePage-wrapper pb-5 pt-5'>
            <div className='row d-flex align-items-center g-0'>
                <div className='col-12 col-md-6'>
                    <motion.div
                        animate={{x: [-500, 0]}}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                        >
                        <div className='intro-homepage pb-5' style={{color: 'lightgreen'}}>
                            <div>
                                <div className='d-flex flex-row align-items-center' style={{color: 'lightblue'}}>
                                    <h4 className="wave">👋</h4>
                                    <h3>Hi, my name is</h3>
                                </div>
                            </div>
                            <h1 style={{fontWeight: 'bold'}}>Alex Kaiser</h1>
                            <h2>Software Engineer</h2>
                            <span style={{color: 'lightblue', maxWidth: '50%', fontSize: 'larger'}}>
                                I am a software engineer with a passion for full-stack engineering,
                                embedded system design, FPGA's, and project management.
                            </span>
                        <Button className="touch-button" href="#/Contact" onClick={() => {window.scrollTo(0,0); props.setLinkActive("Contact");}}>
                            Get in Touch
                        </Button>
                        </div>

                    </motion.div>
                </div>
                <div className='col-12 col-md-6'>
                    <motion.div
                        animate={{y: [-500, 0]}}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                        >
                            <div className='d-flex flex-column align-items-center justify-content-evenly pb-5'>
                                <h2 style={{color: 'lightgreen', paddingBottom: '20px'}}>2+ years experience designing</h2>
                                
                                <Carousel style={{maxHeight: '500px', maxWidth: '600px', borderRadius: '20px', outline: '3px solid lightgreen'}}>
                                    <Carousel.Item>
                                        <Image fluid src={SpaceBlue} 
                                        style={{
                                            opacity: 0
                                        }}/>
                                        <Carousel.Caption style={{position: 'absolute', top: window.innerWidth <= 480 ? '10%' : '20%', color: 'lightgreen'}}>
                                        <h4 style={{fontWeight: 'bold'}}>Embedded Software</h4>
                                        <p style={{marginTop: window.innerWidth <= 480 ? '10%' : '15%', fontSize: window.innerWidth <= 480 ? 'medium' : 'large', color: 'lightblue'}}>
                                            Created complex embedded applications and firmware for many 
                                            microcontrollers and computer architectures
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        {/* <Image fluid src={SpaceBlue} style={{borderRadius: '10px'}}/> */}
                                        <Image fluid src={SpaceBlue} 
                                        style={{
                                            opacity: 0
                                        }}/>
                                        <Carousel.Caption style={{position: 'absolute', top: window.innerWidth <= 480 ? '10%' : '20%', color: 'lightgreen'}}>
                                        <h4 style={{fontWeight: 'bold'}}>Full Stack Apps</h4>
                                        <p style={{marginTop: window.innerWidth <= 480 ? '10%' : '15%', fontSize: window.innerWidth <= 480 ? 'medium' : 'large', color: 'lightblue'}}>
                                            Designed the backend, frontend, and infrastructure of web and 
                                            desktop applications from the ground up
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image fluid src={SpaceBlue} 
                                        style={{
                                            opacity: 0
                                        }}/>
                                        <Carousel.Caption style={{position: 'absolute', top: window.innerWidth <= 480 ? '10%' : '20%', color: 'lightgreen'}}>
                                        <h4 style={{fontWeight: 'bold'}}>FPGA Software</h4>
                                        <p style={{marginTop: window.innerWidth <= 480 ? '10%' : '15%', fontSize: window.innerWidth <= 480 ? 'medium' : 'large', color: 'lightblue'}}>
                                            Created hardware drivers,
                                            accelerated machine learning algorithms, and designed a
                                            CPU using VHDL and Verilog
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image fluid src={SpaceBlue} 
                                        style={{
                                            opacity: 0
                                        }}/>
                                        <Carousel.Caption style={{position: 'absolute', top: window.innerWidth <= 480 ? '10%' : '20%', color: 'lightgreen'}}>
                                        <h4 style={{fontWeight: 'bold'}}>PCB Design</h4>
                                        <p style={{marginTop: window.innerWidth <= 480 ? '10%' : '15%', fontSize: window.innerWidth <= 480 ? 'medium' : 'large', color: 'lightblue'}}>
                                            Designed sophisticated printed circuit boards to drive various senors and 
                                            run embedded applications 
                                        </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </motion.div>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <motion.div
                        className='programming-languages'
                        animate={{y: [500, 0]}}
                        transition={{ ease: "easeIn", duration: 0.5 }}
                        >
                        <h2 style={{color: 'lightgreen', paddingBottom: '20px'}}>Developing with</h2>
                        <div className='scroller'>
                            <ul className='tag-list scroller__inner'>
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
                            </ul>

                        </div>
                    </motion.div>
                </div>
            </div>
        </Container>
        </div>
     )
}

export default HomePage;