import React from "react";
import "./ItemDetails.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ItemDetails = ({ itemId, items }) => {
  const item = items.find((item) => item.id === itemId);
  const { name, price, description, img } = item;
  const [itemNumber, setItemNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(parseFloat(price));
  const [itemsImg, setItemsImg] = useState(items.slice(0, 2));
  const [currentIndex, setCurrentIndex] = useState(2);

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

  const displayNextTwoImg = () => {
    if (currentIndex + 2 <= items.length) {
      const twoItems = items.slice(currentIndex, currentIndex + 2);
      setItemsImg(twoItems);
      setCurrentIndex(currentIndex + 2);
    } else {
      setItemsImg(items.slice(0, 2));
      setCurrentIndex(2);
    }
  };

  return (
    <Row className="my-5 py-5 item-details g-5">
      <Col xs={12} md={5} className="mt-5">
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
        <div className="d-flex my-5 py-4 items-img-container">
          {itemsImg.map((itemImg) => (
            <img key={itemImg.id} src={itemImg.img} alt="" />
          ))}
          <button className="angle-right-btn" onClick={displayNextTwoImg}>
            <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
          </button>
        </div>
      </Col>
      <Col xs={12} md={7}>
        <img className="w-100 ps-5" src={img} alt="" />
      </Col>
    </Row>
  );
};

export default ItemDetails;
