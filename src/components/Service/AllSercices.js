import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStore} from "@fortawesome/free-solid-svg-icons";

class AllSercices extends Component {
    render() {
        return (
            <section id="all-services">
            <Fragment>
                    <div className="allService-overlay">
                        <div className="total-padding">
                            <Container>
                                    <Row>
                                       <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single b-last-child">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="col-border"></div>
                                    <Row>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                        <Col lg={4} md={6} sm={12}>
                                            <div className="all-service-single b-last-child">
                                                <h3>Omnis iste natus error</h3>
                                                <FontAwesomeIcon className="icon-height" icon={faStore}/>
                                                <p>Nemo enim ipsam voluptatem voluptas sit aspernatur aut odit aut fugit, sed quia
                                                    consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                                    ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam</p>
                                            </div>
                                        </Col>
                                    </Row>
                            </Container>
                        </div>
                    </div>
            </Fragment>
            </section>
        );
    }
}

export default AllSercices;