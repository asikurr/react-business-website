import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import AboutBnr from "../components/About/AboutBnr";
import Contact from "../components/contact/Contact";
import Fooeter from "../components/home/Fooeter";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <AboutBnr title="CONTACT US"/>
                <Contact/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default ContactPage;