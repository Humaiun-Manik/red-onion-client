import React from "react";
import "./Cart.css";
import { Button, Col, Form, Row } from "react-bootstrap";
import PageTitle from "../Shared/PageTitle/PageTitle";

const Cart = () => {
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
          <div>
            <ul className="p-0 me-5 ">
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5">Subtotal.4 item</p>
                <p className="mb-0 mt-3 fs-5">$260.00</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5">Tex</p>
                <p className="mb-0 mt-3 fs-5">$4.00</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5">delivery fee</p>
                <p className="mb-0 mt-3 fs-5">$2.00</p>
              </li>
              <li className="d-flex justify-content-between">
                <p className="mb-0 mt-3 fs-5 fw-bold">Total</p>
                <p className="mb-0 mt-3 fs-5 fw-bold">$266.00</p>
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
