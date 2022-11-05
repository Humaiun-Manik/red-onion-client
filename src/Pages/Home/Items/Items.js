import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./Items.css";

const Items = () => {
  const [loadItems, setLoadItems] = useState("breakfast.json");
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    fetch(loadItems)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [loadItems]);

  const handleLoadItems = (items) => {
    setLoadItems(items);
    setItemId("");
  };

  const handleItemDetails = (id) => {
    setItemId(id);
  };

  const item = items.find((item) => item.id === itemId);

  return (
    <div className="container">
      <div className="items-container d-flex justify-content-center my-5">
        <button onClick={() => handleLoadItems("breakfast.json")}>Breakfast</button>
        <button onClick={() => handleLoadItems("lunch.json")}>Lunch</button>
        <button onClick={() => handleLoadItems("dinner.json")}>Dinner</button>
        {/* <button onClick={async () => await setLoadItems("breakfast.json")}>Breakfast</button>
        <button onClick={async () => await setLoadItems("lunch.json")}>Lunch</button>
        <button onClick={async () => await setLoadItems("dinner.json")}>Dinner</button> */}
      </div>
      {!itemId ? (
        <Row xs={1} md={2} lg={3} className="g-5 my-5">
          {items.map((item) => (
            <Item key={item.id} item={item} handleItemDetails={handleItemDetails}></Item>
          ))}
        </Row>
      ) : (
        <ItemDetails item={item}></ItemDetails>
      )}
      <button className="checkout-btn my-5 border-0 d-block mx-auto">Checkout Your Food</button>
    </div>
  );
};

export default Items;
