import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import aboutsection from '../../asset/images/aboutsection.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class AboutUsSection extends Component {
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:true,
            autoplaySpeed:3000,
            autoplay:true,
            // vertical:true,
            // verticalSwiping: true,
            pauseOnHover:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <section id="about-us">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <div className="about-us-single">
                                    <img src={aboutsection} alt=""/>
                                </div>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <div className="about-us-single">
                                    <h2>About Us</h2>
                                    <Slider {...settings}>
                                        <div className="about-sub-single common-btn">
                                            <h4>Why we are?</h4>
                                            <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                                encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                                pursues or desires to obtain pain of itself, because it is pain,
                                                but because occasionally circumstances occur in</p>
                                            <button> Read More</button>
                                        </div>
                                        <div className="about-sub-single common-btn">
                                            <h4>Why we are?</h4>
                                            <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                                encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                                pursues or desires to obtain pain of itself, because it is pain,
                                                but because occasionally circumstances occur in</p>
                                            <button> Read More</button>
                                        </div>
                                        <div className="about-sub-single common-btn">
                                            <h4>Why we are?</h4>
                                            <p>Because it is pleasure, but because those who do not know how to pursue pleasurrationally
                                                encounter consequences that are extremely painful. Nor again is there anyone who loves or
                                                pursues or desires to obtain pain of itself, because it is pain,
                                                but because occasionally circumstances occur in</p>
                                            <button> Read More</button>
                                        </div>
                                    </Slider>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default AboutUsSection;