import React, {Component, Fragment} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import logo from '../../asset/images/logo.png'
import {NavLink} from "react-router-dom";

class TopNavBar extends Component {
    constructor() {
        super();
        this.state={
            navBgColor:"navBackground"

        }

    }
    onScroll = () => {
        if(window.scrollY>100){
            this.setState({navVariant:'light', navBgColor:'navBackgroundScroll'})
        }else if(window.scrollY<100){
            this.setState({navVariant:'dark',navBgColor:'navBackground'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Navbar fixed="top" className={this.state.navBgColor} expand="lg" >
                        <Navbar.Brand href="#home"><img src={logo} alt=""/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            </Nav>
                            <Nav >
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/">HOME</NavLink>      </Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/about">ABOUT US</NavLink>  </Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/service">SERVICE</NavLink>   </Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/portfolio">PORTFOLIO</NavLink> </Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/blog">BLOG</NavLink>      </Nav.Link>
                                <Nav.Link> <NavLink exact activeStyle={{color:'#0EA390'}} to="/contact">CONTACT</NavLink>   </Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </Fragment>
        );
    }
}

export default TopNavBar;