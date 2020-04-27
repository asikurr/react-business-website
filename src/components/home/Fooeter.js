import React, {Component, Fragment} from 'react';
import {Container,Row,Col} from "react-bootstrap";
import {faAngleRight, faArrowRight, faLocationArrow, faLockOpen, faPhone} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import foot1 from '../../asset/images/foot1.jpg'
import foot2 from '../../asset/images/foot2.jpg'
import foot3 from '../../asset/images/foot3.jpg'
import foot4 from '../../asset/images/foot4.jpg'
import foot5 from '../../asset/images/foot5.jpg'
import foot6 from '../../asset/images/foot6.jpg'


class Fooeter extends Component {
    render() {
        return (
            <section id="footer">
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={4} md={6} sm={12}>
                               <div className="footer-section text-justify">
                                   <h2>About Us</h2>
                                    <div className="footer-single ">
                                        <p>Nisi ut aliquid ex ea commodi consequatur Quis autem vel eum iure
                                            reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                                            vel illum qui dolorem eum fugiat quo voluptas nulla pariatur</p>
                                        <FontAwesomeIcon icon={faPhone} className="iconSpace"/><span>01823980517</span> <br/>
                                        <FontAwesomeIcon icon={faLocationArrow} className="iconSpace"/><span>9378 Bridge Street <br/>Crystal Lake, IL 60014 </span>

                                    </div>
                               </div>
                            </Col>

                            <Col lg={4} md={6} sm={12}>
                                <div className="footer-section text-justify">
                                    <h2>Useful Links</h2>
                                    <div className="footer-single ">
                                        <ul>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>HOME</a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>ABOUT US</a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>SERVICE</a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>PORTFOLIO</a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>BLOG</a></li>
                                            <li><a href=""><FontAwesomeIcon icon={faAngleRight} className="iconSpace"/>CONTACT</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4} md={6} sm={12}>
                                <div className="footer-section text-justify">
                                    <h2>Our Flickr</h2>
                                    <div className="footer-single ">
                                        <img src={foot1} alt=""/>
                                        <img src={foot2} alt=""/>
                                        <img src={foot3} alt=""/>
                                        <img src={foot4} alt=""/>
                                        <img src={foot5} alt=""/>
                                        <img src={foot6} alt=""/>

                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <div className="footer-copyright">
                            <p>© CopyRight 2020. All Right Reserved By Asikur Rahaman</p>
                        </div>
                    </Container>
                </Fragment>
            </section>
        );
    }
}

export default Fooeter;