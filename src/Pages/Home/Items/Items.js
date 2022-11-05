import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Item from "../Item/Item";
import "./Items.css";

const Items = () => {
  const [loadItems, setLoadItems] = useState("breakfast.json");
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(loadItems)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [loadItems]);

  return (
    <div className="container">
      <div className="items-container d-flex justify-content-center my-5">
        <button onClick={async () => await setLoadItems("breakfast.json")}>Breakfast</button>
        <button onClick={async () => await setLoadItems("lunch.json")}>Lunch</button>
        <button onClick={async () => await setLoadItems("dinner.json")}>Dinner</button>
      </div>
      <Row xs={1} md={2} lg={3} className="g-5 my-5">
        {items.map((item) => (
          <Item key={item.id} item={item}></Item>
        ))}
      </Row>
    </div>
  );
};

export default Items;
