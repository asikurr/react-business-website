import React, {Component, Fragment} from 'react';
import {Accordion, Card, Col, Container, ProgressBar, Row} from "react-bootstrap";
import skill from '../../asset/images/skill.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faRocket, faPlus, faLocationArrow, faBook, faLockOpen, faMinus} from "@fortawesome/free-solid-svg-icons";

class Skill extends Component {
    constructor() {
        super();
        this.state = {
            after : faMinus,
            another:faPlus

        }
    }


    render() {
       const onclickhandle = () =>{
            if(this.state.after === faMinus ){
                this.setState({after:faPlus})
            }else{
                this.setState({after:faMinus})
            }
        }
        const htmlCss = 95;
        const javaScript=80;
        const reactJs = 85;
        const nodejs = 30;

        const htmlCssProgress = <ProgressBar animated variant={"success"} now={htmlCss} label={`${htmlCss}%`} />;
        const javaScriptProgress = <ProgressBar animated variant={"info"} now={javaScript} label={`${javaScript}%`} />;
        const reactJsProgress = <ProgressBar animated variant={"warning"} now={reactJs} label={`${reactJs}%`} />;
        const nodeJsProgress = <ProgressBar animated variant={"danger"} now={nodejs} label={`${nodejs}%`} />;
        return (
            <Fragment>
                <section className="skillBg">
                    <Container>
                        <div className="section-head">
                            <h2>Our Skills</h2>
                        </div>
                        <Row>
                            <Col lg={4} md={4} sm={12}>
                                <div className="skill-single">
                                    <Accordion defaultActiveKey="0">
                                        <Card >
                                            <Accordion.Toggle onClick={onclickhandle} as={Card.Header} eventKey="0">
                                                <div className="iconColor">
                                                    <FontAwesomeIcon icon={faRocket} />
                                                    <span>Totam rem aperiam eaque</span>
                                                    <FontAwesomeIcon icon={this.state.after} />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle onClick={onclickhandle} as={Card.Header} eventKey="1">
                                                <div className="iconColor">
                                                    <FontAwesomeIcon icon={faLockOpen} className="iconColor"/>
                                                    <span>Totam rem aperiam eaque</span>
                                                    <FontAwesomeIcon className="" icon={this.state.another} />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="2">
                                                <div className="iconColor">
                                                    <FontAwesomeIcon icon={faLocationArrow} className="iconColor"/>
                                                    <span>Totam rem aperiam eaque</span>
                                                    <FontAwesomeIcon className="" icon={faPlus} />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>Hello! I'm another body and Another</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card>
                                            <Accordion.Toggle as={Card.Header} eventKey="3">
                                                <div className="iconColor">
                                                    <FontAwesomeIcon icon={faBook} className="iconColor"/>
                                                    <span>Totam rem aperiam eaque</span>
                                                    <FontAwesomeIcon className="" icon={faPlus} />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="3">
                                                <Card.Body>Hello! I'm another body and Another</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12}>
                                <div className="skill-single">
                                    <img src={skill} alt=""/>
                                </div>
                            </Col>

                            <Col lg={4} md={4} sm={12} >
                                <div className="skill-single">
                                    <div className="skill-pro">
                                        <label htmlFor="">HTML&CSS</label>
                                        <span>{htmlCssProgress}</span>
                                    </div>
                                    <div className="skill-pro">
                                        <label htmlFor="">JavaScript</label>
                                        <span>{javaScriptProgress}</span>
                                    </div>
                                    <div className="skill-pro">
                                        <label htmlFor="">React Js</label>
                                        <span>{reactJsProgress}</span>
                                    </div>
                                    <div className="skill-pro">
                                        <label htmlFor="">Node Js</label>
                                        <span>{nodeJsProgress}</span>
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

export default Skill;