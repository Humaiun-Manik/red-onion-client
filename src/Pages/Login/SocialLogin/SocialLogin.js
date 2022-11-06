import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
// fab fa-facebook
const SocialLogin = () => {
  return (
    <div className="text-center social-container">
      <button className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faGooglePlusG}></FontAwesomeIcon>
        continue with google
      </button>
      <button className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faGithub}></FontAwesomeIcon>continue with github
      </button>
      <button className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faFacebook}></FontAwesomeIcon>continue with facebook
      </button>
      <div className="d-flex align-items-center mb-4">
        <div className="w-50 border-bottom border-2 mx-4"></div>
        <div>
          <h2>or</h2>
        </div>
        <div className=" w-50 border-bottom border-2 mx-4"></div>
      </div>
    </div>
  );
};

export default SocialLogin;
