import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class AboutBnr extends Component {
    render() {
        return (
            <Fragment>
                <section id="about-bnr">
                    <Container>
                        <div className="about-text text-center">
                            <h2>{this.props.title}</h2>
                        </div>
                    </Container>
                </section>
            </Fragment>
        );
    }
}

export default AboutBnr;