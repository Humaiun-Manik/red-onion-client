import React from "react";
import { Button } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container d-flex align-items-center">
      <div className="container d-flex justify-content-center align-items-center">
        <div className="search-container">
          <h1 className=" text-center">Best food waiting for your belly</h1>
          <div className="search mx-auto mt-4 d-flex align-items-center">
            <input
              className="border-0 ps-4 rounded-pill w-75"
              type="search"
              name=""
              id=""
              placeholder="Search food items"
            />
            <Button className="search-btn" type="submit" variant="outline-success">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
