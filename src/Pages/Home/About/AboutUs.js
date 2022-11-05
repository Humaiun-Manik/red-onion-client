import React from "react";
import "./AboutUs.css";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const [aboutUs, setAboutUs] = useState([]);

  useEffect(() => {
    fetch("aboutUs.json")
      .then((res) => res.json())
      .then((data) => setAboutUs(data));
  }, []);

  return (
    <div className="container my-5">
      <div className="w-50 mt-3">
        <h1>Why you choose us?</h1>
        <p className="fw-bold mt-3">
          Barton waited twenty always repair in within we do. An delighted offending curiosity my is dashwoods
          at. Boy prosperous increasing surrounded
        </p>
      </div>
      <div>
        <Row xs={1} md={2} lg={3} className="g-4 mt-4">
          {aboutUs.map((about) => (
            <Col key={about.id}>
              <Card className="border-0 about-us">
                <Card.Img variant="top" src={about.img} />
                <Card.Body className="d-flex mt-4">
                  <div className="me-3">
                    <img src={about.icon} alt="" />
                  </div>
                  <div>
                    <h5>{about.name}</h5>
                    <p>{about.description}</p>
                    <Link className="d-flex" to={""}>
                      See more
                      <FontAwesomeIcon className="ms-3 arrow-icon" icon={faArrowRight}></FontAwesomeIcon>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AboutUs;
