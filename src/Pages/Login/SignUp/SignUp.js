import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import logo from "../../../images/logo2.png";
import Loading from "../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, loading, error] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true,
  });
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  let errorElement;
  if (error || updateError) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (loading || updating) {
    return <Loading />;
  }

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Your two passwords are not the same 🤯");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    navigate("/");
  };

  return (
    <div className="container my-5 py-4">
      <Row className="form-container">
        <Col md={3}></Col>
        <Col md={6}>
          <div className="mx-auto w-75 mb-5">
            <img className="w-100" src={logo} alt="" />
          </div>
          <SocialLogin></SocialLogin>
          <Form onSubmit={handleSignUp}>
            <Form.Group className="mb-5" controlId="formBasicEmail">
              <Form.Control onBlur={(e) => setName(e.target.value)} type="text" placeholder="Name" required />
            </Form.Group>
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
            <Form.Group className="mb-5" controlId="formBasicPassword">
              <Form.Control
                onBlur={(e) => setConfirmPassword(e.target.value)}
                type="password"
                placeholder="Confirm Password"
                required
              />
            </Form.Group>
            <Button className="w-100" variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
          <p>
            Already have an account? <Link to={"/login"}>Sign in.</Link>
          </p>
          <ToastContainer />
          {errorElement}
        </Col>
        <Col md={3}></Col>
      </Row>
    </div>
  );
};

export default SignUp;
