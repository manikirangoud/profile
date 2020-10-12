import  React, { useState } from 'react';
import { Nav } from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function Navigation() {

  const [navbarToggle, setNavbarToggle] = useState(false);
  var navbarClasses = navbarToggle ? 'navbar-collapse' : 'collapse navbar-collapse'; 

  return (
    <Router>
      <div className="navbar navbar-expand-lg navbar-light fixed-top">
          <Nav.Link className="navbar-brand pl-0" href="#">Manikirans' Portfolio</Nav.Link>
          <button className="navbar-toggler d-lg-none d-flex flex-column border-0" 
            type="button" data-toggle="collapse" 
            onClick = {() => setNavbarToggle(!navbarToggle)}
            data-target="#navbarContent" id="btnNavbar">
            <span className="icon-bar mt-1"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>        
          <div className={navbarClasses} id="navbarContent">
            <ul className="navbar-nav ml-auto">
                <Nav.Link className="nav-item active" href="#">L Music Player</Nav.Link>
                <Nav.Link className="nav-item" href="#">Food Order</Nav.Link>
                <Nav.Link className="nav-item" href="#">Bluetooth Beacons</Nav.Link>
                <Nav.Link className="nav-item" href="#">Hire Manikiran ?</Nav.Link>
            </ul>
          </div>
      </div>
      <Switch>
          <Route exact path="#">
          </Route>       
      </Switch>
    </Router>
  );
}

export default Navigation;
