import { useState } from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Hexagon, Dot, Dash } from "react-bootstrap-icons";
import Resume from "../Resume";
import './styles.css';



function NavBar(){

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
        <Navbar expand="md" fixed="top" className="navbar-wrapper" style={{
            height: !click ? 'max(calc(40px + 3vh), 60px)' : 'inherit'
        }}>
            <Container fluid className="navbar-container">
                <div className="icon-div">
                    <hr className="horizontalDivider" />
                    <Navbar.Brand href="/home" id="navbar-brand">
                        <div className="brand-container">
                            <Hexagon className="hex-icon" />
                            <div className="initials">AK</div>
                        </div>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle onClick={handleClick} aria-controls="basic-navbar-nav" className="ms-auto"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="align-items-center ms-auto" id="navbar-links">
                        <Nav.Link href="/About" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>1.</span>
                            <span>About</span>
                        </Nav.Link>
                        <Nav.Link href="/Experience" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>2.</span>
                            <span>Experience</span>
                        </Nav.Link>
                        <Nav.Link href="/Projects" className="d-flex flex-row" >
                            <span style={{color:'lightgreen', paddingRight: '5px'}}>3.</span>
                            <span>Projects</span>
                        </Nav.Link>
                        <Nav.Link href="/Contact" className="d-flex flex-row" >
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