import React, {Component, Fragment} from 'react';
import TopNavBar from "../components/home/TopNavBar";
import AboutBnr from "../components/About/AboutBnr";
import Blog from "../components/Blog/Blog";
import Fooeter from "../components/home/Fooeter";

class BlogPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavBar/>
                <AboutBnr title = "BLOG"/>
                <Blog/>
                <Fooeter/>
            </Fragment>
        );
    }
}

export default BlogPage;