// import {useState, useEffect} from "react";
import { Container, Row , Col } from "react-bootstrap";
import { ArrowRight } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Banner = () => {
    // const [loopNum, setLoopNum] = useState(0);
    // const [isDeleting, setIsDeleting] = useState(false);
    // const toRotate = ["Application Developer", "App Designer", "UI/UX Desinger" ];
    // const [text, setText] = useState('');
    // const [delta, setDelta] = useState(300 - Math.random() * 100);
    // const period = 2000;

    // useEffect(() =>{
    //     let ticker = setInterval(() => {
    //         ticker();
    //     },delta)
    //     return () => { clearInterval(ticker)};
    // }, [text] )
    
    // const ticker = () => {
    //     let i = loopNum % toRotate.length;
    //     let fullText = toRotate[i];
    //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    //     setText (updatedText);

    //     if (isDeleting){
    //         setDelta(prevDelta => prevDelta /2)
    //     }

    //     if (!isDeleting && updatedText === fullText) {
    //         setIsDeleting(true);
    //         setDelta(period);
    //     } else if(isDeleting && updatedText === '') {
    //         setIsDeleting(false);
    //         setLoopNum(loopNum + 1);
    //         setDelta(500);
    //     }
    // }
    return (
        <section className="banner" id ="Home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12 } md={6} xl={17}>
                        <TrackVisibility>
                        {({ isVisible}) =>
                        <div className={isVisible ? "animate_animated animate_fadeIn": ""}>
                        <span className="tagline">Welcome to My Website</span>
                        <h1>{'Hi I am Trisha C. Balmes'}<span className="wrap">{}</span></h1>
                        <p>A 22-years-old Dancer based in Camarines Sur, Philippines.</p>
                        <a href="#Contact"><button>Connect<ArrowRight size={25}/></button></a>
                        
                        </div>}
                        </TrackVisibility> 
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section >
    )
}