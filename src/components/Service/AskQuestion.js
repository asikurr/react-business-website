import React, {Component, Fragment} from 'react';
import {Container} from "react-bootstrap";

class AskQuestion extends Component {
    render() {
        return (
            <section id="ask-question">
                <Fragment>
                    <Container>
                        <div className="question-section common-btn">
                            <h3>Have a question? Ask it to us!</h3>
                            <p>Soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat
                                facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis </p>
                            <button>ASK A QUESTION</button>
                        </div>
                    </Container>
                </Fragment>
            </section>
        );
    }
}

export default AskQuestion;