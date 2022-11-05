import React from "react";
import "./ItemDetails.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemDetails = ({ item }) => {
  const { name, price, description, img } = item;
  const [itemNumber, setItemNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(price));

  const handleItemMinus = () => {
    if (itemNumber <= 1) {
      return;
    }
    const totalItem = itemNumber - 1;
    setItemNumber(totalItem);
    setTotalPrice((price * totalItem).toFixed(2));
  };

  const handleItemPlus = () => {
    const totalItem = itemNumber + 1;
    setItemNumber(totalItem);
    setTotalPrice((price * totalItem).toFixed(2));
  };

  return (
    <Row className="my-5 py-5 item-details">
      <Col xs={12} md={6} className="mt-5">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="d-flex mt-5">
          <h1>${totalPrice}</h1>
          <div className="d-flex align-items-center ms-5 minus-plus-btn">
            <button onClick={handleItemMinus} className="minus-btn fs-5">
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <h3>{itemNumber}</h3>
            <button onClick={handleItemPlus} className="plus-btn fs-5">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <button className="add-btn">
          <FontAwesomeIcon className="me-3" icon={faCartPlus}></FontAwesomeIcon>Add
        </button>
      </Col>
      <Col xs={12} md={6}>
        <img className="w-100" src={img} alt="" />
      </Col>
    </Row>
  );
};

export default ItemDetails;
