import React, {Component, Fragment} from 'react';
import {Carousel, Col, Container, Row} from "react-bootstrap";
import '../../asset/css/bootstrap.min.css'
import '../../asset/css/style.css'
import slide1 from '../../asset/images/slider1.jpg'
import slide2 from '../../asset/images/slider2.jpg'
import slide3 from '../../asset/images/slider3.jpg'

class Slider extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true}  className="p-0">
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="sliderImg "
                                src={slide1}
                                alt="First slide"
                            />
                            <Carousel.Caption className="common-btn">
                                <h1>Sofrware Development</h1>
                                <p>But because those who do not know how to pursue
                                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursuedesires to obtain pain of</p>
                                <button className="mr-2">Read More</button>
                                <button >Buy Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="sliderImg"
                                src={slide2}
                                alt="Third slide"
                            />

                            <Carousel.Caption className="common-btn">
                                <h1>Sofrware Development</h1>
                                <p>But because those who do not know how to pursue
                                    pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursuedesires to obtain pain of</p>
                                <button className="mr-2">Read More</button>
                                <button >Buy Now</button>
                            </Carousel.Caption>
                        </Carousel.Item>

                    </Carousel>
                </Container>
            </Fragment>
        );
    }
}

export default Slider;