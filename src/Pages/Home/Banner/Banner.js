import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="search-container">
          <h1 className=" text-center">Best food waiting for your belly</h1>
          <div className="search-form  mx-auto mt-4">
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search food items"
                className="border-0 ps-4 rounded-pill"
                aria-label="Search"
              />
              <Button className="search-btn" type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
