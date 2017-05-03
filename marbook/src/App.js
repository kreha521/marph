
import React, { Component } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class App extends Component {
    render() {
        return (
            <div>    
                <Navbar inverse fluid >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/home">Marbook</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>

                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to='/profile'>
                                <NavItem eventKey={'profile'}>プロフィール</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/works'>
                                <NavItem eventKey={'works'}>お仕事</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/interest'>
                                <NavItem eventKey={'interest'}>興味</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/contact'>
                                <NavItem eventKey={'contact'}>問合せ</NavItem>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
