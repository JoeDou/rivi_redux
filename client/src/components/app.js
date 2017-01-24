import React, { Component, PropTypes } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onClickLink(link) {
    this.context.router.push(link)
  }

  render() {
    let { location, children } = this.props

    return (
      <div>
        <Navbar fluid={true} className="navbar-cust">
          <Navbar.Header>
            <Navbar.Brand className="nav-title">
              My Recruiter App
            </Navbar.Brand>
          </Navbar.Header>
          <Nav pullRight className="nav-cust">
            <NavItem onClick={this.onClickLink.bind(this, '/')} active={location.pathname === '/'}>Home</NavItem>
          </Nav>
        </Navbar>
        { children }
      </div>
    )
  }
}
