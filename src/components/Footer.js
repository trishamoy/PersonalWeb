import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.png';
import navIcon2 from '../assets/img/nav-icon2.png';
import navIcon3 from '../assets/img/nav-icon3.png';
import navIcon4 from '../assets/img/nav-icon4.png';


export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <MailchimpForm/>
                    <Col sm={6}>
                        <img src={logo} alt="logo" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://www.facebook.com/mayumaymay21"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.instagram.com/trishamoooy/"><img src={navIcon2} alt="" /></a>
                        <a href="https://www.twitter.com/your_twitter_username"><img src={navIcon3} alt="" /></a>
                        <a href="https://www.linkedin.com/in/trisha-mae-balmes-577a38278/"><img src={navIcon4} alt="" /></a>

                        </div>
                        <p>CopyRight 2024. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}