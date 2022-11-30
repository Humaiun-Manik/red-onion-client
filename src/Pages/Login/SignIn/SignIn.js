import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import "./SignIn.css";
import logo from "../../../images/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import auth from "../../../firebase.init";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  let errorElement;
  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (loading || sending) {
    return <Loading />;
  }

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  const resetPassword = async () => {
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email", { icon: "🚀" });
    } else {
      toast.error("Please enter your email address!");
    }
  };

  return (
    <div className="container my-5 py-4">
      <PageTitle title="Login"></PageTitle>
      <Row className="form-container">
        <Col md={3}></Col>
        <Col md={6}>
          <div className="mx-auto w-75 mb-5">
            <img className="w-100" src={logo} alt="" />
          </div>
          <SocialLogin></SocialLogin>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control
                onBlur={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                required
              />
            </Form.Group>
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control
                onBlur={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            {errorElement}
            <Button className="w-100" variant="primary" type="submit">
              Sign In
            </Button>
          </Form>
          <div>
            <p className="text-center mt-4 fs-5">
              Forget Password?
              <button
                onClick={resetPassword}
                style={{ color: "#f91944", fontWeight: "500" }}
                className="bg-white ms-2 text-decoration-none border-0 p-0"
              >
                Reset Password.
              </button>
            </p>
          </div>
          <p className="my-3">
            Don't have an account? <Link to={"/signup"}>Sign up.</Link>
          </p>
          <ToastContainer></ToastContainer>
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default SignIn;
