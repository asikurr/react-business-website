import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Project extends Component {
    render() {
        return (
            <section id="project" className="text-center">
                <Fragment>
                    <Container>
                        <div className="section-head">
                            <h2>Our Project</h2>
                            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus
                                id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis </p>
                        </div>
                        <Row>
                           <Col lg={3} md={4} sm={12}>
                               <div className="project-Single">
                                   <h1>
                                       <CountUp start={0} end={220}>
                                           {({ countUpRef, start }) => (
                                               <VisibilitySensor onChange={start} delayedCall>
                                                   <span ref={countUpRef} />
                                               </VisibilitySensor>
                                           )}
                                       </CountUp>
                                   </h1>
                                   <p>Happy Clients</p>
                               </div>
                           </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="project-Single">
                                    <h1>
                                        <CountUp start={0} end={720}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p>Good Projects</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="project-Single">
                                    <h1>
                                        <CountUp start={0} end={420}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p>Day Of Work</p>
                                </div>
                            </Col>
                            <Col lg={3} md={4} sm={12}>
                                <div className="project-Single">
                                    <h1>
                                        <CountUp start={0} end={22}>
                                            {({ countUpRef, start }) => (
                                                <VisibilitySensor onChange={start} delayedCall>
                                                    <span ref={countUpRef} />
                                                </VisibilitySensor>
                                            )}
                                        </CountUp>
                                    </h1>
                                    <p>Pending Projects</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            </section>
        );
    }
}

export default Project;