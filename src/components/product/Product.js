import React from "react";
import "./product.css";
import { addItem } from "../cart/cartSlice";
import { useDispatch } from "react-redux";
const Product = (props) => {
  const dispatch = useDispatch();

  const { id, name, picture, price } = props;
  return (
    <div className="product_container">
      <div className="left_product_container">
        <img className="product_img" src={picture} alt={name} />
        <h2>{name}</h2>
      </div>
      <div className="right_product_container">
        <h1>${price}</h1>
        <button
          className="addButton"
          onClick={() => {
            const payload = { id, name, picture, price };
            console.log("sent payload", payload);
            dispatch(addItem(payload));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Product;
