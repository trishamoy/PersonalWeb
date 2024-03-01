import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import navIcon4 from '../assets/img/nav-icon4.png';

export const Navbars = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#Home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#Education" className={activeLink === 'education' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('education')}>Education</Nav.Link>
                        <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                        <a href="https://www.facebook.com/mayumaymay21"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.instagram.com/trishamoooy/"><img src={navIcon2} alt="" /></a>
                        <a href="https://github.com/trishamoy"><img src={navIcon3} alt="" /></a>
                        <a href="https://www.linkedin.com/in/trisha-mae-balmes-577a38278/"><img src={navIcon4} alt="" /></a>

                        </div>
                        <a href="#Contact"><button>Connect</button></a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}