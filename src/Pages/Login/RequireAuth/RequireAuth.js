import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import { useSendEmailVerification } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification, sending] = useSendEmailVerification(auth);
  const location = useLocation();

  if (loading || sending) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center my-5 py-5">
        <h3 className="text-danger">Your email is not verified!!</h3>
        <h5 className="text-success">Please verify your email address.</h5>
        <button
          className="checkout-btn border-0"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent email");
          }}
        >
          Send verification email again
        </button>
        <ToastContainer></ToastContainer>
      </div>
    );
  }

  return children;
};

export default RequireAuth;
