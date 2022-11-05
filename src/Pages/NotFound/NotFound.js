import React from "react";
import notfound from "../../images/not-found.jpg";

const NotFound = () => {
  return (
    <div className="container">
      <img className="img-fluid" src={notfound} alt="" />
    </div>
  );
};

export default NotFound;
