import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import AboutBnr from "../components/About/AboutBnr";
import AboutUsSection from "../components/About/AboutUsSection";
import OurTeam from "../components/home/OurTeam";
import Testimonial from "../components/home/Testimonial";
import Fooeter from "../components/home/Fooeter";

class AboutUsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <AboutBnr title = "ABOUT US"/>
                <AboutUsSection/>
                <OurTeam/>
                <Testimonial/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default AboutUsPage;