import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Navbar className="py-4 menu-items" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <button onClick={() => navigate("/signup")} className="sign-up-btn">
              Sign up
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
