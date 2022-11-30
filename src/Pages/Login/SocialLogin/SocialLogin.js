import React from "react";
import "./SocialLogin.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import auth from "../../../firebase.init";
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  const [signInWithFacebook, facebookUser, facebookLoading, facebookError] = useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const location = useLocation();

  let errorElement;
  if (googleError || githubError || facebookError) {
    errorElement = (
      <p className="text-danger">
        Error: {googleError?.message} {githubError?.message} {facebookError?.message}
      </p>
    );
  }

  if (googleLoading || githubLoading || facebookLoading) {
    return <Loading></Loading>;
  }

  let from = location.state?.from?.pathname || "/";
  if (googleUser || githubUser || facebookUser) {
    navigate(from, { replace: true });
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
