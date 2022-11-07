import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import auth from "../../../firebase.init";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const navigate = useNavigate();

  let errorElement;
  if (googleError) {
    errorElement = <p className="text-danger">Error: {googleError.message} </p>;
  }
  if (googleLoading) {
    return <p>Loading...</p>;
  }
  if (googleUser) {
    return navigate("/");
  }

  return (
    <div className="text-center social-container">
      <button onClick={() => signInWithGoogle()} className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faGooglePlusG}></FontAwesomeIcon>
        continue with google
      </button>
      <button onClick={() => signInWithGithub()} className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faGithub}></FontAwesomeIcon>continue with github
      </button>
      <button onClick={() => signInWithFacebook()} className="w-75 mb-4">
        <FontAwesomeIcon className="fs-3 me-2" icon={faFacebook}></FontAwesomeIcon>continue with facebook
      </button>
      {errorElement}
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
