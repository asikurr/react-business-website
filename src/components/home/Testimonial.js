import React, {Component, Fragment} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import testCaro from '../../asset/images/testmonialCaro.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


class Testimonial extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: true,
            speed: 3000,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:true,
            autoplaySpeed:3000,
            autoplay:true,
            vertical:true,
            verticalSwiping: true,
            pauseOnHover:true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
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
            <section id="testimonial">
                <Fragment>
                    <div className="overLay">
                        <Container >
                                <div className="testimonial-head">
                                    <h2>Testimonial</h2>
                                </div>
                                <Slider {...settings}>
                                    <div className="testimonial-single">
                                        <Row className="justify-content-around">
                                            <Col lg={6} md={6} sm={12} className="p-0">
                                                <img src={testCaro} alt=""/>
                                                <h3>Eugene Stanley</h3>
                                                <p> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                                    minquod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                                    repellendus. Temporibus autem quibusdamdebitis aulias </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="testimonial-single">
                                        <Row className="justify-content-around">
                                            <Col lg={6} md={6} sm={12} className="p-0">
                                                <img src={testCaro} alt=""/>
                                                <h3>Eugene Stanley</h3>
                                                <p> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                                    minquod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                                    repellendus. Temporibus autem quibusdamdebitis aulias </p>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="testimonial-single">
                                        <Row className="justify-content-around">
                                            <Col lg={6} md={6} sm={12} className="p-0">
                                                <img src={testCaro} alt=""/>
                                                <h3>Eugene Stanley</h3>
                                                <p> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo
                                                    minquod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor
                                                    repellendus. Temporibus autem quibusdamdebitis aulias </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Slider>
                        </Container>
                    </div>
                </Fragment>
            </section>
        );
    }
}

export default Testimonial;