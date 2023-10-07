import { useEffect, useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Hexagon } from "react-bootstrap-icons";
import { NavLinks } from "../../App";
import Resume from "../Resume";
import './styles.css';


interface NavBarProps {
    linkActive: NavLinks,
    setLinkActive: React.Dispatch<React.SetStateAction<NavLinks>>
}


function NavBar(props: NavBarProps){

    const [click, setClicked] = useState(false);


    const handleClick = () => {
        if (click){
            setClicked(false)
        }
        else {
            setClicked(true);
        }
    }


    return (
        <Navbar expand="lg" fixed="top" className="navbar-dark navbar-wrapper" style={{
            height: !click ? 'max(calc(40px + 3vh), 60px)' : 'inherit'
        }}>
            <Container fluid className="navbar-container">
                <div className="icon-div">
                    <hr className="horizontalDivider" />
                    <Navbar.Brand href="/#/portfolio" id="navbar-brand">
                        <div className="brand-container">
                            <Hexagon className="hex-icon" />
                            <div className="initials">AK</div>
                        </div>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle onClick={handleClick} aria-controls="basic-navbar-nav" className="ms-auto" id="toggle-bar"/>
                <Navbar.Collapse id="basic-navbar-nav">
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