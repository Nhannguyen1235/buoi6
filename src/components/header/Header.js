import React, { useContext, useState } from "react";
import './Header.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

export default function Header() {
  const [collapsed, setCollapsed] = useState(true);
  const {card} = useContext(AppContext)
  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="header">
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          Home
        </NavbarBrand>
        <NavbarBrand href="/card" className="me-auto left" >
        <Link to='/card' className="cl-white navbar-brand left">
          Card <span>{card.length}</span>
        </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="me-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/card">
                Card
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}