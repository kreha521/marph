
import React, { PropTypes, Component } from 'react';
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
                        <Nav activeKey={1}>
                            <LinkContainer to='/profile'>
                                <NavItem eventKey={1}>プロフィール</NavItem>
                            </LinkContainer>
                            <LinkContainer to='/works'>
                                <NavItem eventKey={2}>お仕事</NavItem>
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
