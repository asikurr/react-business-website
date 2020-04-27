import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import AboutBnr from "../components/About/AboutBnr";
import BetterLife from "../components/Service/BetterLife";
import AllSercices from "../components/Service/AllSercices";
import AskQuestion from "../components/Service/AskQuestion";
import Fooeter from "../components/home/Fooeter";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <AboutBnr title = "SERVICE"/>
                <BetterLife/>
                <AllSercices/>
                <AskQuestion/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default ServicesPage;