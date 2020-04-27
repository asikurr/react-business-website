import React, {Component, Fragment} from 'react';
import {Col, Container, Row,Form} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faMapMarker, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
    render() {
        return (
            <section id="contact2" className="contact2">
                <Fragment>
                    <Container>
                        <Row>
                            <Col md={6} className="mukto">
                                <div className="con-map">
                                    <div id="map"></div>
                                    <div className="map-address">
                                        <div className="map-single">
                                            <FontAwesomeIcon className="map-single-i" icon={faPhoneVolume}/>
                                            <div className="address-text">
                                                <h4>Phone:</h4>
                                                <h5>0 (800) 962 14 58</h5>
                                                <h5>0 (800) 463 96 21</h5>
                                            </div>
                                        </div>
                                        <div className="map-single">
                                            <FontAwesomeIcon className="map-single-i" icon={faMapMarker}/>
                                            <div className="address-text">
                                                <h4>Address:</h4>
                                                <h5>34 Imber Rd, Warminster,</h5>
                                                <h5>Wiltshire BA12 9DD, USA</h5>
                                            </div>
                                        </div>
                                        <div className="map-single float-left">
                                            <FontAwesomeIcon className="map-single-i" icon={faEnvelopeOpen}/>
                                            <div className="address-text">
                                                <h4>E-mail:</h4>
                                                <h5>Example@mali.com</h5>
                                                <h5>Support@mali.com</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="con-tac-form text-center common-btn">
                                    <h2>Contact us</h2>
                                    <Form action="">
                                        <input type="text" className="con-tact" placeholder="Enter your name"/>
                                        <input type="text" className="con-tact" placeholder="Enter your e-mail"/>
                                        <input as="textarea" placeholder="Enter your message"
                                                          className="con-tact" rows="3" />

                                        <button>Send message</button>
                                    </Form>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            </section>

    );
    }
}

export default Contact;