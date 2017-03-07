import React, {Component} from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Router, Link} from 'react-router';
// import history from '../constants/History';

const ACTIVE = {active: 'active'};
//TODO: break NavigationBar component into smaller components so that testing is simpler
export default class NavigationBar extends Component {

  /*
   * Router and Link components allow to set an ACTIVE state for an item of the Navigation bar by setting the 'activeStyle'
   */
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Home</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li role="presentation"><Link to="/artists" activeStyle={ACTIVE}>Discover Artists</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
