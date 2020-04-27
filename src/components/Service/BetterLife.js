import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import betterLife from '../../asset/images/skill.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";

class BetterLife extends Component {
    render() {
        return (
            <Fragment>
                <section id="better-service">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="better-service-single">
                                    <img src={betterLife} alt=""/>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="better-service-single">
                                    <h2>We Make your life little bit Better</h2>
                                        <div className="better-service">
                                            <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                                encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                                pursues or desires to obtain pain of itself, because it is pain,
                                                but because occasionally circumstances occur in</p>
                                        </div>
                                    <div className="service-icon">
                                        <FontAwesomeIcon className="service-icon-color" icon={faHeart}/><span className="s-icon-text">Because it is pleasure</span><br/>
                                    </div>
                                    <div className="service-icon">
                                        <FontAwesomeIcon className="service-icon-color" icon={faHeart}/><span className="s-icon-text">Because it is pleasure</span><br/>
                                    </div>
                                    <div className="service-icon">
                                        <FontAwesomeIcon className="service-icon-color" icon={faHeart}/><span className="s-icon-text">Because it is pleasure</span><br/>
                                    </div>
                                    <div className="service-icon">
                                        <FontAwesomeIcon className="service-icon-color" icon={faHeart}/><span className="s-icon-text">Because it is pleasure</span><br/>
                                    </div>
                                    <div className="service-icon">
                                        <FontAwesomeIcon className="service-icon-color" icon={faHeart}/><span className="s-icon-text">Because it is pleasure</span><br/>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default BetterLife;