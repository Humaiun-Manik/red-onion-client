import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../Shared/PageTitle/PageTitle";
import Item from "../Item/Item";
import ItemDetails from "../ItemDetails/ItemDetails";
import "./Items.css";

const Items = () => {
  const [loadItems, setLoadItems] = useState("breakfast.json");
  const [items, setItems] = useState([]);
  const [itemId, setItemId] = useState("");
  const [title, setTitle] = useState("Home");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(loadItems)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [loadItems]);

  const handleLoadItems = (items, title) => {
    setLoadItems(items);
    setItemId("");
    setTitle(title);
  };

  const handleItemDetails = (id) => {
    setItemId(id);
  };

  return (
    <div className="container">
      <PageTitle title={title}></PageTitle>
      <div className="items-container d-flex justify-content-center my-5">
        <button onClick={() => handleLoadItems("breakfast.json", "Breakfast")}>Breakfast</button>
        <button onClick={() => handleLoadItems("lunch.json", "Lunch")}>Lunch</button>
        <button onClick={() => handleLoadItems("dinner.json", "Dinner")}>Dinner</button>
      </div>
      {!itemId ? (
        <Row xs={1} md={2} lg={3} className="g-5 my-5">
          {items.map((item) => (
            <Item key={item.id} item={item} handleItemDetails={handleItemDetails}></Item>
          ))}
        </Row>
      ) : (
        <ItemDetails itemId={itemId} items={items}></ItemDetails>
      )}
      <button onClick={() => navigate("/cart")} className="checkout-btn my-5 border-0 d-block mx-auto">
        Checkout Your Food
      </button>
    </div>
  );
};

export default Items;
