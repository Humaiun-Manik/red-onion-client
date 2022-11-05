import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="search-container">
          <h1 className="">Best food waiting for your belly</h1>
          <Form className="w-75 d-flex mx-auto mt-4">
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
  );
};

export default Banner;
