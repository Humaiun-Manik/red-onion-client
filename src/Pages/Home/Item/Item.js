import React from "react";
import "./Item.css";
import { Card, Col } from "react-bootstrap";

const Item = ({ item }) => {
  return (
    <Col className="item">
      <Card className="text-center border-0">
        <Card.Img className="w-75 mx-auto mb-4" variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <p>{item.description}</p>
          <h3>$ {item.price}</h3>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
