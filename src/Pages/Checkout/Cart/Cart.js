import React from "react";
import "./Cart.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";
import OrderFood from "../OrderFood/OrderFood";

const Cart = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { data: meals, isLoading } = useQuery(["orders", email], () =>
    fetch(`https://red-onion-bp2q.onrender.com/order?email=${email}`).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  let subTotal = 0;
  meals.forEach((meal) => {
    const mealPrice = meal.price * meal.quantity;
    subTotal = subTotal + mealPrice;
  });
  const tax = ((subTotal * 5) / 100).toFixed(2);
  const total = subTotal + parseFloat(tax) + 2;

  return (
    <div className="container my-5 py-4">
      <PageTitle title="Cart"></PageTitle>
      <Row>
        <Col md={6}>
          <h4>Edit Delivery Details</h4>
          <hr />
          <div className="form-container">
            <Form>
              <Form.Group className="my-5" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Input full name" required />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Input mobile number" required />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Input your city/municipality" required />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Home no. / building / street / area" required />
              </Form.Group>
              <Form.Group className="mb-5" controlId="formBasicPassword">
                <Form.Control type="text" placeholder="Road No" required />
              </Form.Group>
              <Button className="w-100" variant="primary" type="submit">
                Save & Continue
              </Button>
            </Form>
          </div>
        </Col>
        <Col md={2}></Col>
        <Col md={4}>
          <div className="mt-4">
            <p className="text-start mb-2 fs-5">
              From <strong>Gulshan Plaza Restaura GPR</strong>
            </p>
            <small style={{ fontSize: "18px" }}>Arriving in 20-30 min</small>
          </div>
          {meals.map((meal) => (
            <OrderFood key={meal._id} meal={meal}></OrderFood>
          ))}
          <div>
            <ul className="p-0 me-5 ">
              <li className="d-flex justify-content-between">
                <div className="mb-0 mt-3 fs-5 d-flex">
                  <p className="mb-0">Subtotal</p>
                  <ul>
                    <li>{meals.length} item</li>
                  </ul>
                </div>
                <p className="mb-0 mt-3 fs-5">${subTotal.toFixed(2)}</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5">Tex</p>
                <p className="mb-0 mt-3 fs-5">${tax}</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5">delivery fee</p>
                <p className="mb-0 mt-3 fs-5">$2.00</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5 fw-bold">Total</p>
                <p className="mb-0 mt-3 fs-5 fw-bold">${total.toFixed(2)}</p>
              </li>
            </ul>
          </div>
          <button className="checkout-btn my-5 border-0 w-100 me-5">Place Order</button>
        </Col>
      </Row>
    </div>
  );
};

export default Cart;
