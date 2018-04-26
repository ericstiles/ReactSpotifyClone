import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';

import { Link, withRouter } from 'react-router-dom';

import './NavBar.css';

const NavBar = ({ location }) => (
  <Nav bsStyle="pills" stacked bsClass={'navBar'}>
    <NavItem componentClass={Link} href="/" to="/">
      Home
    </NavItem>
    <NavItem componentClass={Link} href="/PlaylistsPage" to="/PlaylistsPage">
      Playlists
    </NavItem>
    <NavItem componentClass={Link} href="/NewReleasesPage" to="/NewReleasesPage">
      New releases
    </NavItem>

    <NavItem componentClass={Link} href="/AboutPage" to="/AboutPage">
      About us
    </NavItem>
  </Nav>
);

export default withRouter(NavBar);
