import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import Slider from "../components/home/Slider";
import Skill from "../components/home/Skill";
import OurTeam from "../components/home/OurTeam";
import Project from "../components/home/Project";
import AboutUs from "../components/home/AboutUs";
import Testimonial from "../components/home/Testimonial";
import Blog from "../components/home/Blog";
import Fooeter from "../components/home/Fooeter";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <Slider/>
                <Skill/>
                <OurTeam/>
                <Project/>
                <AboutUs/>
                <Testimonial/>
                <Blog/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default HomePage;