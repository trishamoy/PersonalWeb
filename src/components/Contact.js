import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contacting from "../assets/img/bg.png"; 

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '', // Corrected 'Lastname' to 'lastName'
        email: '',
        phone: '',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => { // Added 'async' keyword to handleSubmit function
        e.preventDefault();
        setButtonText('Sending...');
        try { // Added try-catch block to handle fetch errors
            let response = await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: { // Corrected 'header' to 'headers'
                    "Content-Type": "application/json;charset=utf-8", // Corrected 'Application' to 'application' and 'stringfy' to 'stringify'
                },
                body: JSON.stringify(formDetails), // Corrected 'stringfy' to 'stringify'
            });
            setButtonText("Send");
            let result = await response.json(); // Added 'await' to wait for response.json() to resolve
            setFormDetails(formInitialDetails);
            if (response.status === 200) { // Changed 'result.code' to 'response.status'
                setStatus({ success: true, message: 'Message sent successfully' });
            } else {
                setStatus({ success: false, message: 'Something went wrong, please try again later.' }); // Corrected 'Someething' to 'Something'
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus({ success: false, message: 'Something went wrong, please try again later.' });
            setButtonText("Send");
        }
    };

    return (
        <section className="contact" id="Contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contacting} alt="Contact Me" />
                    </Col>
                    <Col md={6}>
                        <h2> Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Last name" onChange={(e) => onFormUpdate('lastName', e.target.value)} /> {/* Changed 'Lastname' to 'lastName' */}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} /> {/* Corrected 'email' placeholder */}
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.phone} placeholder="Phone" onChange={(e) => onFormUpdate('phone', e.target.value)} /> {/* Corrected 'phone' placeholder */}
                                </Col>
                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} /> {/* Corrected 'mesaage' to 'message' */}
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {/* Corrected the following condition to properly display the message */}
                                {status.message && <p className={status.success ? "success" : "danger"}>{status.message}</p>}
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
