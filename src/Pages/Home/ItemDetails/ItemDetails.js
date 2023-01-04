import React from "react";
import "./ItemDetails.css";
import { Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faMinus, faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ItemDetails = ({ itemId, items }) => {
  const itemDetails = items.find((item) => item._id === itemId);
  const [item, setItem] = useState(itemDetails);
  const { _id, name, price, description, img } = item;
  const [itemNumber, setItemNumber] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [itemsImg, setItemsImg] = useState(items.slice(0, 2));
  const [currentIndex, setCurrentIndex] = useState(2);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

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

  const handleItem = (item) => {
    setItem(item);
    setItemNumber(1);
    setTotalPrice(item.price);
  };

  const handleAddToCart = (id) => {
    if (user) {
      const order = {
        mealId: id,
        name,
        img,
        price,
        quantity: itemNumber,
        email: user.email,
      };

      fetch("http://localhost:5000/order", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(order),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            toast.success("Successfully meal added to the cart");
          } else {
            toast.error("Already added this meal to the cart");
          }
        });
    } else {
      navigate("/login");
    }
  };

  return (
    <Row className="my-5 py-5 item-details g-5">
      <PageTitle title="Item Details"></PageTitle>
      <Col xs={12} md={5} className="mt-5">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="price-container d-flex justify-content-between mt-5">
          <h1 className="w-25">${totalPrice}</h1>
          <div className="d-flex align-items-center minus-plus-btn">
            <button onClick={handleItemMinus} className="minus-btn fs-5">
              <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
            </button>
            <h3>{itemNumber}</h3>
            <button onClick={handleItemPlus} className="plus-btn fs-5">
              <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
            </button>
          </div>
        </div>
        <button onClick={() => handleAddToCart(_id)} className="add-btn">
          <FontAwesomeIcon className="me-3" icon={faCartPlus}></FontAwesomeIcon>Add
        </button>
        <div className="d-flex align-items-center my-5 py-4 items-img-container">
          {itemsImg.map((itemImg) => (
            <img onClick={() => handleItem(itemImg)} key={itemImg._id} src={itemImg.img} alt="" />
          ))}
          <button className="angle-right-btn w-100" onClick={displayNextTwoImg}>
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
