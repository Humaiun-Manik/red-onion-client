import React from "react";
import { Col, Row } from "react-bootstrap";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="container">
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <h1>please login</h1>
        </Col>
        <Col md={4}></Col>
      </Row>
    </div>
  );
};

export default SignIn;
