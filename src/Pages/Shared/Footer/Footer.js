import React from "react";
import "./Footer.css";
import { Col, Row } from "react-bootstrap";
import logo from "../../../images/logo.png";

const Footer = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  return (
    <div className="footer-container py-5">
      <div className="container my-4">
        <Row>
          <Col xs={12} md={6}>
            <img src={logo} alt="" />
          </Col>
          <Col xs={12} md={3}>
            <ul>
              <li>About Online food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
          </Col>
          <Col xs={12} md={3}>
            <ul>
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-5 pt-5">
          <Col xs={12} lg={7}>
            <p>Copyright &#169; {fullYear} Online food</p>
          </Col>
          <Col xs={12} lg={5}>
            <ul className="d-flex">
              <li className="mx-4">Privacy Policy.</li>
              <li className="mx-4">Terms of Use</li>
              <li className="mx-4">Pricing</li>
            </ul>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
