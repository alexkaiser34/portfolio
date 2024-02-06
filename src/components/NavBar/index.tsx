import { useEffect, useState, useRef } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Hexagon } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { NavLinks } from "../../App";
import Resume from "../Resume";
import './styles.css';
import ReactGA from 'react-ga';
import SocialMediaBar from "../SocialMediaBar";


interface NavBarProps {
    linkActive: NavLinks | undefined,
    setLinkActive: React.Dispatch<React.SetStateAction<NavLinks | undefined>>,
    setMarginTop: React.Dispatch<React.SetStateAction<number>>
}


function NavBar(props: NavBarProps){

    const [click, setClicked] = useState(false);
    const location = useLocation();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const routeName = location.pathname.slice(1);
        if (routeName.length > 1){
            props.setLinkActive(routeName as NavLinks);
        }
        else {
            props.setLinkActive("Home");
        }
    }, [location.pathname, props]);

    useEffect(() => {
        ReactGA.pageview(location.pathname + location.search);
    }, [location.pathname]);

    useEffect(() => {
        if (ref.current !== undefined && ref.current !== null ){
            props.setMarginTop(ref.current?.clientHeight);
        }
        else {
            props.setMarginTop(0);   

        }

    }, [window.innerHeight, window.innerWidth]);


    const handleClick = () => {
        if (click){
            setClicked(false)
        }
        else {
            setClicked(true);
        }
    }


    return (
        <Navbar ref={ref} collapseOnSelect expand="lg" fixed="top" className="navbar-dark" id="navbar-wrapper">
            <Container fluid className="navbar-container">
                <div className="icon-div">
                    <hr className="horizontalDivider" />
                    <Navbar.Brand href="#/Home" id="navbar-brand">
                        <div className="brand-container">
                            <Hexagon className="hex-icon" />
                            <div className="initials">AK</div>
                        </div>
                    </Navbar.Brand>
                </div>
                <SocialMediaBar isExpanded={window.innerWidth >= 992}/>
                <Navbar.Toggle onClick={handleClick} aria-controls="responsive-navbar-nav" className="ms-auto" id="toggle-bar"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="align-items-center ms-auto" id="navbar-links">
                        <Nav.Link onClick={() => {window.scrollTo(0,0); props.setLinkActive("Home")}} active={props.linkActive === "Home"} href="#/Home" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>1.</span>
                            <span>Home</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {window.scrollTo(0,0); props.setLinkActive("About")}} active={props.linkActive === "About"} href="#/About"  className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>2.</span>
                            <span>About</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {window.scrollTo(0,0); props.setLinkActive("Experience")}} active={props.linkActive === "Experience"} href="#/Experience"  className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>3.</span>
                            <span>Experience</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {window.scrollTo(0,0); props.setLinkActive("Contact")}} active={props.linkActive === "Contact"} href="#/Contact" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>4.</span>
                            <span>Contact</span>
                        </Nav.Link>
                        <Nav.Link onClick={() => {window.scrollTo(0,0); props.setLinkActive("Recommendations")}} active={props.linkActive === "Recommendations"} href="#/Recommendations" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>5.</span>
                            <span>Recommendations</span>
                        </Nav.Link>
                        <div style={{paddingLeft: '40px'}}>
                            <Resume />
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


export default NavBar;