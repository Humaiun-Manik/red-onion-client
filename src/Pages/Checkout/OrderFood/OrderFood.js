import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

const OrderFood = ({ meal }) => {
  const { name, img, price, quantity } = meal;
  const [itemNumber, setItemNumber] = useState(quantity);
  //   const [totalPrice, setTotalPrice] = useState();

  const handleItemMinus = () => {
    if (itemNumber <= 1) {
      return;
    }
    const totalItem = itemNumber - 1;
    setItemNumber(totalItem);
  };

  const handleItemPlus = () => {
    const totalItem = itemNumber + 1;
    setItemNumber(totalItem);
  };

  return (
    <div className="d-flex mt-3">
      <div className="d-flex align-items-center">
        <img className="w-25 img-fluid me-3" src={img} alt="" />
        <div>
          <p className="fs-6 fw-semibold mb-0">{name}</p>
          <p style={{ color: "#f91944" }} className="fs-5 fw-bold mb-0">
            $ {(price * itemNumber).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="d-flex align-items-center w-100">
        <button onClick={handleItemMinus} className="btn btn-light fs-6 border border-0">
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <h3 className="px-2">{itemNumber}</h3>
        <button onClick={handleItemPlus} className="btn btn-light fs-6 border border-0">
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default OrderFood;
