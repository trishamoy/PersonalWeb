import { Alert, Row, Col } from "react-bootstrap";
import  { useState, useEffect } from "react";

export const Newsletter = ({ onValidated, status, message }) => {
    const [email,setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearField();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearField = () => {
        setEmail('');
    }
    return (
        <Col lg={12}>
            <div className="newsletter-bx">
                <Row>
                    <Col lg={12} md={6} xl={5}>
                        <h3>Subscribe</h3>
                        {status ==='sending' && <Alert>Sending...</Alert>}
                        {status ==='error' && <Alert variant="danger">{message}</Alert>}
                        {status ==='success' && <Alert variant="success">{message}</Alert>}
                    </Col>
                    <Col md={6} xl={7}>
                        <form onSubmit={handleSubmit}>
                            <div className="new-email">
                                <input value={email} className="new-email-bx" type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                <button type="submit" className="sub">Submit</button>
                            </div>
                        </form>
                    </Col>
                </Row>
                </div> 
        </Col>
    )
}