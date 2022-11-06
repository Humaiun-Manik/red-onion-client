import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../images/logo2.png";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  return (
    <div className="container my-5 py-4">
      <Row className="login-container">
        <Col md={3}></Col>
        <Col md={6}>
          <div className="mx-auto w-75 mb-5">
            <img className="w-100" src={logo} alt="" />
          </div>
          <SocialLogin></SocialLogin>
          <Form>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Name" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Confirm Password" required />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>
            Already have an account? <Link to={"/login"}>Sign in.</Link>
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default SignUp;
