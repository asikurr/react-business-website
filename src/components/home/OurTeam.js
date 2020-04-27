import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import t1 from '../../asset/images/1.jpg'
import t2 from '../../asset/images/2.jpg'
import t3 from '../../asset/images/3.jpg'
import t4 from '../../asset/images/4.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faFacebookSquare,
    faInstagramSquare,
    faTwitterSquare,
    faYoutubeSquare
} from "@fortawesome/free-brands-svg-icons";

class OurTeam extends Component {
    render() {
        return (
            <Fragment>
                <section className="teamBg">
                    <Container>
                        <div className="section-head">
                            <h2>Our Team</h2>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis </p>
                        </div>
                        <Row>
                            <Col lg={3} md={4} sm={12}>
                                <div className="team-single">
                                    <img src={t1} alt=""/>
                                    <div className="team-overlay">
                                        <h3>Creative Designer</h3>
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faTwitterSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faInstagramSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faYoutubeSquare} />
                                    </div>
                                    <div className="teamH2">
                                        <h2>Asikur Rahaman</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="team-single">
                                    <img src={t2} alt=""/>
                                    <div className="team-overlay">
                                        <h3>Creative Designer</h3>
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faTwitterSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faInstagramSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faYoutubeSquare} />
                                    </div>
                                    <div className="teamH2">
                                        <h2>Rahaman</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="team-single">
                                    <img src={t3} alt=""/>
                                    <div className="team-overlay">
                                        <h3>Creative Designer</h3>
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faTwitterSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faInstagramSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faYoutubeSquare} />
                                    </div>
                                    <div className="teamH2">
                                        <h2>Asikur Rahaman</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="team-single">
                                    <img src={t4} alt=""/>
                                    <div className="team-overlay">
                                        <h3>Creative Designer</h3>
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faFacebookSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faTwitterSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faInstagramSquare} />
                                        <FontAwesomeIcon className="team-overlay-icon" icon={faYoutubeSquare} />
                                    </div>
                                    <div className="teamH2">
                                        <h2>Asikur Rahaman</h2>
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

export default OurTeam;