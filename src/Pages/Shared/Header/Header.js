import React from "react";
import "./Header.css";
import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQuery } from "react-query";

const Header = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const email = user?.email;

  const { data } = useQuery(["orders", email], () =>
    fetch(`https://red-onion-bp2q.onrender.com/order?email=${email}`).then((res) => res.json())
  );

  return (
    <Navbar className="py-4 menu-bar" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto ">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link className="d-flex align-items-center justify-content-center" as={Link} to="/cart">
              <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
              <Badge className="cart-badge">{data?.length}</Badge>
            </Nav.Link>
            {!user ? (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            ) : (
              <button
                onClick={() => {
                  signOut(auth);
                  toast.success("You are sign out");
                }}
                className="logout-btn"
              >
                Log Out
              </button>
            )}
            {user ? (
              <div className="d-flex align-items-center justify-content-center">
                <h4 className="m-0 me-3">{user?.displayName}</h4>
                <img className="rounded-circle user-img" src={user?.photoURL} alt="" />
              </div>
            ) : (
              <button onClick={() => navigate("/signup")} className="sign-up-btn">
                Sign up
              </button>
            )}
            <ToastContainer></ToastContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
