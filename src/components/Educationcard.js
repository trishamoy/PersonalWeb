import { Col } from "react-bootstrap";

export const Educationcard = ({ title, description, imgUrl}) => {
    return (
        <Col sm={6} md={3}>
            <div className="educ-imgbx">
                <img src={imgUrl} className="img" />
                <div className="educ-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
        </Col>
    )
}