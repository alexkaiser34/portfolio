import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { NavLinks } from "../../App";
import Resume from "../Resume";
import './styles.css';
import ReactGA from 'react-ga';
import { motion, AnimatePresence } from "framer-motion";

interface NavBarProps {
    linkActive: NavLinks | undefined,
    setLinkActive: React.Dispatch<React.SetStateAction<NavLinks | undefined>>
}

function NavBar(props: NavBarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const routeName = location.pathname.slice(1);
        if (routeName.length > 1) {
            props.setLinkActive(routeName as NavLinks);
        } else {
            props.setLinkActive("Home");
        }
    }, [location.pathname, props]);

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location.pathname]);

    const navItems = [
        { name: "Home", number: "01" },
        { name: "Background", number: "02" },
        { name: "Experience", number: "03" },
        { name: "Contact", number: "04" },
        { name: "Recommendations", number: "05" }
    ];

    return (
        <Navbar 
            expand="lg" 
            fixed="top" 
            className={`modern-navbar ${isScrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand 
                    href="#/Home" 
                    className="brand"
                    onClick={() => {
                        window.scrollTo(0, 0);
                        setIsOpen(false);
                        props.setLinkActive("Home");
                    }}
                >
                    <motion.div
                        className="logo-container"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="monogram">
                            <span className="monogram-letter">A</span>
                            <span className="monogram-letter">K</span>
                        </div>
                    </motion.div>
                </Navbar.Brand>

                <Navbar.Toggle 
                    aria-controls="navbar-nav"
                    className="hamburger"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className={`hamburger-lines ${isOpen ? 'open' : ''}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbar-nav" in={isOpen}>
                    <Nav className="ms-auto nav-links">
                        {navItems.map((item, index) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index }}
                            >
                                <Nav.Link
                                    href={`#/${item.name}`}
                                    active={props.linkActive === item.name}
                                    onClick={() => {
                                        window.scrollTo(0,0);
                                        props.setLinkActive(item.name as NavLinks);
                                        setIsOpen(false);
                                    }}
                                    className="nav-item"
                                >
                                    <span className="nav-number">{item.number}</span>
                                    <span className="nav-text">{item.name}</span>
                                </Nav.Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="resume-button-wrapper"
                        >
                            <Resume />
                        </motion.div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;