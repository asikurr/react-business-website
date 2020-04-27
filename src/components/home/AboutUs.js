import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import about1 from '../../asset/images/about1.jpg'
import about2 from '../../asset/images/about2.jpg'

class AboutUs extends Component {
    render() {
        return (
            <section id="aboutUs">
                <Fragment>
                    <Container fluid={true} className="">
                        <div className="section-head">
                            <h2>About Us</h2>
                        </div>
                        <Row >
                            <Col lg={6} md={12} sm={12} className=" p-0">
                                <div className="about-single ">
                                    <img src={about1} alt=""/>
                                </div>
                            </Col>

                            <Col lg={6} md={12} sm={12} className="p-0">
                                <div className="about-single text-center">
                                    <h2>We denounce with righteous indignation </h2>
                                    <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                        encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of itself, because it is pain,
                                        but because occasionally circumstances occur in </p>
                                    <button> Read More</button>
                                </div>
                            </Col>

                        </Row>
                        <Row >
                            <Col lg={6} md={12} sm={12} className="p-0">
                                <div className="about-single text-center">
                                    <h2>We denounce with righteous indignation </h2>
                                    <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                        encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                        pursues or desires to obtain pain of itself, because it is pain,
                                        but because occasionally circumstances occur in </p>
                                    <button> Read More</button>
                                </div>
                            </Col>

                            <Col lg={6} md={12} sm={12} className=" p-0">
                                <div className="about-single ">
                                    <img src={about2} alt=""/>
                                </div>
                            </Col>

                        </Row>
                    </Container>
                </Fragment>
            </section>
        );
    }
}

export default AboutUs;