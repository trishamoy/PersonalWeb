import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { Educationcard } from "./Educationcard";
import colorSharp2 from "../assets/img/color-sharp2.png"; // Fixed path
import Marian from "../assets/img/Marian.png";
import Grandview from "../assets/img/Grandview.png";
import Leon from "../assets/img/Leon.png";
import NCF from "../assets/img/NCF.png";
import TrackVisibility from 'react-on-screen';

export const Education = () => {
    const educations = [ // Renamed from Education to educations
        {
            title: "Marian Formation Center",
            description: "When I was 5 years old I was a student at Marian Formation Center.", // Fixed typo
            imgUrl: Marian,
        },
        {
            title: "Grandview Elementary School",
            description: "I graduated my kidergarten at Grandview Elementary School.", // Fixed typo
            imgUrl: Grandview,
        },
        {
            title: "Leon Q. Mercado High School",
            description: " My secondary school was Leon Q. Mercado High School.", // Fixed typo
            imgUrl: Leon,
        },
        {
            title: "Naga College Foundation Inc.",
            description: "Im currenty at Naga College Foundation, Inc with the Bachelor of science in Information System.", // Fixed typo
            imgUrl: NCF,
        },
    ];

    return (
        <section className="Education" id="Education">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate_animated animate_bounce" : ""}>
                                    <h2>Education</h2>
                                    <p>As a BSIS student, Trisha Balmes is immersed in the world of technology, mastering skills in data management and system analysis for future professional success.</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="education-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {educations.map((education, index) => (
                                            <Educationcard
                                                key={index}
                                                {...education}
                                            />
                                        ))}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Color Sharp 2"></img> {/* Added alt attribute */}
        </section>
    );
};
