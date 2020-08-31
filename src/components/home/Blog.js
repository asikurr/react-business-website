import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import blog1 from '../../asset/images/blog1.jpg'
import blog2 from '../../asset/images/blog2.jpg'

class Blog extends Component {
    render() {
        return (
            <section id="blog">
                <Fragment>
                    <Container>
                        <div className="section-head">
                            <h2>Our Blog</h2>
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                                more-or-less normal distribution of letters,
                            </p>
                        </div>
                        <div className="blog-content">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <div className="blog-single">
                                        <img src={blog1} alt="Blog Img" />
                                        <div className="blog-text">
                                            <h4>Omnis voluptas assumenda est</h4>
                                            <h5>By Redactor on January 15, 2016</h5>
                                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
                                                saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                            </p>
                                            <a href="#">Read More&raquo;</a>
                                        </div>
                                    </div>

                                </Col>

                                <Col lg={6} md={6} sm={12}>
                                    <div className="blog-single col-md-6">
                                        <img src={blog2} alt="Blog Img"/>
                                        <div className="blog-text">
                                            <h4>Omnis voluptas assumenda est</h4>
                                            <h5>By Redactor on January 15, 2016</h5>
                                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum
                                                necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                                            </p>
                                            <a href="">Read More&raquo;</a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </Fragment>
            </section>
        );
    }
}

export default Blog;