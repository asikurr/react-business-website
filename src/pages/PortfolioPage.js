import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import AboutBnr from "../components/About/AboutBnr";
import Fooeter from "../components/home/Fooeter";
import Portfolio from "../components/portfolio/Portfolio";

class PortfolioPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <AboutBnr title="PORTFOLIO"/>
                <Portfolio/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default PortfolioPage;