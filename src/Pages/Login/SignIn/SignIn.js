import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./SignIn.css";
import logo from "../../../images/logo2.png";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  return (
    <div className="container my-5 py-4">
      <Row className="form-container">
        <Col md={3}></Col>
        <Col md={6}>
          <div className="mx-auto w-75 mb-5">
            <img className="w-100" src={logo} alt="" />
          </div>
          <SocialLogin></SocialLogin>
          <Form>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="email" placeholder="Email" required />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
          <p>
            Don't have an account? <Link to={"/signup"}>Sign up.</Link>
          </p>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default SignIn;
