import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutUsPage from "../pages/AboutUsPage";
import ServicesPage from "../pages/ServicesPage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogPage from "../pages/BlogPage";
import ContactPage from "../pages/ContactPage";

class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutUsPage} />
                    <Route exact path="/service" component={ServicesPage} />
                    <Route exact path="/portfolio" component={PortfolioPage} />
                    <Route exact path="/blog" component={BlogPage} />
                    <Route exact path="/contact" component={ContactPage} />
                </Switch>
            </Fragment>
        );
    }
}

export default Router;