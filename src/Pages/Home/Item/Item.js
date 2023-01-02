import React from "react";
import "./Item.css";
import { Card, Col } from "react-bootstrap";

const Item = ({ item, handleItemDetails }) => {
  const { _id, name, img, title, price } = item;

  return (
    <Col onClick={() => handleItemDetails(_id)} className="item">
      <Card className="text-center border-0">
        <Card.Img className="w-75 mx-auto mb-4" variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <p>{title}</p>
          <h3>$ {price}</h3>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Item;
