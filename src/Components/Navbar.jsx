import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Styled/Navbar.css";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from "reactstrap";
import Logo from "./Img/S4Sc.png";

const Navigation = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar-wrap" color="black" light>
        <Link className="link" to="/">
          <img className="logo" src={Logo} alt="" />
        </Link>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link className="link" to="/contact">
                <h2>CONTACT</h2>
              </Link>
            </NavItem>
            <NavItem>
              <Link className="link" to="/team">
                <h2>TEAM</h2>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
