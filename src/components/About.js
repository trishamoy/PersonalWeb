import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter3.png";
import meter2 from "../assets/img/meter2.png";
import meter3 from "../assets/img/meter1.png";
import colorSharp from "../assets/img/color-sharp.png";

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="About" id="About">
            <Container>
                <Row>
                    <Col>
                        <div className="About-bx">
                            <h2> About Me </h2>
                            <p> I am a passionate student aspiring to become an application developer specializing in business analytics. When not immersed in code, I find joy in dancing and serve to be the president of Hatak Kajovenan, a Pacol-based organization. </p>
                            <Carousel responsive={responsive} infinite={true} className="About-slider">
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5> Application Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5> Dance Choreographer</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5> Make up Artist</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
    );
}